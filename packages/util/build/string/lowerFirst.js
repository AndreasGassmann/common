"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stringLowerFirst;

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name stringLowerFirst
 * @summary Lowercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringLowerFirst } from '@polkadot/util';
 *
 * stringLowerFirst('ABC'); // => 'aBC'
 * ```
 */
function stringLowerFirst(value) {
  if (!value) {
    return '';
  }

  return value.charAt(0).toLowerCase() + value.slice(1);
}