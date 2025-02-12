/*
 * Copyright © 2019 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import * as querystring from 'querystring';
import * as socketClusterClient from 'socketcluster-client';

import {
	ConnectionKind,
	DEFAULT_ACK_TIMEOUT,
	DEFAULT_CONNECT_TIMEOUT,
	DEFAULT_HTTP_PATH,
	INTENTIONAL_DISCONNECT_CODE,
} from '../constants';
import {
	EVENT_CLOSE_OUTBOUND,
	EVENT_CONNECT_ABORT_OUTBOUND,
	EVENT_CONNECT_OUTBOUND,
	EVENT_FAILED_TO_COLLECT_PEER_DETAILS_ON_CONNECT,
	EVENT_OUTBOUND_SOCKET_ERROR,
	REMOTE_EVENT_PING,
	REMOTE_EVENT_PONG,
	REMOTE_SC_EVENT_MESSAGE,
	REMOTE_SC_EVENT_RPC_REQUEST,
} from '../events';
import {
	P2PMessagePacket,
	P2PPeerInfo,
	P2PRequestPacket,
	P2PResponsePacket,
} from '../types';

import {
	Peer,
	PeerConfig,
	SCClientSocket,
	socketErrorStatusCodes,
} from './base';

interface ClientOptionsUpdated {
	readonly hostname: string;
	readonly path: string;
	readonly port: number;
	readonly query: string;
	readonly autoConnect: boolean;
	readonly autoReconnect: boolean;
	readonly multiplex: boolean;
	readonly ackTimeout?: number;
	readonly connectTimeout?: number;
	readonly maxPayload?: number;
}

export class OutboundPeer extends Peer {
	protected _socket: SCClientSocket | undefined;

	public constructor(peerInfo: P2PPeerInfo, peerConfig: PeerConfig) {
		super(peerInfo, peerConfig);
		this._peerInfo.internalState.connectionKind = ConnectionKind.OUTBOUND;
	}

	public set socket(scClientSocket: SCClientSocket) {
		if (this._socket) {
			this._unbindHandlersFromOutboundSocket(this._socket);
		}
		this._socket = scClientSocket;
		this._bindHandlersToOutboundSocket(this._socket);
	}

	public connect(): void {
		if (!this._socket) {
			this._socket = this._createOutboundSocket();
		}
		this._socket.connect();
	}

	public disconnect(
		code: number = INTENTIONAL_DISCONNECT_CODE,
		reason?: string,
	): void {
		super.disconnect(code, reason);
		if (this._socket) {
			this._unbindHandlersFromOutboundSocket(this._socket);
		}
	}

	public send(packet: P2PMessagePacket): void {
		if (!this._socket) {
			this._socket = this._createOutboundSocket();
		}

		super.send(packet);
	}

	public async request(packet: P2PRequestPacket): Promise<P2PResponsePacket> {
		if (!this._socket) {
			this._socket = this._createOutboundSocket();
		}

		return super.request(packet);
	}

	private _createOutboundSocket(): SCClientSocket {
		const connectTimeout = this._peerConfig.connectTimeout
			? this._peerConfig.connectTimeout
			: DEFAULT_CONNECT_TIMEOUT;
		const ackTimeout = this._peerConfig.ackTimeout
			? this._peerConfig.ackTimeout
			: DEFAULT_ACK_TIMEOUT;
		// Ideally, we should JSON-serialize the whole NodeInfo object but this cannot be done for compatibility reasons, so instead we put it inside an options property.
		const clientOptions: ClientOptionsUpdated = {
			hostname: this.ipAddress,
			path: DEFAULT_HTTP_PATH,
			port: this.wsPort,
			query: querystring.stringify({
				...this._serverNodeInfo,
				options: JSON.stringify(this._serverNodeInfo),
			}),
			connectTimeout,
			ackTimeout,
			multiplex: false,
			autoConnect: false,
			autoReconnect: false,
			maxPayload: this._peerConfig.wsMaxPayload,
		};

		const outboundSocket = socketClusterClient.create(clientOptions);

		this._bindHandlersToOutboundSocket(outboundSocket);

		return outboundSocket;
	}

	// All event handlers for the outbound socket should be bound in this method.
	private _bindHandlersToOutboundSocket(outboundSocket: SCClientSocket): void {
		outboundSocket.on('error', (error: Error) => {
			this.emit(EVENT_OUTBOUND_SOCKET_ERROR, error);
		});

		outboundSocket.on('connect', async () => {
			try {
				await this.fetchAndUpdateStatus();
			} catch (error) {
				this.emit(EVENT_FAILED_TO_COLLECT_PEER_DETAILS_ON_CONNECT, error);

				return;
			}

			try {
				await this.discoverPeers();
			} catch (error) {
				this.emit(EVENT_FAILED_TO_COLLECT_PEER_DETAILS_ON_CONNECT, error);
			}

			this.emit(EVENT_CONNECT_OUTBOUND, this._peerInfo);
		});

		outboundSocket.on('connectAbort', () => {
			this.emit(EVENT_CONNECT_ABORT_OUTBOUND, this._peerInfo);
		});

		outboundSocket.on(
			'close',
			(code: number, reasonMessage: string | undefined) => {
				const reason = reasonMessage
					? reasonMessage
					: socketErrorStatusCodes[code] || 'Unknown reason';
				this.emit(EVENT_CLOSE_OUTBOUND, {
					peerInfo: this._peerInfo,
					code,
					reason,
				});
			},
		);

		outboundSocket.on('message', this._handleWSMessage);

		outboundSocket.on(
			REMOTE_EVENT_PING,
			(_: undefined, res: (_: undefined, data: string) => void) => {
				res(undefined, REMOTE_EVENT_PONG);
			},
		);

		// Bind RPC and remote event handlers
		outboundSocket.on(REMOTE_SC_EVENT_RPC_REQUEST, this._handleRawRPC);
		outboundSocket.on(REMOTE_SC_EVENT_MESSAGE, this._handleRawMessage);
	}

	// All event handlers for the outbound socket should be unbound in this method.
	private _unbindHandlersFromOutboundSocket(
		outboundSocket: SCClientSocket,
	): void {
		// Do not unbind the error handler because error could still throw after disconnect.
		// We don't want to have uncaught errors.
		outboundSocket.off('connect');
		outboundSocket.off('connectAbort');
		outboundSocket.off('close');
		outboundSocket.off('message', this._handleWSMessage);

		// Unbind RPC and remote event handlers
		outboundSocket.off(REMOTE_SC_EVENT_RPC_REQUEST, this._handleRawRPC);
		outboundSocket.off(REMOTE_SC_EVENT_MESSAGE, this._handleRawMessage);
		outboundSocket.off(REMOTE_EVENT_PING);
	}
}
