(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengneirong"],{"410f":function(e,n,t){"use strict";var i=t("b609"),a=t.n(i);a.a},"5cd8":function(e,n,t){"use strict";t.r(n);var i=t("dc11"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,function(){return i[e]})}(r);n["default"]=a.a},"78bb":function(e,n,t){"use strict";t("38a7");var i=r(t("b0ce")),a=r(t("d989"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(a.default))},b609:function(e,n,t){},c43e:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("view",{staticClass:"kechengneirong"},[t("view",{staticClass:"title"},[e._v(e._s(e.kecheng.title))]),t("view",{domProps:{innerHTML:e._s(e.kecheng.content)}})])},a=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},d989:function(e,n,t){"use strict";t.r(n);var i=t("c43e"),a=t("5cd8");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);t("410f");var o=t("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},dc11:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("a34a")),a=o(t("1490")),r=o(t("d729"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,a,r,o){try{var u=e[r](o),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(i,a)}function c(e){return function(){var n=this,t=arguments;return new Promise(function(i,a){var r=e.apply(n,t);function o(e){u(r,i,a,o,c,"next",e)}function c(e){u(r,i,a,o,c,"throw",e)}o(void 0)})}}var s={data:function(){return{neirongid:"",kecheng:{},kechengjson:"",kefenxiang:"0"}},methods:{getKecheng:function(){var n=c(i.default.mark(function n(){var t,o;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return t=e.getStorageSync("unionid")||"",n.next=3,a.default.getKecheng({unionid:t,kechengid:this.kechengjson.id,neirongid:this.neirongid,kefenxiang:this.kefenxiang});case 3:if(o=n.sent,"YES"!=o.MSG){n.next=12;break}if(this.kecheng=o.data,e.setNavigationBarTitle({title:this.kecheng.title}),""!=t){n.next=10;break}return e.navigateTo({url:"/pages/shouquan"}),n.abrupt("return",!1);case 10:n.next=15;break;case 12:r.default.confirm("尊敬的恋爱联盟用户，当前内容为付费阅读，请先购买~"),e.setStorageSync("yigoumai","0"),e.navigateBack({delta:1});case 15:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()},onLoad:function(e){this.neirongid=e.neirongid,this.kechengjson=JSON.parse(e.kechengjson),this.kefenxiang=e.kefenxiang,this.getKecheng()},onShareAppMessage:function(){return"1"==this.kefenxiang?{title:"恋爱联盟",path:"/pages/kechengneirong?neirongid="+this.neirongid+"&kechengjson="+JSON.stringify(this.kechengjson)+"&kefenxiang="+this.kefenxiang}:{title:"恋爱联盟",path:"/pages/kecheng?json="+JSON.stringify(this.kechengjson)}},onUnload:function(){var n=getCurrentPages();1==n.length&&e.switchTab({url:"/pages/home"})}};n.default=s}).call(this,t("6e42")["default"])}},[["78bb","common/runtime","common/vendor"]]]);