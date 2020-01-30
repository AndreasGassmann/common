(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{206:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_2-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-1"}},[e._v("#")]),e._v(" 2.0.1")]),e._v(" "),a("ul",[a("li",[e._v("Update w3f/schnorrkel to 0.8.5 (Full Substrate 2.x support, no 1.x support)")]),e._v(" "),a("li",[e._v("Remove Alice session (ed2551) account from testing keyring (not applicable to Substrate 2.x)")]),e._v(" "),a("li",[e._v("Remove "),a("code",[e._v("chainspec")]),e._v(", "),a("code",[e._v("db")]),e._v(", "),a("code",[e._v("trie-codec")]),e._v(", "),a("code",[e._v("trie-db")]),e._v(" and "),a("code",[e._v("trie-hash")]),e._v(" packages (moved to client)")]),e._v(" "),a("li",[e._v("Renamed "),a("code",[e._v("assertSingletonPackage")]),e._v(" to "),a("code",[e._v("detectPackage")]),e._v(" with inclusion of version listing")]),e._v(" "),a("li",[e._v("Swap to elliptic library for secp2561 recovery (No node bindings)")])]),e._v(" "),a("h1",{attrs:{id:"_1-8-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-1"}},[e._v("#")]),e._v(" 1.8.1")]),e._v(" "),a("ul",[a("li",[e._v("Add cross-client encryption/decryption support (Thanks to https://github.com/hskang9)")])]),e._v(" "),a("h1",{attrs:{id:"_1-7-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-1"}},[e._v("#")]),e._v(" 1.7.1")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("formatBalance")]),e._v(" signature now allows to force unit displays")]),e._v(" "),a("li",[e._v("Keypair now allows for derive on a pair, with "),a("code",[e._v("pair.derive(...)")])]),e._v(" "),a("li",[a("code",[e._v("assert")]),e._v(" now acts like a real asserts, with no return - signature adapted for new TS 3.7")])]),e._v(" "),a("h1",{attrs:{id:"_1-6-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1"}},[e._v("#")]),e._v(" 1.6.1")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("pair.sign(message)")]),e._v(" now takes an optional second "),a("code",[e._v("options?: SignOptions")]),e._v(" parameter, where "),a("code",[e._v("SignOptions")]),e._v(" is currently defined as "),a("code",[e._v("{ withType: boolean }")]),e._v(". Here "),a("code",[e._v("withType")]),e._v(" instructs the signing to prepend the type of signature (ed2551, sr25519 or ecdsa). This is used for the new Polkadot/Substrate MultiSignature format.")])]),e._v(" "),a("h1",{attrs:{id:"_1-5-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1"}},[e._v("#")]),e._v(" 1.5.1")]),e._v(" "),a("ul",[a("li",[e._v("Fix typings on the Keyring-exposed encode & decodeAddress")]),e._v(" "),a("li",[e._v("Allow ss58Format = 0 as a valid value")]),e._v(" "),a("li",[e._v("Loosen type definitions for allowed ss58format values (still checked against allowed array)")])]),e._v(" "),a("h1",{attrs:{id:"_1-4-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1"}},[e._v("#")]),e._v(" 1.4.1")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Breaking change")]),e._v(" To set the "),a("code",[e._v("ss58Format")]),e._v(", you should now use "),a("code",[e._v("setSS58Format")]),e._v(" as opposed to the old "),a("code",[e._v("setAddressPrefix")])]),e._v(" "),a("li",[e._v("Renamed "),a("code",[e._v("keyring.setAddressPrefix")]),e._v(" to "),a("code",[e._v("keyring.setSS58Format")])]),e._v(" "),a("li",[e._v("Deprecated "),a("code",[e._v("addressPrefix")]),e._v(" on the keyring options, added the "),a("code",[e._v("ss58Format")]),e._v(" as a replacement (aligning with chain properties - the old version is still accepted)")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("stringToHex")]),e._v(" and "),a("code",[e._v("hexToString")]),e._v(" conversion utilities to "),a("code",[e._v("@polkadot/util")])]),e._v(" "),a("li",[e._v("Swap to "),a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel 7.6.0"),a("OutboundLink")],1),e._v(" for all compilation, for latest improvements in code generation")])]),e._v(" "),a("h1",{attrs:{id:"_1-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1"}},[e._v("#")]),e._v(" 1.3.1")]),e._v(" "),a("ul",[a("li",[e._v("Remove the "),a("code",[e._v("ExtError")]),e._v(" class, always prefer the standard JS "),a("code",[e._v("Error")]),e._v(" object for errors. This would bre a breaking change for any applications using "),a("code",[e._v("ExtError")])])]),e._v(" "),a("h1",{attrs:{id:"_1-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1"}},[e._v("#")]),e._v(" 1.2.1")]),e._v(" "),a("ul",[a("li",[e._v("Keyring "),a("code",[e._v("addFromAddress")]),e._v(" can now be used to store external accounts, for example those provided by external signers")]),e._v(" "),a("li",[e._v("Maintainability updates")])]),e._v(" "),a("h1",{attrs:{id:"_1-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1"}},[e._v("#")]),e._v(" 1.1.1")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("assertSingletonPackage")]),e._v(" now warns via console.warn, but does not throw. This does allow the info to come accross while still allowing the app developers using multiple libraries time to fix.")])]),e._v(" "),a("h1",{attrs:{id:"_1-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-1"}},[e._v("#")]),e._v(" 1.0.1")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("formatBalance")]),e._v(" now allows for "),a("code",[e._v("Compact")]),e._v(" inputs")]),e._v(" "),a("li",[a("code",[e._v("formaBalance")]),e._v(" now allows correct formatting of very large decimals")])]),e._v(" "),a("h1",{attrs:{id:"_0-94-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-94-1"}},[e._v("#")]),e._v(" 0.94.1")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("checkAddress(address, prefix)")]),e._v(" to "),a("code",[e._v("@polkadot/util-crypto")]),e._v(" that validates an ss-58 address")]),e._v(" "),a("li",[e._v("Add support for the Kusama network (as a valid checked prefix)")]),e._v(" "),a("li",[e._v("Add an "),a("code",[e._v("asm.js")]),e._v(" fallback for the React Native environment (via "),a("code",[e._v("@polkadot/wasm-crypto")]),e._v(")")]),e._v(" "),a("li",[e._v("The ed25519 key for Alice (representing the session), now appears in the test keyrings")]),e._v(" "),a("li",[e._v("Fix missing dependencies for keyring (after address moves in 0.93.1)")])]),e._v(" "),a("h1",{attrs:{id:"_0-93-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-93-1"}},[e._v("#")]),e._v(" 0.93.1")]),e._v(" "),a("ul",[a("li",[e._v("Breaking: External pair interface for keyring has been changed. Instead of\n"),a("ul",[a("li",[a("code",[e._v("getMeta")]),e._v(" use the "),a("code",[e._v("meta")]),e._v(" getter, i.e. "),a("code",[e._v("console.log(pair.meta.name)")])]),e._v(" "),a("li",[a("code",[e._v("address")]),e._v(" use the "),a("code",[e._v("address")]),e._v(" getter, i.e. "),a("code",[e._v("console.log(pair.address)")])]),e._v(" "),a("li",[a("code",[e._v("publicKey")]),e._v(" use the "),a("code",[e._v("publicKey")]),e._v(" getter, i.e. "),a("code",[e._v("console.log(pair.publicKey)")])])])]),e._v(" "),a("li",[a("code",[e._v("Move decodeAddress")]),e._v(", "),a("code",[e._v("encodeAddress")]),e._v(" & "),a("code",[e._v("setAddressPrefix")]),e._v(" functions into "),a("code",[e._v("@polkadot/util-crypto")]),e._v(" from "),a("code",[e._v("@polkadot/keyring")]),e._v(". External interfaces should not be affected at this point since it is also (still) exported and exposed on keyring")])]),e._v(" "),a("h1",{attrs:{id:"_0-92-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-92-1"}},[e._v("#")]),e._v(" 0.92.1")]),e._v(" "),a("ul",[a("li",[e._v("Only allow integer input values into "),a("code",[e._v("formatBalance")])]),e._v(" "),a("li",[e._v("Allow "),a("code",[e._v("formatBalance")]),e._v(", "),a("code",[e._v("formatDecimal")]),e._v(" & "),a("code",[e._v("formatNumber")]),e._v(" to cater for negative numbers")]),e._v(" "),a("li",[e._v("Add 'Bob//stash' to testing keyring, joining the existing 'Alice//stash'")])]),e._v(" "),a("h1",{attrs:{id:"_0-91-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-91-1"}},[e._v("#")]),e._v(" 0.91.1")]),e._v(" "),a("ul",[a("li",[e._v("ed25519/sr25519 sign & verify functions can now take the message input as Uint8Array/string/hex and verify allows for the signature/publicKey to be specified as Uint8Array/hex")]),e._v(" "),a("li",[e._v("Update "),a("code",[e._v("@polkadot/wasm")]),e._v(" to include a maintenance bump for the "),a("code",[e._v("w3f/schnorrkel")]),e._v(" libraries")])]),e._v(" "),a("h1",{attrs:{id:"_0-90-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-90-1"}},[e._v("#")]),e._v(" 0.90.1")]),e._v(" "),a("ul",[a("li",[e._v("Moving towards 1.0")]),e._v(" "),a("li",[e._v("Added bnMin & bnMax functions")])]),e._v(" "),a("h1",{attrs:{id:"_0-76-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-76-1"}},[e._v("#")]),e._v(" 0.76.1")]),e._v(" "),a("ul",[a("li",[e._v("Fix "),a("code",[e._v("addFromMnemonic")]),e._v(" to generate using new-style derivation.")]),e._v(" "),a("li",[e._v("Pull in "),a("code",[e._v("formatBalance")]),e._v(", "),a("code",[e._v("formatDecimal")]),e._v(", "),a("code",[e._v("formatElapsed")]),e._v(", "),a("code",[e._v("formatNumber")]),e._v(", "),a("code",[e._v("calcSi")]),e._v(", "),a("code",[e._v("findSi")]),e._v(" & "),a("code",[e._v("isTestChain")]),e._v(" utility functions from the originals in "),a("code",[e._v("@polkadot/ui-util")])]),e._v(" "),a("li",[e._v("Swap out "),a("code",[e._v("wasm-schnorrkel")]),e._v(" & "),a("code",[e._v("wasm-ed25519")]),e._v(" for combined version with "),a("code",[e._v("wasm-crypto")])]),e._v(" "),a("li",[e._v("Swap DB interfaces to optional LRU, removing "),a("code",[e._v("transactionAsync")]),e._v(" (client-only changes)")])]),e._v(" "),a("h1",{attrs:{id:"_0-75-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-75-1"}},[e._v("#")]),e._v(" 0.75.1")]),e._v(" "),a("ul",[a("li",[e._v("Start journey to 1.0")])]),e._v(" "),a("h1",{attrs:{id:"_0-42-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1"}},[e._v("#")]),e._v(" 0.42.1")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("assertSingletonPackage")]),e._v(" to util")]),e._v(" "),a("li",[e._v("Ensure that only a single keyring instance is loaded (uses above)")])]),e._v(" "),a("h1",{attrs:{id:"_0-41-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1"}},[e._v("#")]),e._v(" 0.41.1")]),e._v(" "),a("ul",[a("li",[e._v("Extensions to the client-specific database interfaces (non-breaking for API and util users)")])]),e._v(" "),a("h1",{attrs:{id:"_0-40-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1"}},[e._v("#")]),e._v(" 0.40.1")]),e._v(" "),a("ul",[a("li",[e._v("Add additional derivation path extraction mechanisms to util-crypto")]),e._v(" "),a("li",[e._v("Add createFromUri function to keypair (creates keypair, does not add it)")]),e._v(" "),a("li",[e._v("Allow all crypto hashing & ed25519 to use WASM (as available, JS fallbacks)")])]),e._v(" "),a("h1",{attrs:{id:"_0-39-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1"}},[e._v("#")]),e._v(" 0.39.1")]),e._v(" "),a("ul",[a("li",[e._v("Pull in bip39 generation functions from "),a("code",[e._v("@poladkot/wasm-crypto")]),e._v(" with a fallback to the pure JS versions")])]),e._v(" "),a("h1",{attrs:{id:"_0-38-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1"}},[e._v("#")]),e._v(" 0.38.1")]),e._v(" "),a("ul",[a("li",[e._v("Align with current substrate master for sr25519 keys and hard/soft derivation")]),e._v(" "),a("li",[e._v("Swap default dev keys to derived (sr25519)")])]),e._v(" "),a("h1",{attrs:{id:"_0-37-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1"}},[e._v("#")]),e._v(" 0.37.1")]),e._v(" "),a("ul",[a("li",[e._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),e._v(" "),a("h1",{attrs:{id:"_0-36-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1"}},[e._v("#")]),e._v(" 0.36.1")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("fromUri")]),e._v(" to keyring along with hard & soft key derivation.")])]),e._v(" "),a("h1",{attrs:{id:"_0-35-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1"}},[e._v("#")]),e._v(" 0.35.1")]),e._v(" "),a("ul",[a("li",[e._v("Remove NodeJs-only "),a("code",[e._v("syncify")]),e._v(" function, not exported by the package (with binary dependency for Node)")])]),e._v(" "),a("h1",{attrs:{id:"_0-34-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1"}},[e._v("#")]),e._v(" 0.34.1")]),e._v(" "),a("ul",[a("li",[e._v("Keyring now allows for ed25519 and sr25519 instances. Upon creation, you need to pass the "),a("code",[e._v("ed25519")]),e._v("or "),a("code",[e._v("sr25519")]),e._v(" string to denote the type, i.e. "),a("code",[e._v("new Keyring({ type: 'sr25519' })")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);