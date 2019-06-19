/*
 * Copyright © 2018 Lisk Foundation
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
import { APIClient } from '../api_client';
import { apiMethod } from '../api_method';
import { APIResource } from '../api_resource';
import { APIHandler } from '../api_types';
import { POST } from '../constants';

export class SignaturesResource extends APIResource {
	/**
	 * Submits a signature to sign a multisignature transaction.
	 *
	 * ### Usage Example
	 * ```ts
	 * client.accounts.broadcast({
	 *   transactionId: '222675625422353767',
	 *   publicKey: '2ca9a7143fc721fdc540fef893b27e8d648d2288efa61e56264edf01a2c23079',
	 *   signature: '2821d93a742c4edf5fd960efad41a4def7bf0fd0f7c09869aed524f6f52bf9c97a617095e2c712bd28b4279078a29509b339ac55187854006591aa759784c205',
	 * })
	 *   .then(res => {
	 *     console.log(res.data);
	 * });
	 * ```
	 */
	public broadcast: APIHandler;
	public path: string;

	public constructor(apiClient: APIClient) {
		super(apiClient);
		this.path = '/signatures';

		this.broadcast = apiMethod({
			method: POST,
		}).bind(this);
	}
}
