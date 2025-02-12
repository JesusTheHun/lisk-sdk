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
import { SCServerSocket } from 'socketcluster-server';

import { ConnectionKind, PeerKind } from './constants';
import { PeerBook } from './peer_book';

export interface P2PRequestPacket {
	readonly data?: unknown;
	readonly procedure: string;
}

export interface P2PResponsePacket {
	readonly peerId?: string;
	readonly data: unknown;
}

export interface P2PMessagePacket {
	readonly peerId?: string;
	readonly data?: unknown;
	readonly event: string;
}

export interface P2PClosePacket {
	readonly peerInfo: P2PPeerInfo;
	readonly code: number;
	readonly reason?: string;
}

export interface P2PPenalty {
	readonly peerId: string;
	readonly penalty: number;
}

export interface P2PSharedState {
	// tslint:disable-next-line: no-mixed-interface
	readonly [key: string]: unknown;
}
// Disable readonly properties as its going to change
// tslint:disable:readonly-keyword
export interface P2PInternalState {
	dateAdded?: Date;
	peerKind: PeerKind;
	productivity: {
		requestCounter: number;
		responseCounter: number;
		responseRate: number;
		lastResponded: number;
	};
	reputation: number;
	netgroup: number;
	latency: number;
	connectTime: number;
	messageCounter: Map<string, number>;
	messageRates: Map<string, number>;
	rpcCounter: Map<string, number>;
	rpcRates: Map<string, number>;
	wsMessageCount: number;
	wsMessageRate: number;
	connectionKind: ConnectionKind;
	advertiseAddress: boolean;
}
// tslint:enable:readonly-keyword
export interface P2PPeerInfo {
	// String to uniquely identify each peer
	readonly peerId: string;
	readonly ipAddress: string;
	readonly wsPort: number;
	readonly sharedState?: P2PSharedState;
	readonly internalState?: P2PInternalState;
}

export type P2PEnhancedPeerInfo = {
	readonly dateAdded?: Date;
	readonly numOfConnectionFailures?: number;
	readonly sourceAddress?: string;
	readonly bucketId?: number;
} & P2PPeerInfo;

export interface P2PPeersCount {
	readonly outboundCount: number;
	readonly inboundCount: number;
}

// P2PPeerInfo and P2PNodeInfo are related.
// P2PNodeInfo is the outbound info from our node.
export interface P2PNodeInfo extends P2PSharedState {
	readonly protocolVersion: string;
	readonly os: string;
	readonly networkId: string;
	readonly wsPort: number;
	readonly advertiseAddress: boolean;
	readonly nonce: string;
}

// This is a representation of the inbound peer object according to the current protocol.
// TODO later: Switch to LIP protocol format.
// TODO: Include peerId as field
export interface ProtocolPeerInfo {
	// To support the existing protocol
	readonly ipAddress: string;
	readonly wsPort: number;
	// tslint:disable-next-line: no-mixed-interface
	readonly [key: string]: unknown;
}

export interface IncomingPeerConnection {
	readonly peerInfo: P2PPeerInfo;
	readonly socket: SCServerSocket;
}

export interface P2PConfig {
	readonly blacklistedIPs?: ReadonlyArray<string>;
	readonly seedPeers?: ReadonlyArray<ProtocolPeerInfo>;
	readonly fixedPeers?: ReadonlyArray<ProtocolPeerInfo>;
	readonly whitelistedPeers?: ReadonlyArray<ProtocolPeerInfo>;
	readonly previousPeers?: ReadonlyArray<ProtocolPeerInfo>;
	readonly connectTimeout?: number;
	readonly ackTimeout?: number;
	readonly nodeInfo: P2PNodeInfo;
	readonly populatorInterval?: number;
	readonly fallbackSeedPeerDiscoveryInterval?: number;
	readonly maxOutboundConnections: number;
	readonly maxInboundConnections: number;
	readonly wsMaxPayload?: number;
	readonly peerSelectionForSend?: P2PPeerSelectionForSendFunction;
	readonly peerSelectionForRequest?: P2PPeerSelectionForRequestFunction;
	readonly peerSelectionForConnection?: P2PPeerSelectionForConnectionFunction;
	readonly peerHandshakeCheck?: P2PCheckPeerCompatibility;
	readonly peerBanTime?: number;
	readonly sendPeerLimit?: number;
	readonly outboundShuffleInterval?: number;
	readonly latencyProtectionRatio?: number;
	readonly productivityProtectionRatio?: number;
	readonly longevityProtectionRatio?: number;
	readonly netgroupProtectionRatio?: number;
	readonly hostIp?: string;
	readonly wsMaxMessageRate?: number;
	readonly wsMaxMessageRatePenalty?: number;
	readonly rateCalculationInterval?: number;
	readonly minimumPeerDiscoveryThreshold?: number;
	readonly maxPeerDiscoveryResponseLength?: number;
	readonly maxPeerInfoSize?: number;
	readonly secret?: number;
}

export interface PeerServerConfig {
	readonly nodeInfo: P2PNodeInfo;
	readonly hostIp: string;
	readonly secret: number;
	readonly peerBook: PeerBook;
	readonly maxPayload: number;
	readonly maxPeerInfoSize: number;
	readonly peerHandshakeCheck: P2PCheckPeerCompatibility;
}

export interface P2PPeerSelectionForSendInput {
	readonly peers: ReadonlyArray<P2PPeerInfo>;
	readonly nodeInfo?: P2PNodeInfo;
	readonly peerLimit?: number;
	readonly messagePacket?: P2PMessagePacket;
}

export type P2PPeerSelectionForSendFunction = (
	input: P2PPeerSelectionForSendInput,
) => ReadonlyArray<P2PPeerInfo>;

export interface P2PPeerSelectionForRequestInput {
	readonly peers: ReadonlyArray<P2PPeerInfo>;
	readonly nodeInfo?: P2PNodeInfo;
	readonly peerLimit?: number;
	readonly requestPacket?: P2PRequestPacket;
}

export type P2PPeerSelectionForRequestFunction = (
	input: P2PPeerSelectionForRequestInput,
) => ReadonlyArray<P2PPeerInfo>;

export interface P2PPeerSelectionForConnectionInput {
	readonly newPeers: ReadonlyArray<P2PPeerInfo>;
	readonly triedPeers: ReadonlyArray<P2PPeerInfo>;
	readonly nodeInfo?: P2PNodeInfo;
	readonly peerLimit?: number;
}

export type P2PPeerSelectionForConnectionFunction = (
	input: P2PPeerSelectionForConnectionInput,
) => ReadonlyArray<P2PPeerInfo>;

export interface P2PCompatibilityCheckReturnType {
	readonly success: boolean;
	readonly error?: string;
}

export type P2PCheckPeerCompatibility = (
	headers: P2PPeerInfo,
	nodeInfo: P2PNodeInfo,
) => P2PCompatibilityCheckReturnType;

export interface PeerLists {
	readonly blacklistedIPs: ReadonlyArray<string>;
	readonly seedPeers: ReadonlyArray<P2PPeerInfo>;
	readonly fixedPeers: ReadonlyArray<P2PPeerInfo>;
	readonly whitelisted: ReadonlyArray<P2PPeerInfo>;
	readonly previousPeers: ReadonlyArray<P2PPeerInfo>;
}
