"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPair;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _util = require("@polkadot/util");

var _utilCrypto = require("@polkadot/util-crypto");

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _toJson2 = _interopRequireDefault(require("./toJson"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const SIG_TYPE_NONE = new Uint8Array();
const SIG_TYPE_ED25519 = new Uint8Array([0]);
const SIG_TYPE_SR25519 = new Uint8Array([1]); // const SIG_TYPE_ECDSA = new Uint8Array([2]);

function isEmpty(u8a) {
  return u8a.reduce((count, u8) => count + u8, 0) === 0;
}

const isSr25519 = type => type === 'sr25519';

const fromSeed = (type, seed) => isSr25519(type) ? (0, _utilCrypto.schnorrkelKeypairFromSeed)(seed) : (0, _utilCrypto.naclKeypairFromSeed)(seed);

const _sign = function sign(type, message, pair) {
  let {
    withType = false
  } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const typeSr25519 = isSr25519(type);
  return (0, _util.u8aConcat)( // for multi-signatures, i.e. with indicator, append the signature type as per
  // the MultiSignature enum
  withType ? typeSr25519 ? SIG_TYPE_SR25519 : SIG_TYPE_ED25519 : SIG_TYPE_NONE, typeSr25519 ? (0, _utilCrypto.schnorrkelSign)(message, pair) : (0, _utilCrypto.naclSign)(message, pair));
};

const _verify = (type, message, signature, publicKey) => isSr25519(type) ? (0, _utilCrypto.schnorrkelVerify)(message, signature, publicKey) : (0, _utilCrypto.naclVerify)(message, signature, publicKey);
/**
 * @name pair
 * @summary Creates a keyring pair object
 * @description Creates a keyring pair object with provided account public key, metadata, and encoded arguments.
 * The keyring pair stores the account state including the encoded address and associated metadata.
 *
 * It has properties whose values are functions that may be called to perform account actions:
 *
 * - `address` function retrieves the address associated with the account.
 * - `decodedPkcs8` function is called with the account passphrase and account encoded public key.
 * It decodes the encoded public key using the passphrase provided to obtain the decoded account public key
 * and associated secret key that are then available in memory, and changes the account address stored in the
 * state of the pair to correspond to the address of the decoded public key.
 * - `encodePkcs8` function when provided with the correct passphrase associated with the account pair
 * and when the secret key is in memory (when the account pair is not locked) it returns an encoded
 * public key of the account.
 * - `meta` is the metadata that is stored in the state of the pair, either when it was originally
 * created or set via `setMeta`.
 * - `publicKey` returns the public key stored in memory for the pair.
 * - `sign` may be used to return a signature by signing a provided message with the secret
 * key (if it is in memory) using Nacl.
 * - `toJson` calls another `toJson` function and provides the state of the pair,
 * it generates arguments to be passed to the other `toJson` function including an encoded public key of the account
 * that it generates using the secret key from memory (if it has been made available in memory)
 * and the optionally provided passphrase argument. It passes a third boolean argument to `toJson`
 * indicating whether the public key has been encoded or not (if a passphrase argument was provided then it is encoded).
 * The `toJson` function that it calls returns a JSON object with properties including the `address`
 * and `meta` that are assigned with the values stored in the corresponding state variables of the account pair,
 * an `encoded` property that is assigned with the encoded public key in hex format, and an `encoding`
 * property that indicates whether the public key value of the `encoded` property is encoded or not.
 */


function createPair(type, _ref) {
  let {
    publicKey,
    secretKey
  } = _ref;
  let meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let encoded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    get address() {
      return (0, _utilCrypto.encodeAddress)(publicKey);
    },

    get meta() {
      return meta;
    },

    get isLocked() {
      return !secretKey || secretKey.length === 0 || isEmpty(secretKey);
    },

    get publicKey() {
      return publicKey;
    },

    get type() {
      return type;
    },

    decodePkcs8: (passphrase, _encoded) => {
      const decoded = (0, _decode.default)(passphrase, _encoded || encoded);

      if (decoded.secretKey.length === 64) {
        publicKey = decoded.publicKey;
        secretKey = decoded.secretKey;
      } else {
        const pair = fromSeed(type, decoded.secretKey);
        publicKey = pair.publicKey;
        secretKey = pair.secretKey;
      }
    },
    derive: (suri, meta) => {
      (0, _util.assert)(secretKey, 'Cannot derive on a locked keypair');
      const {
        path
      } = (0, _utilCrypto.keyExtractPath)(suri);
      const derived = (0, _utilCrypto.keyFromPath)({
        publicKey,
        secretKey: secretKey
      }, path, type);
      return createPair(type, derived, meta, null);
    },
    encodePkcs8: passphrase => (0, _encode.default)({
      publicKey,
      secretKey
    }, passphrase),
    lock: () => {
      secretKey = new Uint8Array(0);
    },
    setMeta: additional => {
      meta = _objectSpread({}, meta, {}, additional);
    },
    sign: (message, options) => _sign(type, message, {
      publicKey,
      secretKey
    }, options),
    toJson: passphrase => (0, _toJson2.default)(type, {
      meta,
      publicKey
    }, (0, _encode.default)({
      publicKey,
      secretKey
    }, passphrase), !!passphrase),
    verify: (message, signature) => _verify(type, message, signature, publicKey)
  };
}