(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{280:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("RouterLink",{attrs:{to:"/util-crypto/"}},[t._v("Polkadot JS Common")]),t._v(" › "),e("RouterLink",{attrs:{to:"/util-crypto/globals.html"}},[t._v("Globals")]),t._v(" › "),e("RouterLink",{attrs:{to:"/util-crypto/modules/_nacl_seal_.html"}},[t._v('"nacl/seal"')])],1),t._v(" "),e("h1",{attrs:{id:"external-module-nacl-seal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#external-module-nacl-seal"}},[t._v("#")]),t._v(' External module: "nacl/seal"')]),t._v(" "),e("h2",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),e("h3",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/util-crypto/modules/_nacl_seal_.html#naclseal"}},[t._v("naclSeal")])],1)]),t._v(" "),e("h2",{attrs:{id:"functions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions-2"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("h3",{attrs:{id:"naclseal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naclseal"}},[t._v("#")]),t._v(" naclSeal")]),t._v(" "),e("p",[t._v("▸ "),e("strong",[t._v("naclSeal")]),t._v("("),e("code",[t._v("message")]),t._v(": Uint8Array, "),e("code",[t._v("senderBoxSecret")]),t._v(": Uint8Array, "),e("code",[t._v("receiverBoxPublic")]),t._v(": Uint8Array, "),e("code",[t._v("nonce")]),t._v(": Uint8Array): "),e("em",[t._v("Sealed")])]),t._v(" "),e("p",[e("em",[t._v("Defined in "),e("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/8eef3f99/packages/util-crypto/src/nacl/seal.ts#L28",target:"_blank",rel:"noopener noreferrer"}},[t._v("nacl/seal.ts:28"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("name")])]),t._v(" naclSeal")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("summary")])]),t._v(" Seals a message using the sender's encrypting secretKey, receiver's public key, and nonce")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("description")])]),t._v("\nReturns an encrypted message which can be open only by receiver's secretKey. If the "),e("code",[t._v("nonce")]),t._v(" was not supplied, a random value is generated.")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("example")])]),t._v(" "),e("BR")],1),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" naclEncrypt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util-crypto'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("naclSeal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [...]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("strong",[t._v("Parameters:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("message")])]),t._v(" "),e("td",[t._v("Uint8Array")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("senderBoxSecret")])]),t._v(" "),e("td",[t._v("Uint8Array")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("receiverBoxPublic")])]),t._v(" "),e("td",[t._v("Uint8Array")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("nonce")])]),t._v(" "),e("td",[t._v("Uint8Array")]),t._v(" "),e("td",[t._v("randomAsU8a(24)")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")]),t._v(" "),e("em",[t._v("Sealed")])])])}),[],!1,null,null,null);a.default=n.exports}}]);