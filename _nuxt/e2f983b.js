(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{635:function(t,e,n){var content=n(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("c20981a4",content,!0,{sourceMap:!1})},653:function(t,e,n){"use strict";n.r(e);var o=n(93),r=(n(75),{data:function(){return{value:[0,3500]}},computed:{max:function(){return Math.max.apply(Math,Object(o.a)(this.$store.getters.products.map((function(t){return t.price}))))},min:function(){return Math.min.apply(Math,Object(o.a)(this.$store.getters.products.map((function(t){return t.price}))))}},updated:function(){this.max,this.min},methods:{updateFiltered:function(){this.$emit("updateFiltered",this.value)}}}),l=(n(661),n(74)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter todo"},[n("h3",[t._v("Цена")]),t._v(" "),n("div",{staticClass:"customRow"},[n("p",[t._v("От "+t._s(t.value[0])+"₽ до ₽ "+t._s(t.value[1]))])]),t._v(" "),n("el-slider",{staticClass:"filterRange",attrs:{range:"",min:t.min,max:t.max},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("button",{on:{click:t.updateFiltered}},[t._v("Фильтр")])],1)}),[],!1,null,"3a8aefb7",null);e.default=component.exports},661:function(t,e,n){"use strict";n(635)},662:function(t,e,n){var o=n(72)(!1);o.push([t.i,".el-slider__runway[data-v-3a8aefb7]{color:#fff!important}button[data-v-3a8aefb7]{font-size:11px;font-weight:700;width:100px;height:35px;text-transform:uppercase}.customRow[data-v-3a8aefb7]{display:flex;align-items:center;justify-content:space-between;margin-bottom:25px;flex-wrap:nowrap}.filter[data-v-3a8aefb7]{display:flex;flex-direction:column;grid-gap:20px;gap:20px}.filter h3[data-v-3a8aefb7]{font-weight:600;font-size:20px;line-height:24px;color:#685f5f;margin-bottom:20px}.filter P[data-v-3a8aefb7]{font-weight:400;font-size:16px;line-height:19px;color:#a9a1a1}.filter P span[data-v-3a8aefb7]{font-weight:600}.filter input[type=range][data-v-3a8aefb7]{width:100%}",""]),t.exports=o}}]);