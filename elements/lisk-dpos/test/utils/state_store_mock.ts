/*
 * Copyright © 2020 Lisk Foundation
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
 */
import { Account } from '../../src/types';

interface AccountStoreMock {
	get: (address: string) => Promise<Account>;
	getUpdated: () => Account[];
	set: (address: string, account: Account) => void;
}

interface ChainStateStoreMock {
	get: (address: string) => Promise<string | undefined>;
	set: (key: string, v: string) => void;
}

interface ChainState {
	[key: string]: string;
}

export class StateStoreMock {
	public account: AccountStoreMock;
	public chainState: ChainStateStoreMock;

	public accountData: Account[];
	public chainStateData: ChainState;

	constructor(initialAccount?: Account[], initialState?: ChainState) {
		// Make sure to be deep copy
		this.accountData = initialAccount
			? initialAccount.map(a => ({ ...a }))
			: [];
		this.chainStateData = initialState ? { ...initialState } : {};

		this.account = {
			get: async (address: string): Promise<Account> => {
				const account = this.accountData.find(acc => acc.address === address);
				if (!account) {
					throw new Error('Account not defined');
				}
				return { ...account };
			},
			set: (address: string, account: Account): void => {
				const index = this.accountData.findIndex(
					acc => acc.address === address,
				);
				if (index > -1) {
					this.accountData[index] = account;
					return;
				}
				this.accountData.push(account);
			},
			getUpdated: () => this.accountData,
		};
		this.chainState = {
			get: async (key: string): Promise<string | undefined> => {
				return this.chainStateData[key];
			},
			set: (key: string, val: string): void => {
				this.chainStateData[key] = val;
			},
		};
	}
}
