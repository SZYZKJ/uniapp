(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xinliceshi"],{"0175":function(i,t,s){"use strict";s.r(t);var e=s("a5f7"),n=s.n(e);for(var a in e)"default"!==a&&function(i){s.d(t,i,function(){return e[i]})}(a);t["default"]=n.a},"1bb0":function(i,t,s){"use strict";s.r(t);var e=s("4181"),n=s("0175");for(var a in n)"default"!==a&&function(i){s.d(t,i,function(){return n[i]})}(a);s("6bb0");var h=s("2877"),u=Object(h["a"])(n["default"],e["a"],e["b"],!1,null,null,null);t["default"]=u.exports},4181:function(i,t,s){"use strict";var e=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("view",{staticClass:"xinliceshi"},[0==i.isceshi?s("view",{staticClass:"shouxian"},[s("view",{staticClass:"title"},[i._v(i._s(i.xinliceshi.title))]),s("view",{staticClass:"image"},[s("view",{domProps:{innerHTML:i._s(i.xinliceshi.image)}})]),s("view",{staticClass:"text"},[i._v(i._s(i.xinliceshi.shortDescribe))]),s("view",{staticClass:"kaishiceshi",attrs:{eventid:"25a024cd-0"},on:{tap:i.changeceshi}},[i._v("开始测试")])]):i._e(),1==i.isceshi?s("view",{staticClass:"title"},[i._v(i._s(i.xinliceshi.title))]):i._e(),1==i.isceshi?s("view",{staticClass:"timu"},[s("view",{staticClass:"timutitle"},[i._v(i._s(i.timu.index+1)+"、 "+i._s(i.timu.title))]),i._l(i.timu.options,function(t,e){return s("view",{key:e},[s("view",{staticClass:"zixiang",attrs:{eventid:"25a024cd-1-"+e},on:{tap:function(t){i.xuanzemethod(e)}}},[s("view",{staticClass:"xuanxiang"},[i._v(i._s(t.title))]),i.timu.xuanze==e?s("view",{staticClass:"xuanze1"}):s("view",{staticClass:"xuanze0"})])])}),s("view",{staticClass:"tijiaokuang"},[i.xuanze.length?s("view",{staticClass:"shangyiti",attrs:{eventid:"25a024cd-2"},on:{tap:i.shangyiti}},[i._v("上一题")]):i._e(),i.tijiao?s("view",{staticClass:"tijiao",attrs:{eventid:"25a024cd-3"},on:{tap:i.tijiaoceshi}},[i._v("提交")]):i._e()])],2):i._e(),1==i.isceshi?s("view",{staticClass:"wanchenglv"},[i._v(i._s(i.timu.index+1)+"/"+i._s(i.xinliceshi.questions.length))]):i._e(),2==i.isceshi?s("view",{staticClass:"xinliceshi"},[s("view",{staticClass:"title"},[i._v(i._s(i.xinliceshi.title))]),s("view",{staticClass:"image"},[s("view",{domProps:{innerHTML:i._s(i.xinliceshi.image)}})]),s("view",{staticClass:"bigtext"},[i._v(i._s(i.ceshidaan.result.title))]),s("view",{staticClass:"text"},[i._v(i._s(i.ceshidaan.result.content))]),s("view",{staticClass:"kaishiceshi",attrs:{eventid:"25a024cd-4"},on:{tap:i.changeceshi}},[i._v("再测一次")]),s("view",{staticClass:"dikuang"},[s("view",{staticClass:"shoucangkuang"},[i.dianzan?s("image",{staticClass:"shoucang",attrs:{src:"https://www.lianaizhuli.com/yidianzan.png",eventid:"25a024cd-6"},on:{tap:i.gaibiandianzan}}):s("image",{staticClass:"shoucang",attrs:{src:"https://www.lianaizhuli.com/weidianzan.png",eventid:"25a024cd-5"},on:{tap:i.gaibiandianzan}}),s("view",[i._v(i._s(i.xinliceshi.dianzan))])]),s("view",{staticClass:"shoucangkuang"},[i.shoucang?s("image",{staticClass:"shoucang",attrs:{src:"https://www.lianaizhuli.com/yishoucang.png",eventid:"25a024cd-8"},on:{tap:i.gaibianshoucang}}):s("image",{staticClass:"shoucang",attrs:{src:"https://www.lianaizhuli.com/weishoucang.png",eventid:"25a024cd-7"},on:{tap:i.gaibianshoucang}}),s("view",[i._v(i._s(i.xinliceshi.shoucang))])])])]):i._e()])},n=[];s.d(t,"a",function(){return e}),s.d(t,"b",function(){return n})},"64cf":function(i,t,s){"use strict";s("38a7");var e=a(s("b0ce")),n=a(s("1bb0"));function a(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(n.default))},"6bb0":function(i,t,s){"use strict";var e=s("980f"),n=s.n(e);n.a},"980f":function(i,t,s){},a5f7:function(i,t,s){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=h(s("a34a")),n=h(s("1490")),a=h(s("d729"));function h(i){return i&&i.__esModule?i:{default:i}}function u(i,t,s,e,n,a,h){try{var u=i[a](h),c=u.value}catch(o){return void s(o)}u.done?t(c):Promise.resolve(c).then(e,n)}function c(i){return function(){var t=this,s=arguments;return new Promise(function(e,n){var a=i.apply(t,s);function h(i){u(a,e,n,h,c,"next",i)}function c(i){u(a,e,n,h,c,"throw",i)}h(void 0)})}}var o={data:function(){return{isceshi:0,tijiao:0,ceshiid:"",xinliceshi:{},xuanze:[],timu:{},score:0,ceshidaan:{},ceshitype:"",dianzan:0,shoucang:0}},methods:{getXinliceshi:function(){var t=c(e.default.mark(function t(){var s,a,h;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=i.getStorageSync("unionid")||"",t.next=3,n.default.getXinliceshi({unionid:s,ceshiid:this.ceshiid});case 3:return a=t.sent,this.xinliceshi=a.data,this.xinliceshi.image='<img style="max-width:100%;height:auto;" src="'+this.xinliceshi.image+'"/>',this.ceshitype=this.xinliceshi.type,t.next=9,n.default.getDianzanshoucang({unionid:s,doctype:"xinliceshi",docid:this.ceshiid});case 9:if(h=t.sent,this.dianzan=h.dianzan,this.shoucang=h.shoucang,""!=s){t.next=15;break}return i.navigateTo({url:"/pages/shouquan"}),t.abrupt("return",!1);case 15:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),setDianzanshoucangshu:function(){var t=c(e.default.mark(function t(){var s;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=i.getStorageSync("unionid")||"",""!=s){t.next=4;break}return i.navigateTo({url:"/pages/shouquan"}),t.abrupt("return",!1);case 4:return t.next=6,n.default.setDianzanshoucangshu({unionid:s,doctype:"xinliceshi",docid:this.ceshiid,dianzanshu:this.xinliceshi.dianzan,shoucangshu:this.xinliceshi.shoucang,dianzan:this.dianzan,shoucang:this.shoucang});case 6:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),getCeshidaan:function(){var t=c(e.default.mark(function t(){var s,a;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=i.getStorageSync("unionid")||"",t.next=3,n.default.getCeshidaan({unionid:s,ceshiid:this.ceshiid,ceshitype:this.ceshitype,score:this.score,optionId:this.xuanze[this.xuanze.length-1].options[this.xuanze[this.xuanze.length-1].xuanze].optionId});case 3:if(a=t.sent,this.ceshidaan=a.data,i.setNavigationBarTitle({title:"测试结果"}),this.isceshi=2,""!=s){t.next=10;break}return i.navigateTo({url:"/pages/shouquan"}),t.abrupt("return",!1);case 10:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),deepClone:function(i){var t=JSON.stringify(i),s=JSON.parse(t);return s},gaibianshoucang:function(){this.shoucang=1-this.shoucang,this.shoucang?(this.xinliceshi.shoucang+=1,a.default.success("收藏成功")):(this.xinliceshi.shoucang-=1,a.default.success("取消收藏")),this.setDianzanshoucangshu()},gaibiandianzan:function(){this.dianzan=1-this.dianzan,this.dianzan?this.xinliceshi.dianzan+=1:this.xinliceshi.dianzan-=1,this.setDianzanshoucangshu()},tijiaoceshi:function(){this.getCeshidaan()},shangyiti:function(){var i=this.xuanze.length;this.score-=this.xuanze[i-1].options[this.xuanze[i-1].xuanze].score,1==i?(this.timu=this.deepClone(this.xuanze[0]),this.xuanze=[],this.timu.index=0):1==this.tijiao?(this.timu=this.deepClone(this.xuanze[i-2]),this.score-=this.xuanze[i-2].options[this.xuanze[i-2].xuanze].score,this.xuanze.pop(),this.xuanze.pop()):(this.timu=this.deepClone(this.xuanze[i-1]),this.xuanze.pop()),this.tijiao=0},xuanzemethod:function(i){if("score"==this.ceshitype&&this.xuanze.length==this.xinliceshi.questions.length){var t=this.xuanze.length;this.score-=this.xuanze[t-1].options[this.xuanze[t-1].xuanze].score,this.xuanze.pop(),this.timu.xuanze=i,this.score+=this.timu.options[i].score,this.xuanze.push(this.timu)}else this.timu.xuanze=i,this.score+=this.timu.options[i].score,this.xuanze.push(this.timu);if("jump"==this.ceshitype){if(0==this.timu.options[i].nextQuestionId)this.tijiao=1;else for(var s=0;s<this.xinliceshi.questions.length;++s)if(this.xinliceshi.questions[s].questionId==this.timu.options[i].nextQuestionId){this.timu=this.deepClone(this.xinliceshi.questions[s]),this.timu.index=s,this.timu.xuanze=-1;for(var e=0;e<this.timu.options.length;++e)this.timu.options[e].title=String.fromCharCode("A".charCodeAt(0)+e)+"、"+this.timu.options[e].title;break}}else if(this.xuanze.length==this.xinliceshi.questions.length)this.tijiao=1;else{this.timu=this.deepClone(this.xinliceshi.questions[this.timu.index+1]),this.timu.index=this.xuanze.length,this.timu.xuanze=-1;for(var n=0;n<this.timu.options.length;++n)this.timu.options[n].title=String.fromCharCode("A".charCodeAt(0)+n)+"、"+this.timu.options[n].title}},charCodeAt:function(i){return String.fromCharCode(i)},changeceshi:function(){this.isceshi=1,i.setNavigationBarTitle({title:"心理测试"}),this.timu=this.deepClone(this.xinliceshi.questions[0]),this.xuanze=[],this.timu.index=0,this.timu.xuanze=-1;for(var t=0;t<this.timu.options.length;++t)this.timu.options[t].title=String.fromCharCode("A".charCodeAt(0)+t)+"、"+this.timu.options[t].title}},onLoad:function(i){this.ceshiid=i.id,this.getXinliceshi()},onShareAppMessage:function(){return{title:this.xinliceshi.title,path:"/pages/xinliceshi?id="+this.ceshiid}},onUnload:function(){var t=getCurrentPages();1==t.length&&"pages/searchpage"!=t[0].route&&i.switchTab({url:"/pages/home"})}};t.default=o}).call(this,s("6e42")["default"])}},[["64cf","common/runtime","common/vendor"]]]);