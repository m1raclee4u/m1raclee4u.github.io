(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14],{397:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("4c2131cc",content,!0,{sourceMap:!1})},398:function(t,e,o){t.exports=o.p+"img/heart.2a979da.svg"},404:function(t,e,o){"use strict";o(397)},405:function(t,e,o){var r=o(53),d=o(182),n=o(398),c=r(!1),l=d(n);c.push([t.i,".tag[data-v-1b4dcb09]{width:58px;height:58px;left:14px;top:14px;border-radius:50%;border:1px solid #685f5f;text-align:center;line-height:100%}.tag[data-v-1b4dcb09],.tag p[data-v-1b4dcb09]{position:absolute}.tag p[data-v-1b4dcb09]{top:17px;left:13px;color:#685f5f}.like[data-v-1b4dcb09]{position:absolute;background-image:url("+l+');background-repeat:no-repeat;background-position:50%;background-color:unset;width:30px;height:30px;top:14px;right:14px;border-radius:50%;text-align:center;line-height:100%}.ItemCart[data-v-1b4dcb09]{padding-bottom:60px}.ItemCart img[data-v-1b4dcb09]{max-width:411px;width:100%;height:587px;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-1b4dcb09]{font-family:"RF Dewi";font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#685f5f}.colors[data-v-1b4dcb09]{grid-gap:10px;gap:10px}.ItemCart__price[data-v-1b4dcb09]{display:flex;grid-gap:30px;gap:30px}.ItemCart__price p[data-v-1b4dcb09]{font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#685f5f}.ItemCart__price .old[data-v-1b4dcb09]{color:grey;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-1b4dcb09]{padding-bottom:60px}.ItemCart img[data-v-1b4dcb09]{max-width:100%;height:auto;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-1b4dcb09]{margin-bottom:20px;font-size:13px}}',""]),t.exports=c},406:function(t,e,o){"use strict";o.r(e);var r=o(490),d=o(487),n=o(488),c=o(489);o(400);r.a.use([d.a,n.a,c.a]);var l={name:"item",props:["item"]},f=(o(404),o(54)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ItemCart"},[o("div",{staticClass:"swiper-slide"},[o("Nuxt-Link",{attrs:{to:t.item.category+"/"+t.item.name}},[o("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+t.item.photo,alt:t.item.name}}),t._v(" "),o("div",{staticClass:"tag"},[o("p",[t._v("ХИТ")])]),t._v(" "),o("button",{staticClass:"like"})]),t._v(" "),o("p",{staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(t.item.name))]),t._v(" "),o("div",{staticClass:"ItemCart__price"},[o("p",[t._v(t._s(t.item.price)+" ₽")]),t._v(" "),o("div",{staticClass:"flex colors"},t._l(t.$store.state.colors,(function(e){return o("div",{key:e.id,staticClass:"input_color",attrs:{disabled:""}},[o("input",{staticClass:"custom-radio",attrs:{name:e,type:"radio",id:e.id},domProps:{value:e.id}}),t._v(" "),o("label",{attrs:{id:e.id,for:e.id}})])})),0)])],1)])}),[],!1,null,"1b4dcb09",null);e.default=component.exports},434:function(t,e,o){var content=o(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("12c3722f",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o(434)},452:function(t,e,o){var r=o(53)(!1);r.push([t.i,"a[data-v-67af1898]{text-decoration:none;color:#b8b8b8}.bestsellers[data-v-67af1898]{overflow-x:hidden}img[data-v-67af1898]{max-width:100%;height:auto}section[data-v-67af1898]{margin:0 auto;padding:100px 0 0;max-width:1920px;width:100%}section h2[data-v-67af1898]{padding-bottom:60px;font-weight:600;font-size:24px;line-height:29px;color:#685f5f}",""]),t.exports=r},474:function(t,e,o){"use strict";o.r(e);var r=o(406),d=o(490),n=o(487),c=o(488),l=o(489);o(400);d.a.use([n.a,c.a,l.a]);var f={components:{Item:r.default},computed:{products:function(){return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart}},beforeMount:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")},updated:function(){new d.a(".bestsellers",{slidesPerView:4,spaceBetween:40})},mounted:function(){new d.a(".bestsellers",{slidesPerView:4,spaceBetween:40})}},m=(o(451),o(54)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"jcsb p60"},[o("h2",[t._v("Лидеры продаж")]),t._v(" "),o("Nuxt-Link",{attrs:{to:"catalog"}},[t._v("смотреть все")])],1),t._v(" "),o("div",{staticClass:"bestsellers p60"},[o("div",{staticClass:"swiper-wrapper"},t._l(this.products,(function(t){return o("div",{key:t.id,staticClass:"swiper-slide"},[o("item",{key:t.id,attrs:{item:t}})],1)})),0)])])}),[],!1,null,"67af1898",null);e.default=component.exports}}]);