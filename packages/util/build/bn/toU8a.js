"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _number = _interopRequireDefault(require("../is/number"));

var _toBn = _interopRequireDefault(require("./toBn"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bnToU8a(value) {
  let arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    bitLength: -1,
    isLe: true,
    isNegative: false
  };
  let arg2 = arguments.length > 2 ? arguments[2] : undefined;

  const _options = _objectSpread({
    isLe: true,
    isNegative: false,
    bitLength: -1
  }, (0, _number.default)(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);

  const valueBn = (0, _toBn.default)(value);
  const byteLength = _options.bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((_options.bitLength || 0) / 8);

  if (!value) {
    return _options.bitLength === -1 ? new Uint8Array([]) : new Uint8Array(byteLength);
  }

  const output = new Uint8Array(byteLength);
  const bn = _options.isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
  output.set(bn.toArray(_options.isLe ? 'le' : 'be', byteLength), 0);
  return output;
}

var _default = bnToU8a;
exports.default = _default;