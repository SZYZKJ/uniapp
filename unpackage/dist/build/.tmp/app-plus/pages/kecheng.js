(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kecheng"],{"10e2":function(t,e,n){"use strict";var a=n("e661"),i=n.n(a);i.a},"26dc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"kecheng"},[n("image",{staticClass:"banner",attrs:{mode:"widthFix",src:t.kecheng.image}}),n("view",{staticClass:"title"},[t._v(t._s(t.kecheng.title))]),n("view",{staticClass:"tab-h",attrs:{"scroll-x":"true","scroll-left":"scrollLeft"}},t._l(t.tablist,function(e,a){return n("view",{key:a,class:t.currentTab==a?"tab-itemactive":"tab-item",attrs:{eventid:"7429f00a-0-"+a},on:{tap:function(e){t.swichNav(a)}}},[t._v(t._s(e))])})),0==t.currentTab?n("image",{staticClass:"banner",attrs:{mode:"widthFix",src:t.kecheng.url,eventid:"7429f00a-3"},on:{touchstart:t.touchStart,touchend:t.touchEnd}}):n("view",{staticClass:"libiao",attrs:{eventid:"7429f00a-2"},on:{touchstart:t.touchStart,touchend:t.touchEnd}},t._l(t.kecheng.children,function(e,a){return n("view",{key:a},[n("view",{staticClass:"titlekuang",attrs:{eventid:"7429f00a-1-"+a},on:{tap:function(n){t.goTohtml(e,a)}}},[n("view",{staticClass:"itemtitle"},[t._v(t._s(e.title))]),t.kecheng.yigoumai?n("view",{staticClass:"yigoumai"},[t._v("去学习")]):n("view",[a<1||a<2&&t.kecheng.children.length>=5?n("view",{staticClass:"yigoumai"},[t._v("免费")]):n("image",{staticClass:"suo",attrs:{src:"../static/suo.png"}})])])])})),0==t.kecheng.yigoumai?n("view",{staticClass:"kuang"},[n("view",{staticClass:"text",attrs:{eventid:"7429f00a-4"},on:{tap:t.zhifukecheng}},[t._v("特价 "+t._s(t.kecheng.jiage))])]):t._e()])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"757b":function(t,e,n){"use strict";n.r(e);var a=n("8dbe"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"8dbe":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),i=r(n("1490")),s=r(n("d729"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,i,s,r){try{var u=t[s](r),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(a,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var s=t.apply(e,n);function r(t){u(s,a,i,r,c,"next",t)}function c(t){u(s,a,i,r,c,"throw",t)}r(void 0)})}}var o={data:function(){return{kecheng:{},currentTab:0,paySign_data:{},isowenan:"",tablist:["课程介绍","课程列表"]}},methods:{huoquwenan:function(){var e=c(a.default.mark(function e(){var n,s;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.getStorageSync("unionid")||"",""!=n){e.next=4;break}return t.navigateTo({url:"/pages/shouquan"}),e.abrupt("return",!1);case 4:return e.next=6,i.default.getIoswenan({unionid:n});case 6:s=e.sent,this.ioswenan=s.data;case 8:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tiaoqizhifu:function(){var e=this;t.requestPayment({timeStamp:this.paySign_data.timeStamp,nonceStr:this.paySign_data.nonceStr,package:this.paySign_data.package,signType:this.paySign_data.signType,paySign:this.paySign_data.paySign,success:function(t){s.default.confirm("恭喜您购买成功"),e.kecheng.yigoumai=1,e.currentTab=1}})},zhifukecheng:function(){var e=c(a.default.mark(function e(){var n,s,r;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=Date.parse(new Date),!(n-this.nowtime<3e3)){e.next=5;break}return e.abrupt("return",!1);case 5:this.nowtime=n;case 6:if(s=t.getStorageSync("unionid")||"",""!=s){e.next=10;break}return t.navigateTo({url:"/pages/shouquan"}),e.abrupt("return",!1);case 10:return e.next=12,i.default.get_kechengprepay_id({unionid:s,kechengid:this.kecheng.id,detail:"课程："+this.kecheng.title});case 12:r=e.sent,this.paySign_data=r.data,"nophoneNumber"==r.MSG?t.navigateTo({url:"/pages/phonenumber"}):this.tiaoqizhifu();case 15:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),changeTab:function(){this.endX-this.startX>100&&1.5*Math.abs(this.endY-this.startY)<Math.abs(this.endX-this.startX)?this.currentTab>0&&(this.currentTab=0):this.endX-this.startX<-100&&1.5*Math.abs(this.endY-this.startY)<Math.abs(this.endX-this.startX)&&this.currentTab<1&&(this.currentTab=1)},touchStart:function(t){this.startX=t.mp.changedTouches[0].pageX,this.startY=t.mp.changedTouches[0].pageY},touchEnd:function(t){this.endX=t.mp.changedTouches[0].pageX,this.endY=t.mp.changedTouches[0].pageY,this.changeTab()},goTohtml:function(e,n){if(this.kecheng.yigoumai||n<1||n<2&&this.kecheng.children.length>=5){var a="0";(n<1||n<2&&this.kecheng.children.length>=5)&&(a="1"),t.navigateTo({url:"./kechengneirong?neirongid="+e.id+"&kechengjson="+JSON.stringify(this.kecheng)+"&kefenxiang="+a})}else s.default.confirm("尊敬的恋爱联盟用户，当前内容为付费阅读，请先购买~")},swichNav:function(t){var e=t;if(this.currentTab==e)return!1;this.currentTab=e}},onShow:function(){var e=t.getStorageSync("yigoumai");"0"==e&&(this.kecheng.yigoumai=0,t.removeStorageSync("yigoumai"));var n=t.getStorageSync("phoneNumber");1==n&&(t.setStorageSync("phoneNumber",0),this.tiaoqizhifu())},onLoad:function(t){this.kecheng=JSON.parse(t.json),this.huoquwenan()},onShareAppMessage:function(){return{title:"恋爱联盟",path:"/pages/kecheng?json="+JSON.stringify(this.kecheng)}},onUnload:function(){var e=getCurrentPages();1==e.length&&t.switchTab({url:"/pages/home"})}};e.default=o}).call(this,n("6e42")["default"])},d0a5e:function(t,e,n){"use strict";n.r(e);var a=n("26dc"),i=n("757b");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("10e2");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},db1b:function(t,e,n){"use strict";n("38a7");var a=s(n("b0ce")),i=s(n("d0a5e"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},e661:function(t,e,n){}},[["db1b","common/runtime","common/vendor"]]]);