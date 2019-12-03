"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extractSuri = _interopRequireDefault(require("./extractSuri"));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('keyExtractSuri', () => {
  it('does not extract from invalid suri', () => {
    expect(() => (0, _extractSuri.default)('//2')).toThrow(/to a secret URI/);
  });
  it('derives on "hello world"', () => {
    expect((0, _extractSuri.default)('hello world')).toEqual({
      path: [],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world/1', () => {
    expect((0, _extractSuri.default)('hello world/1')).toEqual({
      path: [{
        _isHard: false,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world/DOT', () => {
    expect((0, _extractSuri.default)('hello world/DOT')).toEqual({
      path: [{
        _isHard: false,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world//1', () => {
    expect((0, _extractSuri.default)('hello world//1')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world//DOT', () => {
    expect((0, _extractSuri.default)('hello world//DOT')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world//1/DOT', () => {
    expect((0, _extractSuri.default)('hello world//1/DOT')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }, {
        _isHard: false,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world//DOT/1', () => {
    expect((0, _extractSuri.default)('hello world//DOT/1')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }, {
        _isHard: false,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world///password"', () => {
    expect((0, _extractSuri.default)('hello world///password')).toEqual({
      password: 'password',
      path: [],
      phrase: 'hello world'
    });
  });
  it('derives on "hello world//1/DOT///password"', () => {
    expect((0, _extractSuri.default)('hello world//1/DOT///password')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }, {
        _isHard: false,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      password: 'password',
      phrase: 'hello world'
    });
  });
  it('derives on "hello world/1//DOT///password"', () => {
    expect((0, _extractSuri.default)('hello world/1//DOT///password')).toEqual({
      path: [{
        _isHard: false,
        _chainCode: Uint8Array.from([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }, {
        _isHard: true,
        _chainCode: Uint8Array.from([12, 68, 79, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      password: 'password',
      phrase: 'hello world'
    });
  });
  it('derives on actual Alice', () => {
    expect((0, _extractSuri.default)('bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice')).toEqual({
      path: [{
        _isHard: true,
        _chainCode: Uint8Array.from([20, 65, 108, 105, 99, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }],
      phrase: 'bottom drive obey lake curtain smoke basket hold race lonely fit walk'
    });
  });
});