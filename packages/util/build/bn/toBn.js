"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bnToBn;

var _bn = _interopRequireDefault(require("bn.js"));

var _toBn = _interopRequireDefault(require("../is/toBn"));

var _hex = _interopRequireDefault(require("../is/hex"));

var _toBn2 = _interopRequireDefault(require("../hex/toBn"));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name bnToBn
 * @summary Creates a BN value from a BN.js bignumber or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numnbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@polkadot/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
function bnToBn(value) {
  if (!value) {
    return new _bn.default(0);
  } else if ((0, _hex.default)(value)) {
    return (0, _toBn2.default)(value.toString());
  }

  return _bn.default.isBN(value) ? value : (0, _toBn.default)(value) ? value.toBn() : new _bn.default(value);
}