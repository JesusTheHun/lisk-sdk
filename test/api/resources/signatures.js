/*
 * Copyright © 2017 Lisk Foundation
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

import APIResource from 'api/api_resource';
import SignaturesResource from 'api/resources/signatures';

describe('SignaturesResource', () => {
	const defaultBasePath = 'http://localhost:1234';
	const path = '/signatures';

	let liskAPI;
	let resource;

	beforeEach(() => {
		liskAPI = {
			headers: {},
			nodeFullURL: defaultBasePath,
			hasAvailableSignatures: () => {},
			randomizeSignatures: () => {},
			banActiveSignatureAndSelect: () => {},
		};
		resource = new SignaturesResource(liskAPI);
		return Promise.resolve();
	});

	describe('#constructor', () => {
		it('should throw error without liskAPI input', () => {
			return (() => new SignaturesResource()).should.throw(
				'Require LiskAPI instance to be initialized.',
			);
		});

		it('should be instance of APIResource', () => {
			return resource.should.be.instanceOf(APIResource);
		});

		it('should have correct full path', () => {
			return resource.resourcePath.should.eql(`${defaultBasePath}/api${path}`);
		});

		it('should set resource path', () => {
			return resource.path.should.equal(path);
		});

		it('should have a "create" function', () => {
			return resource.should.have.property('create').which.is.a('function');
		});
	});
});
