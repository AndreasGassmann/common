(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{269:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("RouterLink",{attrs:{to:"/util-crypto/"}},[t._v("Polkadot JS Common")]),t._v(" › "),s("RouterLink",{attrs:{to:"/util-crypto/globals.html"}},[t._v("Globals")]),t._v(" › "),s("RouterLink",{attrs:{to:"/util-crypto/modules/_mnemonic_toseed_.html"}},[t._v('"mnemonic/toSeed"')])],1),t._v(" "),s("h1",{attrs:{id:"external-module-mnemonic-toseed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-module-mnemonic-toseed"}},[t._v("#")]),t._v(' External module: "mnemonic/toSeed"')]),t._v(" "),s("h2",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),s("h3",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/util-crypto/modules/_mnemonic_toseed_.html#toseed"}},[t._v("toSeed")])],1)]),t._v(" "),s("h2",{attrs:{id:"functions-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions-2"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),s("h3",{attrs:{id:"toseed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toseed"}},[t._v("#")]),t._v(" toSeed")]),t._v(" "),s("p",[t._v("▸ "),s("strong",[t._v("toSeed")]),t._v("("),s("code",[t._v("mnemonic")]),t._v(": string, "),s("code",[t._v("password")]),t._v(": string): "),s("em",[t._v("Uint8Array")])]),t._v(" "),s("p",[s("em",[t._v("Defined in "),s("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/8eef3f99/packages/util-crypto/src/mnemonic/toSeed.ts#L26",target:"_blank",rel:"noopener noreferrer"}},[t._v("mnemonic/toSeed.ts:26"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[s("code",[t._v("name")])]),t._v(" toSeed")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("summary")])]),t._v(" Creates a valid seed from a mnemonic input")]),t._v(" "),s("p",[s("strong",[s("code",[t._v("example")])]),t._v(" "),s("BR")],1),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mnemonicGenerate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mnemonicToSeed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mnemonicValidate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util-crypto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mnemonic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mnemonicGenerate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isValidMnemonic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mnemonicValidate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => boolean")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isValidMnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Seed generated from mnemonic: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mnemonicToSeed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" u8a\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("Parameters:")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("mnemonic")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("password")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v('""')])])])]),t._v(" "),s("p",[s("strong",[t._v("Returns:")]),t._v(" "),s("em",[t._v("Uint8Array")])])])}),[],!1,null,null,null);n.default=e.exports}}]);