"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _check = _interopRequireDefault(require("./check"));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('checkAddress', () => {
  it('returns [true, null] for Kusama', () => {
    expect((0, _check.default)('FJaco77EJ99VtBmVFibuBJR3x5Qq9KQrgQJvWjqScCcCCae', 2)).toEqual([true, null]);
  });
  it('returns [true, null] for Substrate', () => {
    expect((0, _check.default)('5EnxxUmEbw8DkENKiYuZ1DwQuMoB2UWEQJZZXrTsxoz7SpgG', 42)).toEqual([true, null]);
  });
  it('fails with invalid prefix when checking Substrate against Kusama prefix', () => {
    expect((0, _check.default)('5EnxxUmEbw8DkENKiYuZ1DwQuMoB2UWEQJZZXrTsxoz7SpgG', 2)).toEqual([false, 'Prefix mismatch, expected 2, found 42']);
  });
  it('fails with invalid length when some bytes are missing', () => {
    expect((0, _check.default)('y9EMHt34JJo4rWLSaxoLGdYXvjgSXEd4zHUnQgfNzwES8b', 42)).toEqual([false, 'Invalid decoded address length']);
  });
  it('fails with invalid length on checksum mismatch', () => {
    expect((0, _check.default)('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDwU', 42)).toEqual([false, 'Invalid decoded address checksum']);
  });
});