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
 */

'use strict';

const debug = require('debug')('swagger:lisk:response_formatter');
const _ = require('lodash');

module.exports = function create() {
	return function liskResponseFormatter(context, next) {
		debug('exec');
		debug('received data:', context.input);

		if (_.isEmpty(context.input)) {
			context.headers = { 'content-type': 'application/json' };
			next(null, {
				meta: {},
				data: context.input,
				links: {},
			});
			return;
		}

		let output = {};

		if (_.isArray(context.input)) {
			output = {
				meta: {},
				data: context.input,
				links: {},
			};
		} else if (_.isObject(context.input)) {
			output = {
				meta: context.input.meta || {},
				data: context.input.data || context.input,
				links: context.input.links || {},
			};
		}

		debug("setting headers: 'content-type': 'application/json'");

		context.headers = { 'content-type': 'application/json' };
		next(null, output);
	};
};
