(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weixin"],{"15a7":function(n,i,t){"use strict";var e=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("view",{staticClass:"weixin"},[n.vipdengji<1?t("view",{staticClass:"tequan"},[n._v("您当前为非正式会员")]):n._e(),n.vipdengji>0?t("image",{staticClass:"image_box",attrs:{src:n.images[n.vipdengji],mode:"scaleToFill",eventid:"7b552e37-0"},on:{tap:function(i){n.imgYu(n.images[n.vipdengji])}}}):n._e(),n.vipdengji>0?t("view",{staticClass:"tequan1"},[n._v("您的会员特权，扫码添加导师微信，免费让他把您拉进答疑交流群，添加请备注“恋爱联盟”")]):n._e(),n.vipdengji<6?t("view",[t("view",{staticClass:"kaitongtext"},[n._v("点击升级，解锁更多会员专属服务，为您提供更多恋爱能力~")]),t("navigator",{staticClass:"vip",attrs:{url:"/pages/vip"}},[n._v("升级会员")])],1):n._e(),t("view",{staticClass:"tequan"},[n._v("恋爱联盟官方公众号")]),t("image",{staticClass:"image",attrs:{src:n.gongzhonghao,mode:"scaleToFill",eventid:"7b552e37-1"},on:{tap:function(i){n.imgYu(n.gongzhonghao)}}})])},a=[];t.d(i,"a",function(){return e}),t.d(i,"b",function(){return a})},"1fac":function(n,i,t){"use strict";t.r(i);var e=t("15a7"),a=t("8613");for(var u in a)"default"!==u&&function(n){t.d(i,n,function(){return a[n]})}(u);t("b420");var o=t("2877"),r=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);i["default"]=r.exports},"208e":function(n,i,t){"use strict";t("38a7");var e=u(t("b0ce")),a=u(t("1fac"));function u(n){return n&&n.__esModule?n:{default:n}}Page((0,e.default)(a.default))},8613:function(n,i,t){"use strict";t.r(i);var e=t("f12c"),a=t.n(e);for(var u in e)"default"!==u&&function(n){t.d(i,n,function(){return e[n]})}(u);i["default"]=a.a},b420:function(n,i,t){"use strict";var e=t("c4ad"),a=t.n(e);a.a},c4ad:function(n,i,t){},f12c:function(n,i,t){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=u(t("a34a")),a=u(t("1490"));u(t("d729"));function u(n){return n&&n.__esModule?n:{default:n}}function o(n,i,t,e,a,u,o){try{var r=n[u](o),s=r.value}catch(c){return void t(c)}r.done?i(s):Promise.resolve(s).then(e,a)}function r(n){return function(){var i=this,t=arguments;return new Promise(function(e,a){var u=n.apply(i,t);function r(n){o(u,e,a,r,s,"next",n)}function s(n){o(u,e,a,r,s,"throw",n)}r(void 0)})}}var s={data:function(){return{weixin:["","pym421542148","job_zhou","pym421542148","job_zhou","pym421542148","job_zhou"],images:["","https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg","https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg","https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg","https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg","https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg","https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg"],gongzhonghao:"https://www.lianaizhuli.com/daoshiweixin/gongzhonghao.png",vipdengji:0}},methods:{imgYu:function(i){var t=i;n.previewImage({current:t,urls:[t]})},getTequan:function(){var i=r(e.default.mark(function i(){var t,u;return e.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:if(t=n.getStorageSync("unionid")||"",""!=t){i.next=4;break}return n.navigateTo({url:"/pages/shouquan"}),i.abrupt("return",!1);case 4:return i.next=6,a.default.getTequan({unionid:t});case 6:u=i.sent,this.vipdengji=u.vipdengji;case 8:case"end":return i.stop()}},i,this)}));function t(){return i.apply(this,arguments)}return t}()},onLoad:function(){this.getTequan()},onShareAppMessage:function(){return{title:"恋爱联盟",path:"/pages/home"}}};i.default=s}).call(this,t("6e42")["default"])}},[["208e","common/runtime","common/vendor"]]]);