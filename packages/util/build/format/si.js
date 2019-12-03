"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSi = findSi;
exports.calcSi = calcSi;
exports.SI = exports.SI_MID = void 0;
// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const SI_MID = 8;
exports.SI_MID = SI_MID;
const SI = [{
  power: -24,
  value: 'y',
  text: 'yocto'
}, {
  power: -21,
  value: 'z',
  text: 'zepto'
}, {
  power: -18,
  value: 'a',
  text: 'atto'
}, {
  power: -15,
  value: 'f',
  text: 'femto'
}, {
  power: -12,
  value: 'p',
  text: 'pico'
}, {
  power: -9,
  value: 'n',
  text: 'nano'
}, {
  power: -6,
  value: 'µ',
  text: 'micro'
}, {
  power: -3,
  value: 'm',
  text: 'milli'
}, {
  power: 0,
  value: '-',
  text: 'Unit'
}, // position 8
{
  power: 3,
  value: 'k',
  text: 'Kilo'
}, {
  power: 6,
  value: 'M',
  text: 'Mega'
}, {
  power: 9,
  value: 'G',
  text: 'Giga'
}, {
  power: 12,
  value: 'T',
  text: 'Tera'
}, {
  power: 15,
  value: 'P',
  text: 'Peta'
}, {
  power: 18,
  value: 'E',
  text: 'Exa'
}, {
  power: 21,
  value: 'Z',
  text: 'Zeta'
}, {
  power: 24,
  value: 'Y',
  text: 'Yotta'
}]; // Given a SI type (e.g. k, m, Y) find the SI definition

exports.SI = SI;

function findSi(type) {
  // use a loop here, better RN support (which doesn't have [].find)
  for (let i = 0; i < SI.length; i++) {
    if (SI[i].value === type) {
      return SI[i];
    }
  }

  return SI[SI_MID];
}

function calcSi(text, decimals, forceUnit) {
  if (forceUnit) {
    return findSi(forceUnit);
  }

  const siDefIndex = SI_MID - 1 + Math.ceil((text.length - decimals) / 3);
  return SI[siDefIndex] || SI[siDefIndex < 0 ? 0 : SI.length - 1];
}