"use strict";

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexToString', () => {
  it('converts an empty to ""', () => {
    expect((0, _.hexToString)()).toEqual('');
  });
  it('converts to a string from hex', () => {
    expect((0, _.hexToString)('0x68656c6c6f')).toEqual('hello');
  });
});