"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decodeAddress", {
  enumerable: true,
  get: function get() {
    return _utilCrypto.decodeAddress;
  }
});
Object.defineProperty(exports, "encodeAddress", {
  enumerable: true,
  get: function get() {
    return _utilCrypto.encodeAddress;
  }
});
Object.defineProperty(exports, "setSS58Format", {
  enumerable: true,
  get: function get() {
    return _utilCrypto.setSS58Format;
  }
});
Object.defineProperty(exports, "Keyring", {
  enumerable: true,
  get: function get() {
    return _keyring.default;
  }
});
exports.default = void 0;

var _util = require("@polkadot/util");

var _utilCrypto = require("@polkadot/util-crypto");

var _keyring = _interopRequireDefault(require("./keyring"));

// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
(0, _util.assertSingletonPackage)('@polkadot/keyring');
var _default = _keyring.default;
exports.default = _default;