"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bn = _interopRequireDefault(require("bn.js"));

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('bnToBn', () => {
  it('converts null values to 0x00', () => {
    expect((0, _.bnToBn)(null).toNumber()).toEqual(0);
  });
  it('converts BN values to BN', () => {
    expect((0, _.bnToBn)(new _bn.default(128)).toNumber()).toEqual(128);
  });
  it('converts number values to BN', () => {
    expect((0, _.bnToBn)(128).toNumber()).toEqual(128);
  });
  it('converts string to BN', () => {
    expect((0, _.bnToBn)('123').toNumber()).toEqual(123);
  });
  it('converts hex to BN', () => {
    expect((0, _.bnToBn)('0x0123').toNumber()).toEqual(0x123);
  });
  it('converts Compact to BN', () => {
    expect((0, _.bnToBn)({
      toBn: () => new _bn.default(1234),
      something: 'test'
    }).toNumber()).toEqual(1234);
  });
});