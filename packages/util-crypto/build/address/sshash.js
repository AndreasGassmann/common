"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hash;

var _util = require("@polkadot/util");

var _asU8a = _interopRequireDefault(require("../blake2/asU8a"));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const SS58_PREFIX = (0, _util.stringToU8a)('SS58PRE');

function hash(key) {
  return (0, _asU8a.default)((0, _util.u8aConcat)(SS58_PREFIX, key), 512);
}