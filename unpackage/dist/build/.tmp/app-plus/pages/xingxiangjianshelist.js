(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xingxiangjianshelist"],{"67ac":function(t,n,e){"use strict";e("38a7");var i=s(e("b0ce")),a=s(e("c302"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"92db":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(e("a34a")),a=s(e("1490"));s(e("d729"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,i,a,s,u){try{var r=t[s](u),o=r.value}catch(c){return void e(c)}r.done?n(o):Promise.resolve(o).then(i,a)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var s=t.apply(n,e);function r(t){u(s,i,a,r,o,"next",t)}function o(t){u(s,i,a,r,o,"throw",t)}r(void 0)})}}var o={data:function(){return{xingxiangjiansheList:[],isend:0,scroll:""}},methods:{getXingxiangjiansheList:function(){var n=r(i.default.mark(function n(e){var s,u;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!this.isend){n.next=2;break}return n.abrupt("return");case 2:return s=t.getStorageSync("unionid")||"",this,n.next=6,a.default.getXingxiangjiansheList({unionid:s,scroll:this.scroll});case 6:if(u=n.sent,u.data.length<10&&(this.isend=!0),this.xingxiangjiansheList=e?u.data.concat(this.xingxiangjiansheList):this.xingxiangjiansheList.concat(u.data),this.scroll=u.scroll,""!=s){n.next=13;break}return t.navigateTo({url:"/pages/shouquan"}),n.abrupt("return",!1);case 13:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),goTohtml:function(n,e){var i=this;t.navigateTo({url:"./xingxiangjianshe?id="+n.id,success:function(t){setTimeout(function(){i.xingxiangjiansheList[e].count+=1},1e3)}})}},onPullDownRefresh:function(){t.stopPullDownRefresh(),this.getXingxiangjiansheList(1)},onReachBottom:function(){this.getXingxiangjiansheList(0)},onLoad:function(){this.getXingxiangjiansheList(0)},onShareAppMessage:function(){return{title:"恋爱联盟",path:"/pages/xingxiangjianshelist"}},onUnload:function(){var n=getCurrentPages();1==n.length&&t.switchTab({url:"/pages/home"})}};n.default=o}).call(this,e("6e42")["default"])},"92ee":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"xingxiangjianshelist"},[t._l(t.xingxiangjiansheList,function(n,i){return e("view",{key:i},[e("view",{staticClass:"wenzhang",attrs:{eventid:"c830ee90-0-"+i},on:{tap:function(e){t.goTohtml(n,i)}}},[e("view",{staticClass:"kuai"},[e("view",{staticClass:"textkuang"},[e("text",{staticClass:"title",attrs:{selectable:"true"}},[t._v(t._s(n.title))]),e("view",{staticClass:"laiyuan"},[t._v(t._s(n.count)+"次阅读")])]),e("image",{staticClass:"image",attrs:{src:n.image,mode:"scaleToFill","lazy-load":"false"}})])])])}),t.isend?t._e():e("view",{staticClass:"textend"},[t._v("加载中......")]),t.isend?e("view",{staticClass:"textend"},[t._v("恋爱脱单上恋爱联盟")]):t._e()],2)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},c302:function(t,n,e){"use strict";e.r(n);var i=e("92ee"),a=e("fc7e");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("d0fb");var u=e("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},d0fb:function(t,n,e){"use strict";var i=e("e790"),a=e.n(i);a.a},e790:function(t,n,e){},fc7e:function(t,n,e){"use strict";e.r(n);var i=e("92db"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a}},[["67ac","common/runtime","common/vendor"]]]);