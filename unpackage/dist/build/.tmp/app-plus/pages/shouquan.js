(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouquan"],{"08b9":function(t,e,n){"use strict";var a=n("5a52"),r=n.n(a);r.a},"3fa1":function(t,e,n){"use strict";n.r(e);var a=n("d3bc"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"5a52":function(t,e,n){},"9e90":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"shouquan"},[n("image",{staticClass:"authorize-icon",attrs:{src:"../static/authorize.png"}}),n("view",{staticClass:"auth-item"},[t._v("恋爱联盟申请获取以下权限：")]),n("view",{staticClass:"auth-item"},[t._v("获取你的公开信息（头像、昵称等）")]),n("view",{staticClass:"btn-authorize"},[n("button",{attrs:{"open-type":"getUserInfo",type:"primary",lang:"zh_CN",bindgetuserinfo:"onGotUserInfo"}},[t._v("授权")])],1)])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},bb41:function(t,e,n){"use strict";n.r(e);var a=n("9e90"),r=n("3fa1");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("08b9");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},d3bc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a34a")),r=o(n("1490"));o(n("d729"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,a,r,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function u(t){i(o,a,r,u,s,"next",t)}function s(t){i(o,a,r,u,s,"throw",t)}u(void 0)})}}var s={methods:{onGotUserInfo:function(){var e=u(a.default.mark(function e(n){var o,i,u,s,c,f;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("getUserInfo:ok"!=n.detail.errMsg){e.next=23;break}return e.next=3,t.getUserInfo();case 3:if(o=e.sent,"getUserInfo:ok"!=o.errMsg){e.next=21;break}return e.prev=5,i=t.getStorageSync("system"),u=t.getStorageSync("options"),e.next=10,t.login();case 10:return s=e.sent,e.next=13,r.default.getUnionid({js_code:s.code,userinfo:o.userInfo,system:i,options:u,encryptedData:o.encryptedData,jiemiiv:o.iv});case 13:c=e.sent,t.setStorageSync("userInfo",o.userInfo),c.data.unionid&&(f=c.data,f.unionid?(t.setStorageSync("unionid",f.unionid),t.navigateBack({delta:1})):t.showModal({title:"系统有误",content:"授权失败"})),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](5),t.showModal({title:"系统有误",content:"授权失败"});case 21:e.next=24;break;case 23:t.showModal({title:"友情提示",content:"尊敬的用户，为确保对您的服务质量，请允许我们获取您的公开信息"});case 24:case"end":return e.stop()}},e,this,[[5,18]])}));function n(t){return e.apply(this,arguments)}return n}()},onShareAppMessage:function(){return{title:"恋爱联盟",path:"/pages/home"}}};e.default=s}).call(this,n("6e42")["default"])},ec83:function(t,e,n){"use strict";n("38a7");var a=o(n("b0ce")),r=o(n("bb41"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))}},[["ec83","common/runtime","common/vendor"]]]);