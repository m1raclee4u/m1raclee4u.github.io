(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{600:function(t,e,r){t.exports=r.p+"img/heart.3b51e89.svg"},607:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxsaW5lIHgxPSIxIiB5MT0iMTcuNSIgeDI9IjE3IiB5Mj0iMTcuNSIgc3Ryb2tlPSIjNjg1RjVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPGxpbmUgeDE9IjEiIHkxPSIxMC41IiB4Mj0iMTciIHkyPSIxMC41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8bGluZSB4MT0iMSIgeTE9IjMuNSIgeDI9IjE3IiB5Mj0iMy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8L3N2Zz4NCg=="},608:function(t,e,r){t.exports=r.p+"img/logo.b90e945.svg"},609:function(t,e,r){t.exports=r.p+"img/search.1571845.svg"},610:function(t,e,r){t.exports=r.p+"img/cart.780d930.svg"},611:function(t,e,r){t.exports=r.p+"img/account.d94b95b.svg"},624:function(t,e,r){var content=r(642);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("468b676e",content,!0,{sourceMap:!1})},641:function(t,e,r){"use strict";r(624)},642:function(t,e,r){var o=r(72)(!1);o.push([t.i,".cartCounter[data-v-bbdf0502]{top:0;margin-top:12px!important;margin-left:12px!important;width:18px;height:18px;border-radius:50%;background:#9e8b7b;font-size:13px;line-height:15px;color:#fff;border:1px solid #fff}.cartCounter[data-v-bbdf0502],a#logo[data-v-bbdf0502]{position:absolute;text-align:center}a#logo[data-v-bbdf0502]{margin:0 auto;top:14px;left:0;right:0;max-width:91px}.burger__menu[data-v-bbdf0502]{display:flex;align-items:center;grid-gap:20px;gap:20px}.flex[data-v-bbdf0502]{grid-gap:15px;gap:15px;align-items:center}header[data-v-bbdf0502]{z-index:2;width:100%;position:fixed;top:0}.header[data-v-bbdf0502]{max-width:1676px;margin:0 auto;height:58px;display:flex;justify-content:space-between;align-items:center}button[data-v-bbdf0502]{cursor:pointer;background:none}.buttons[data-v-bbdf0502]{display:flex;grid-gap:30px;gap:30px}.buttons img[data-v-bbdf0502]{width:24px;height:24px}",""]),t.exports=o},650:function(t,e,r){"use strict";r.r(e);r(57),r(40),r(41),r(16),r(96),r(47),r(97);var o=r(32),n=r(98);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{scrollPosition:0}},computed:d(d({},Object(n.c)("cart",["getProducts"])),{},{productsQuantity:function(){var t=0;for(var e in this.getProducts)if(Object.hasOwnProperty.call(this.getProducts,e)){var element=this.getProducts[e];0!=element.quantity&&(t+=element.quantity)}return t}})},f=(r(641),r(74)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{},[o("div",{staticClass:"header"},[o("div",{staticClass:"flex"},[o("button",{staticClass:"burger__menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[o("img",{attrs:{src:r(607),alt:""}}),t._v("\n                каталог\n            ")])]),t._v(" "),o("Nuxt-link",{attrs:{id:"logo",to:"/"}},[o("img",{attrs:{src:r(608),alt:""}})]),t._v(" "),o("div",{staticClass:"buttons"},[o("img",{staticClass:"todo",attrs:{src:r(609),alt:""}}),t._v(" "),o("Nuxt-link",{attrs:{to:"/favorite"}},[o("img",{attrs:{src:r(600),alt:""}})]),t._v(" "),o("Nuxt-link",{attrs:{to:"/cart"}},[o("img",{attrs:{src:r(610),alt:""}}),t._v(" "),t.productsQuantity>0?o("p",{staticClass:"cartCounter"},[t._v(t._s(t.productsQuantity))]):t._e()]),t._v(" "),o("img",{staticClass:"todo",attrs:{src:r(611),alt:""}})],1)],1)])}),[],!1,null,"bbdf0502",null);e.default=component.exports}}]);