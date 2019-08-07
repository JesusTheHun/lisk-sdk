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
import { APIClient } from '../api_client';
import { apiMethod } from '../api_method';
import { APIResource } from '../api_resource';
import { APIHandler } from '../api_types';
import { GET } from '../constants';

export class VotesResource extends APIResource {
	public get: APIHandler;
	public path: string;

	public constructor(apiClient: APIClient) {
		super(apiClient);
		this.path = '/votes';

		/**
		 * Returns all votes placed by an account.
		 *
		 * ```ts
		 * client.accounts.get({ address: '15434119221255134066L' })
		 *   .then(res => {
		 *     console.log(res.data);
		 * });
		 * ```
		 */
		this.get = apiMethod({
			method: GET,
		}).bind(this);
	}
}
