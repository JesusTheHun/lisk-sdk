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

// Private fields
let __private = {};

function bind(scope) {
	__private = {
		config: scope.config,
		cache: scope.components ? scope.components.cache : undefined,
		logger: scope.components ? scope.components.logger : undefined,
	};
}

function getCache() {
	return __private.cache;
}

function getLogger() {
	return __private.logger;
}

function getConfig() {
	return __private.config;
}

module.exports = {
	bind,
	getCache,
	getLogger,
	getConfig,
};
