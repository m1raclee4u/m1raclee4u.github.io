(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10,11,13,14,16,17,18],{599:function(t,e,o){t.exports=o.p+"img/heart.3b51e89.svg"},602:function(t,e,o){var content=o(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("145b47cc",content,!0,{sourceMap:!1})},603:function(t,e,o){var content=o(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("58d44c30",content,!0,{sourceMap:!1})},604:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxsaW5lIHgxPSIxIiB5MT0iMTcuNSIgeDI9IjE3IiB5Mj0iMTcuNSIgc3Ryb2tlPSIjNjg1RjVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPGxpbmUgeDE9IjEiIHkxPSIxMC41IiB4Mj0iMTciIHkyPSIxMC41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8bGluZSB4MT0iMSIgeTE9IjMuNSIgeDI9IjE3IiB5Mj0iMy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+DQo8L3N2Zz4NCg=="},605:function(t,e,o){t.exports=o.p+"img/logo.b90e945.svg"},606:function(t,e,o){t.exports=o.p+"img/search.1571845.svg"},607:function(t,e,o){t.exports=o.p+"img/cart.780d930.svg"},608:function(t,e,o){t.exports=o.p+"img/account.d94b95b.svg"},610:function(t,e,o){"use strict";o.r(e);var r=o(611),n=o.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},611:function(t,e){},613:function(t,e,o){"use strict";o.r(e);var r={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},n=(o(619),o(72)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[r("div",{staticClass:"burger_menu"},[r("div",{staticClass:"top column"},t._l(t.categories,(function(e){return r("div",{key:e.id,staticClass:"filter_categories"},[r("header",[r("div",{staticClass:"left"},[r("img",{attrs:{src:o(618),alt:""}}),t._v(" "),r("h5",{staticClass:"title"},[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"right"},[r("Nuxt-link",{attrs:{to:"/catalog"}},[t._v("больше")])],1)]),t._v(" "),r("main",t._l(t.$store.state.categoryTags,(function(e){return r("button",{key:e.id,staticClass:"todo"},[t._v(t._s(e))])})),0),t._v(" "),r("hr",{staticStyle:{color:"#7F7777"}})])})),0),t._v(" "),r("div",{staticClass:"bottom column"},[r("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Оплата и доставка")]),t._v(" "),r("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Обмен и возврат")]),t._v(" "),r("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),r("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),r("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)])])}),[],!1,null,"5174ee62",null);e.default=component.exports},615:function(t,e,o){"use strict";o(602)},616:function(t,e,o){var r=o(71),n=o(237),c=o(617),d=o(599),l=r(!1),f=n(c),v=n(d);l.push([t.i,".input_color_1[data-v-89de1e34]{width:16px;height:16px;border-radius:50%}.top[data-v-89de1e34]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-weight:400}.top .quantity[data-v-89de1e34]{font-size:14px;line-height:17px;color:#a9a1a1;font-weight:400}.tag[data-v-89de1e34]{width:58px;height:58px;left:14px;top:14px;border-radius:50%;border:1px solid #685f5f;text-align:center;line-height:100%}.tag[data-v-89de1e34],.tag p[data-v-89de1e34]{position:absolute}.tag p[data-v-89de1e34]{top:17px;left:13px;color:#685f5f}.added[data-v-89de1e34]{background-image:url("+f+")!important}.like[data-v-89de1e34]{position:absolute;background-image:url("+v+");background-repeat:no-repeat;background-position:50%;background-color:unset;width:30px;height:30px;top:14px;right:14px}.like[data-v-89de1e34]:hover{background-image:url("+f+')}.ItemCart[data-v-89de1e34]{position:relative;max-width:411px;width:100%;height:587px;padding-bottom:60px}.ItemCart img[data-v-89de1e34]{width:100%;height:auto;background-color:#000;margin-top:100px;margin-bottom:25px}.ItemCart p[data-v-89de1e34]{font-family:"RF Dewi";font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#685f5f}.colors[data-v-89de1e34]{grid-gap:10px;gap:10px}.ItemCart__price[data-v-89de1e34]{display:flex;align-items:center;grid-gap:30px;gap:30px}.ItemCart__price p[data-v-89de1e34]{font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#685f5f}.ItemCart__price .old[data-v-89de1e34]{color:grey;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-89de1e34]{padding-bottom:60px}.ItemCart img[data-v-89de1e34]{max-width:100%;height:auto;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-89de1e34]{margin-bottom:20px;font-size:13px}}',""]),t.exports=l},617:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAzMCAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik0xNC4zNjM0IDI2Ljg3NjdDMTQuNTY1MiAyNi45NTk3IDE0Ljc4MTcgMjcuMDAxNiAxNSAyN0MxNS4yMTY2IDI3LjAwMDIgMTUuNDMxMSAyNi45NTc3IDE1LjYzMTIgMjYuODc0N0MxNS44MzEzIDI2Ljc5MTcgMTYuMDEyOSAyNi42NyAxNi4xNjU3IDI2LjUxNjZMMjcuMzc5MyAxNS4zMTNDMjguMzg2MyAxNC4zMDQzIDI5LjEzODIgMTMuMDcwNCAyOS41NzI4IDExLjcxMzVDMzAuMDA3NSAxMC4zNTY2IDMwLjExMjMgOC45MTU3MiAyOS44Nzg3IDcuNTEwMjRDMjkuNjQ1MSA2LjEwNDc3IDI5LjA3OTcgNC43NzUxNSAyOC4yMjk0IDMuNjMxNUMyNy4zNzkxIDIuNDg3ODYgMjYuMjY4MyAxLjU2MzEyIDI0Ljk4OTEgMC45MzM4NzVDMjMuMzc1NSAwLjEyODg1NyAyMS41NTQzIC0wLjE2NDYwMyAxOS43NjkyIDAuMDkyNzQ5OEMxNy45ODQgMC4zNTAxMDMgMTYuMzIwMSAxLjE0NiAxNSAyLjM3Mzk3QzEzLjY4MDYgMS4xNDQ3MyAxMi4wMTY2IDAuMzQ3OTg1IDEwLjIzMTIgMC4wOTA1ODQ5QzguNDQ1NzIgLTAuMTY2ODE1IDYuNjI0MiAwLjEyNzQzNCA1LjAxMDg4IDAuOTMzODc1QzMuNzMxNjggMS41NjMxMiAyLjYyMDkyIDIuNDg3ODYgMS43NzA2MiAzLjYzMTVDMC45MjAzMTEgNC43NzUxNSAwLjM1NDkyOSA2LjEwNDc3IDAuMTIxMzAxIDcuNTEwMjRDLTAuMTEyMzI2IDguOTE1NzIgLTAuMDA3NDc0MjEgMTAuMzU2NiAwLjQyNzE3MiAxMS43MTM1QzAuODYxODE4IDEzLjA3MDQgMS42MTM3NSAxNC4zMDQzIDIuNjIwNjggMTUuMzEzTDEzLjgyNDIgMjYuNTE2NkMxMy45NzgyIDI2LjY3MTIgMTQuMTYxNSAyNi43OTM3IDE0LjM2MzQgMjYuODc2N1oiIGZpbGw9IiM2ODVGNUYiLz4NCjwvc3ZnPg0K"},618:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.dab292b.svg"},619:function(t,e,o){"use strict";o(603)},620:function(t,e,o){var r=o(71)(!1);r.push([t.i,'.filter_categories[data-v-5174ee62]{display:flex;flex-direction:column;grid-gap:22px;gap:22px}.filter_categories button[data-v-5174ee62]{border:1px solid #7f7777;border-radius:30px;padding:4px 16px;background:none;color:#7f7777}.filter_categories main[data-v-5174ee62]{display:flex;flex-wrap:wrap;grid-gap:10px;gap:10px}.filter_categories header[data-v-5174ee62]{display:flex;justify-content:space-between}.filter_categories header p[data-v-5174ee62]{color:#bababa;font-weight:300}.filter_categories .left[data-v-5174ee62]{grid-gap:10px;gap:10px;display:flex}.filter_categories .left h5[data-v-5174ee62]{font-weight:700;font-size:18px;line-height:21px;color:#fff}.filter_categories .right a[data-v-5174ee62]{font-weight:300;font-size:14px;line-height:16px;text-align:center;color:#bababa}a[data-v-5174ee62]{font-family:"RF Dewi";font-style:normal;font-weight:400;font-size:20px;line-height:24px;text-decoration:none;color:#bababa}.menu[data-v-5174ee62]{box-sizing:border-box;position:fixed;background-color:rgba(32,32,32,0);height:100vh;width:100vw;max-width:100%;top:0;z-index:2000;cursor:pointer}.column[data-v-5174ee62]{grid-gap:30px;gap:30px}.burger_menu[data-v-5174ee62],.column[data-v-5174ee62]{display:flex;flex-direction:column}.burger_menu[data-v-5174ee62]{justify-content:space-between;position:absolute;background-color:#202020;top:0;width:405px;height:100vh;padding:60px;z-index:2000}',""]),t.exports=r},621:function(t,e,o){"use strict";o.r(e);o(56),o(40),o(46),o(94),o(45),o(95);var r=o(36),n=(o(365),o(18),o(96)),c=o(691),d=o(688),l=o(689),f=o(690);o(609);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.use([d.a,l.a,f.a]);var m={name:"item",props:{item:{type:Object,required:!0}},data:function(){return{favorites:[]}},computed:x(x({},Object(n.c)({products:function(t){return t.favorites.products}})),{},{isProductAdded:function(){var t=this;return this.products.find((function(p){return p.id===t.item.id}))}}),methods:x(x({},Object(n.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},h=(o(615),o(72)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ItemCart"},[t.isProductAdded?o("button",{staticClass:"like added",on:{click:function(e){return e.preventDefault(),t.addedClickHandler.apply(null,arguments)}}}):o("button",{staticClass:"like",on:{click:function(e){return e.preventDefault(),t.buyClickHandler.apply(null,arguments)}}}),t._v(" "),o("Nuxt-Link",{attrs:{to:"/"+t.item.category+"/"+t.item.name}},[o("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+t.item.photo,alt:t.item.name}}),t._v(" "),o("div",{staticClass:"tag"},[o("p",[t._v("ХИТ")])])]),t._v(" "),o("div",{staticClass:"top"},[o("p",[t._v(t._s(t.item.name))]),t._v(" "),o("p",{staticClass:"quantity"},[t._v("осталось "+t._s(3)+" шт.")])]),t._v(" "),o("div",{staticClass:"ItemCart__price"},[o("p",[t._v(t._s(t.item.price)+" ₽")]),t._v(" "),o("div",{staticClass:"flex colors"},t._l(t.$store.state.colors,(function(t){return o("div",{key:t.id,staticClass:"input_color_1",attrs:{id:t.id,disabled:""}})})),0)])],1)}),[],!1,null,"89de1e34",null);e.default=component.exports},623:function(t,e,o){var content=o(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("495f81ee",content,!0,{sourceMap:!1})},624:function(t,e,o){var content=o(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("03591f1f",content,!0,{sourceMap:!1})},625:function(t,e,o){var content=o(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("e5f514ee",content,!0,{sourceMap:!1})},632:function(t,e,o){t.exports=o.p+"img/bc0e3668564533.5b6171f3d0b17.cb3a441.jpg"},633:function(t,e,o){var content=o(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("1ecb2f58",content,!0,{sourceMap:!1})},634:function(t,e,o){"use strict";o.r(e);var r=o(645),n=o(610);for(var c in n)["default"].indexOf(c)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(c);o(635);var d=o(72),component=Object(d.a)(n.default,r.a,r.b,!1,null,"ccc6a744",null);e.default=component.exports},635:function(t,e,o){"use strict";o(623)},636:function(t,e,o){var r=o(71)(!1);r.push([t.i,"a#logo[data-v-ccc6a744]{position:absolute;margin:0 auto;top:14px;left:0;right:0;text-align:center;max-width:91px}.burger__menu[data-v-ccc6a744]{display:flex;align-items:center;grid-gap:20px;gap:20px}.flex[data-v-ccc6a744]{grid-gap:15px;gap:15px}.flex[data-v-ccc6a744],header[data-v-ccc6a744]{align-items:center}header[data-v-ccc6a744]{z-index:2;width:100%;height:58px;display:flex;justify-content:space-between;position:fixed;top:0}button[data-v-ccc6a744]{cursor:pointer;background:none}.buttons[data-v-ccc6a744]{display:flex;grid-gap:30px;gap:30px}.buttons img[data-v-ccc6a744]{width:24px;height:24px}",""]),t.exports=r},637:function(t,e,o){"use strict";o(624)},638:function(t,e,o){var r=o(71)(!1);r.push([t.i,"section[data-v-1103660a]{margin:0 auto;width:100%;padding:50px 0 40px;background-color:#f7f7f7}footer[data-v-1103660a]{display:flex;justify-content:space-between;align-items:flex-start;height:300px;max-width:1920px;margin:0 auto}form[data-v-1103660a]{margin-bottom:40px}.left[data-v-1103660a]{height:100%;display:flex;flex-direction:column;justify-content:space-between;max-width:480px}.left .text p[data-v-1103660a]{font-size:16px;line-height:24px}.left h5[data-v-1103660a]{font-size:37px;margin-bottom:35px;line-height:42px}.left .form p[data-v-1103660a]{font-size:10px}.right[data-v-1103660a]{display:flex;grid-gap:150px;gap:150px;font-size:15px;letter-spacing:-.001em}.right .column[data-v-1103660a]{display:flex;grid-gap:50px;gap:50px}.right .links[data-v-1103660a]{display:flex;flex-direction:column;grid-gap:30px;gap:30px}.right .links a[data-v-1103660a]{text-decoration:none;color:#848484}input[type=email][data-v-1103660a]{background-color:inherit;min-width:350px}button[data-v-1103660a]{background-color:inherit;font-size:16px;font-weight:600}@media(max-width:1200px){.right .column[data-v-1103660a]{flex-direction:column;grid-gap:30px;gap:30px}}",""]),t.exports=r},639:function(t,e,o){"use strict";o(625)},640:function(t,e,o){var r=o(71)(!1);r.push([t.i,"a[data-v-604f885a]{text-decoration:none;color:#b8b8b8}img[data-v-604f885a]{max-width:100%;height:auto}section[data-v-604f885a]{margin:0 auto;padding:100px 0 0;max-width:1920px;width:100%;overflow:hidden}section h2[data-v-604f885a]{padding-bottom:60px;font-weight:600;font-size:24px;line-height:29px;color:#685f5f}",""]),t.exports=r},641:function(t,e,o){var content=o(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(73).default)("3811b536",content,!0,{sourceMap:!1})},645:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"p60"},[r("div",{staticClass:"flex"},[r("button",{staticClass:"burger__menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[r("img",{attrs:{src:o(604),alt:""}}),t._v("\n            каталог\n        ")])]),t._v(" "),r("Nuxt-link",{attrs:{id:"logo",to:"/"}},[r("img",{attrs:{src:o(605),alt:""}})]),t._v(" "),r("div",{staticClass:"buttons"},[r("img",{staticClass:"todo",attrs:{src:o(606),alt:""}}),t._v(" "),r("Nuxt-link",{attrs:{to:"/favorite"}},[r("img",{staticClass:"todo",attrs:{src:o(599),alt:""}})]),t._v(" "),r("img",{staticClass:"todo",attrs:{src:o(607),alt:""}}),t._v(" "),r("img",{staticClass:"todo",attrs:{src:o(608),alt:""}})],1)],1)},n=[]},648:function(t,e,o){"use strict";o.r(e);var r={},n=(o(637),o(72)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("footer",{staticClass:"p60"},[t._m(0),t._v(" "),o("div",{staticClass:"right"},[o("div",{staticClass:"column"},[o("h5",[t._v("Информация")]),t._v(" "),o("div",{staticClass:"links"},[o("Nuxt-Link",{attrs:{to:""}},[t._v("Частые вопросы")]),t._v(" "),o("Nuxt-Link",{attrs:{to:""}},[t._v("Правила участия")]),t._v(" "),o("Nuxt-Link",{attrs:{to:""}},[t._v("Стать участником")]),t._v(" "),o("Nuxt-Link",{attrs:{to:""}},[t._v("Виды карт")]),t._v(" "),o("Nuxt-Link",{attrs:{to:""}},[t._v("Адреса магазинов")])],1)]),t._v(" "),o("div",{staticClass:"column"},[o("h5",[t._v("Контакты")]),t._v(" "),o("div",{staticClass:"links"},[o("Nuxt-Link",{attrs:{to:""}},[t._v("example@mail.ru")]),t._v(" "),o("Nuxt-Link",{attrs:{to:""}},[t._v("+7 (822) 156-90-15")])],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"left"},[o("div",{staticClass:"text"},[o("h5",[t._v("Получайте скидки")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit voluptate eveniet possimus facere optio quibusdam quidem ")])]),t._v(" "),o("div",{staticClass:"form"},[o("form",{attrs:{action:""}},[o("input",{attrs:{type:"email",name:"",placeholder:"Введите своей email",id:"email"}}),t._v(" "),o("button",{attrs:{type:"submit"}},[t._v("Отправить")])]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elitm")])])])}],!1,null,"1103660a",null);e.default=component.exports},649:function(t,e,o){"use strict";o.r(e);var r=o(621),n=o(691),c=o(688),d=o(689),l=o(690);o(609);n.a.use([c.a,d.a,l.a]);var f={components:{Item:r.default},computed:{products:function(){return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart}},beforeMount:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")},mounted:function(){new n.a(".bestsellers",{slidesPerView:4,spaceBetween:40})},updated:function(){new n.a(".bestsellers",{slidesPerView:4,spaceBetween:40})}},v=(o(639),o(72)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"jcsb p60"},[o("h2",[t._v("Лидеры продаж")]),t._v(" "),o("Nuxt-Link",{attrs:{to:"catalog"}},[t._v("смотреть все")])],1),t._v(" "),o("div",{staticClass:"bestsellers p60"},[o("div",{staticClass:"swiper-wrapper"},t._l(this.products.slice(0,8),(function(t){return o("div",{key:t.id,staticClass:"swiper-slide"},[o("item",{key:t.id,attrs:{item:t}})],1)})),0)])])}),[],!1,null,"604f885a",null);e.default=component.exports},659:function(t,e,o){"use strict";o(633)},660:function(t,e,o){var r=o(71)(!1);r.push([t.i,"section[data-v-c4a56ca6]{max-width:1920px;margin:0 auto;width:100%;padding:100px 0}.collections[data-v-c4a56ca6]{display:flex;align-items:flex-start;grid-gap:5.2631578947%;gap:5.2631578947%}.collection_right[data-v-c4a56ca6]{display:flex;flex-direction:column-reverse}.collection_left[data-v-c4a56ca6]{display:flex;flex-direction:column}img[data-v-c4a56ca6]{width:100%;height:auto}.left[data-v-c4a56ca6]{margin:2vh 0 0}.right[data-v-c4a56ca6]{margin:0 0 2vh}.text h3[data-v-c4a56ca6]{font-size:calc(8.5px + 3.90625vw);letter-spacing:-.04em}.text p[data-v-c4a56ca6]{font-size:calc(10.5px + .46875vw);letter-spacing:-.025em;line-height:30px}@media(max-width:768px){.collection_right[data-v-c4a56ca6],.collections[data-v-c4a56ca6]{flex-direction:column}.collection_right[data-v-c4a56ca6]{margin-top:4vh}.collection_right .right[data-v-c4a56ca6]{margin:2vh 0 0}}",""]),t.exports=r},661:function(t,e,o){t.exports=o.p+"img/back.5d771a1.jpg"},662:function(t,e,o){t.exports=o.p+"img/back2.e916d4d.jpg"},663:function(t,e,o){t.exports=o.p+"img/back3.9331c0f.jpg"},664:function(t,e,o){t.exports=o.p+"img/slogan.887da7c.svg"},665:function(t,e,o){"use strict";o(641)},666:function(t,e,o){var r=o(71)(!1);r.push([t.i,".flex[data-v-46f766ce]{display:flex;flex-direction:column;justify-content:space-between;grid-gap:100px;gap:100px}.swiper-pagination[data-v-46f766ce]{display:flex;grid-gap:20px;gap:20px;right:60px;position:absolute;align-self:flex-end}section[data-v-46f766ce]{padding:0!important;margin:0!important}.swiper[data-v-46f766ce]{overflow:hidden}.swiper[data-v-46f766ce],section img.slide[data-v-46f766ce]{position:absolute;width:100%;height:100vh}section img.slide[data-v-46f766ce]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-46f766ce]{height:100vh;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:0 auto}.wrapper img[data-v-46f766ce]{width:100%;height:auto;z-index:1}main[data-v-46f766ce]{justify-content:space-between;grid-gap:80px;gap:80px}.assortment[data-v-46f766ce],main[data-v-46f766ce]{z-index:1;display:flex;flex-direction:column}.assortment[data-v-46f766ce]{grid-gap:35px;gap:35px}.assortment a[data-v-46f766ce]{font-size:15px;text-decoration:none;color:#fff;width:110px}footer[data-v-46f766ce]{z-index:1;color:#fff}.text[data-v-46f766ce]{display:flex;grid-gap:10%;gap:10%;padding-bottom:100px}.text h1[data-v-46f766ce]{font-size:6.35vw}.text h1[data-v-46f766ce],.text p[data-v-46f766ce],.text span i[data-v-46f766ce]{color:#fff}.text p[data-v-46f766ce]{margin-top:50px;width:33%;font-size:14px}.sale[data-v-46f766ce],.sale a[data-v-46f766ce]{z-index:1}.sale a[data-v-46f766ce]{font-size:15px;color:#fff;text-decoration:none}",""]),t.exports=r},677:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"collections p60"},[r("div",{staticClass:"collection_left"},[r("img",{attrs:{src:o(632),alt:""}}),t._v(" "),r("div",{staticClass:"text"},[r("h3",{staticClass:"left"},[t._v("Living large in a  small space")]),t._v(" "),r("p",{staticClass:"left"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?")])])]),t._v(" "),r("div",{staticClass:"collection_right"},[r("img",{attrs:{src:o(632),alt:""}}),t._v(" "),r("div",{staticClass:"text"},[r("h3",{staticClass:"right"},[t._v("We’ve got some ideas \n                on how to decorate \n                ")]),t._v(" "),r("p",{staticClass:"right"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?")])])])])])}],n={},c=(o(659),o(72)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"c4a56ca6",null);e.default=component.exports},678:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"swiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("img",{staticClass:"slide",attrs:{src:o(661),alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("img",{staticClass:"slide",attrs:{src:o(662),alt:""}})]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("img",{staticClass:"slide",attrs:{src:o(663),alt:""}})])])]),t._v(" "),r("div",{staticClass:"wrapper p60"},[r("div",{staticClass:"flex"},[r("img",{attrs:{src:o(664),alt:""}})])])])}],n=o(634),c=o(613),d=o(691),l=o(688),f=o(689),v=o(690);o(609);d.a.use([l.a,f.a,v.a]);var x={mounted:function(){new d.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{Header:n.default,BurgerMenu:c.default},name:"IndexPage"},m=(o(665),o(72)),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"46f766ce",null);e.default=component.exports},694:function(t,e,o){"use strict";o.r(e);var r=o(677),n=o(634),c=o(648),d=o(649),l=o(678),f=o(613),v={components:{HeaderSlider:l.default,Collections:r.default,Footer:c.default,BurgerMenu:f.default,Header:n.default,ItemsSlider:d.default},name:"IndexPage"},x=o(72),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("Header"),t._v(" "),0!=t.$store.state.burgerMenuOpened?o("BurgerMenu"):t._e(),t._v(" "),o("HeaderSlider"),t._v(" "),o("ItemsSlider"),t._v(" "),o("ItemsSlider"),t._v(" "),o("Collections"),t._v(" "),o("Footer")],1)}),[],!1,null,"7a13338c",null);e.default=component.exports}}]);