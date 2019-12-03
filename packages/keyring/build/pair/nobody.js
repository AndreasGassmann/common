"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = everybody;

var _utilCrypto = require("@polkadot/util-crypto");

// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const publicKey = new Uint8Array(32);
const address = (0, _utilCrypto.encodeAddress)(publicKey);
const meta = {
  isTesting: true,
  name: 'nobody'
};
const json = {
  address,
  encoded: '',
  encoding: {
    content: ['pkcs8', 'ed25519'],
    type: 'none',
    version: '0'
  },
  meta
};

function everybody() {
  const pair = {
    type: 'ed25519',
    address,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decodePkcs8: (passphrase, encoded) => undefined,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    derive: (suri, meta) => pair,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    encodePkcs8: passphrase => new Uint8Array(0),
    meta,
    isLocked: true,
    lock: () => {// no locking, it is always locked
    },
    publicKey,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMeta: meta => undefined,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sign: message => new Uint8Array(64),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toJson: passphrase => json,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    verify: (message, signature) => false
  };
  return pair;
}