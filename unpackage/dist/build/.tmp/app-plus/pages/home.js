(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home"],{"2ba8":function(t,i,e){"use strict";e.r(i);var a=e("8128"),s=e("be0b");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("96ca");var o=e("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=c.exports},8128:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"home"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-active-color":t.indicatorActiveColor,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:"true"}},t._l(t.lunbotu,function(i,a){return e("block",{key:a},[e("swiper-item",{attrs:{mpcomid:"3de791f4-0-"+a}},[e("image",{staticClass:"slide-image",attrs:{src:i.adurl,mode:"scaleToFill",eventid:"3de791f4-0-"+a},on:{tap:function(e){t.goToAdvert(i)}}})])],1)})),e("view",{attrs:{eventid:"3de791f4-16"},on:{touchstart:t.touchStart,touchend:t.touchEnd}},[e("view",{staticClass:"tubiao"},t._l(t.tubiao,function(i,a){return e("view",{key:a,staticClass:"box"},[e("view",{attrs:{eventid:"3de791f4-1-"+a},on:{tap:function(e){t.goTopage(i.page)}}},[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.image}}),e("view",{staticClass:"title"},[t._v(t._s(i.title))])])])})),e("view",{attrs:{eventid:"3de791f4-3"},on:{tap:t.gotosearchpage}},[e("view",{staticClass:"search"},[e("view",{staticClass:"text"},[t._v(t._s(t.inputValue))]),e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:t.searchicon}})]),e("view",{staticClass:"searchmiaoshu"},[t._v(t._s(t.miaoshu))]),e("view",{staticClass:"tuijiankuang"},t._l(t.tuijian,function(i,a){return e("view",{key:a,staticClass:"tuijian",attrs:{eventid:"3de791f4-2-"+a},on:{tap:function(e){t.fuzhituijian(i)}}},[t._v(t._s(i))])}))]),e("view",{staticClass:"kuai3"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.kecheng.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-4"},on:{tap:function(i){t.goTopage("kechenglist")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),t._l(t.kecheng.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-5-"+a},on:{tap:function(e){t.tokecheng(i,a)}}},[e("view",[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.image}})]),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"minlan"},[e("view",{staticClass:"laiyuan"},[t._v(t._s(i.count)+"人学习")]),i.yigoumai?e("view",{staticClass:"yigoumai"},[t._v("去学习")]):t._e(),0==i.yigoumai?e("view",{staticClass:"yigoumai"},[t._v("¥"+t._s(i.jiage))]):t._e()])])])})],2),e("view",{staticClass:"kuai4"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.xingxiangjianshe.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-6"},on:{tap:function(i){t.goTopage("xingxiangjianshelist")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),e("view",{staticClass:"bigbox"},t._l(t.xingxiangjianshe.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-7-"+a},on:{tap:function(e){t.toxingxiang(i,a)}}},[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.newimage}}),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"mintext"},[t._v(t._s(i.count)+"次阅读")])])])}))]),e("view",{staticClass:"kuai3"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.qingganbaike.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-8"},on:{tap:function(i){t.goTopage("qingganbaike")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),t._l(t.qingganbaike.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-9-"+a},on:{tap:function(e){t.toqingganbaike(i,a)}}},[e("view",[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.newimage}})]),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"mintext"},[t._v(t._s(i.count)+"次阅读")])])])})],2),e("view",{staticClass:"kuai4"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.liaomeishizhan.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-10"},on:{tap:function(i){t.goTopage("liaomeishizhanlist")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),e("view",{staticClass:"bigbox"},t._l(t.liaomeishizhan.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-11-"+a},on:{tap:function(e){t.toliaomei(i,a)}}},[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.newimage}}),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"mintext"},[t._v(t._s(i.count)+"次阅读")])])])}))]),e("view",{staticClass:"kuai3"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.sijiao.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-12"},on:{tap:function(i){t.goTopage("sijiaolist")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),t._l(t.sijiao.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-13-"+a},on:{tap:function(e){t.tosijiao(i,a)}}},[e("view",[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.newimage}})]),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"mintext"},[t._v(t._s(i.count)+"人学习")])])])})],2),e("view",{staticClass:"kuai4"},[e("view",{staticClass:"shouhang"},[e("image",{staticClass:"image1",attrs:{mode:"scaleToFill",src:t.xinliceshi.image}}),e("view",{staticClass:"gengduo",attrs:{eventid:"3de791f4-14"},on:{tap:function(i){t.goTopage("xinliceshilist")}}},[t._v(t._s(t.gengduotext)),e("image",{staticClass:"image2",attrs:{mode:"scaleToFill",src:t.gengduoicon}})])]),e("view",{staticClass:"bigbox"},t._l(t.xinliceshi.data,function(i,a){return e("view",{key:a,staticClass:"box",attrs:{eventid:"3de791f4-15-"+a},on:{tap:function(e){t.toxinliceshi(i,a)}}},[e("image",{staticClass:"image",attrs:{mode:"scaleToFill",src:i.newimage}}),e("view",{staticClass:"text"},[e("view",{staticClass:"bigtext"},[t._v(t._s(i.title))]),e("view",{staticClass:"mintext"},[t._v(t._s(i.count)+"次测试")])])])}))])])],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"96ca":function(t,i,e){"use strict";var a=e("b5b0"),s=e.n(a);s.a},b5b0:function(t,i,e){},be0b:function(t,i,e){"use strict";e.r(i);var a=e("cf6d"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},cf6d:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("a34a")),s=n(e("1490"));n(e("d729"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,i,e,a,s,n,o){try{var c=t[n](o),u=c.value}catch(r){return void e(r)}c.done?i(u):Promise.resolve(u).then(a,s)}function c(t){return function(){var i=this,e=arguments;return new Promise(function(a,s){var n=t.apply(i,e);function c(t){o(n,a,s,c,u,"next",t)}function u(t){o(n,a,s,c,u,"throw",t)}c(void 0)})}}var u={data:function(){return{startX:0,startY:0,endX:0,endY:0,indicatorDots:!0,autoplay:!0,interval:3e3,duration:1e3,indicatorActiveColor:"#ffffff",inputValue:"海量聊天话术每日更新",searchicon:"",gengduotext:"",gengduoicon:"",miaoshu:"",tuijian:[],kecheng:{},xingxiangjianshe:{},qingganbaike:{},liaomeishizhan:{},sijiao:{},xinliceshi:{},isend:[!1,!1],lunbotu:[],tubiao:[]}},methods:{getShouyekuai:function(){var i=c(a.default.mark(function i(){var e,n;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return e=t.getStorageSync("unionid")||"",i.next=3,s.default.getShouyekuai({unionid:e});case 3:n=i.sent,this.lunbotu=n.lunbotu,this.tubiao=n.tubiao,this.miaoshu=n.miaoshu,this.searchicon=n.searchicon,this.tuijian=n.tuijian,this.$forceUpdate();case 10:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),getShouyeman:function(){var i=c(a.default.mark(function i(){var e,n;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return e=t.getStorageSync("unionid")||"",i.next=3,s.default.getShouyeman({unionid:e});case 3:n=i.sent,this.kecheng=n.kecheng,this.xingxiangjianshe=n.xingxiangjianshe,this.qingganbaike=n.qingganbaike,this.liaomeishizhan=n.liaomeishizhan,this.sijiao=n.sijiao,this.xinliceshi=n.xinliceshi,this.gengduotext=n.gengduotext,this.gengduoicon=n.gengduoicon,this.$forceUpdate();case 13:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),checkUnionid:function(){var i=c(a.default.mark(function i(){var e,n,o,c,u,r,l,g,d;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return e=t.getStorageSync("userInfo"),n=t.getStorageSync("system"),o=t.getStorageSync("unionid")||"",i.next=5,s.default.checkUnionid({unionid:o,userinfo:e,system:n});case 5:if(c=i.sent,"NO"!=c.MSG){i.next=23;break}return i.next=9,t.getUserInfo();case 9:if(u=i.sent,t.setStorageSync("userInfo",u.userInfo),"getUserInfo:ok"!=u.errMsg){i.next=22;break}return i.next=14,t.login();case 14:return r=i.sent,l=t.getStorageSync("options"),i.next=18,s.default.getUnionid({js_code:r.code,userinfo:u.userInfo,system:n,options:l,encryptedData:u.encryptedData,jiemiiv:u.iv});case 18:g=i.sent,g.MSG&&(d=g.data,d.unionid&&t.setStorageSync("unionid",d.unionid)),i.next=23;break;case 22:t.navigateTo({url:"/pages/shouquan"});case 23:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),changeTab:function(){this.endX-this.startX>30&&1.5*Math.abs(this.endY-this.startY)<Math.abs(this.endX-this.startX)?t.switchTab({url:"./info"}):this.endX-this.startX<-30&&1.5*Math.abs(this.endY-this.startY)<Math.abs(this.endX-this.startX)&&t.switchTab({url:"./liaomeitaolulist"})},tokecheng:function(i,e){t.navigateTo({url:"./kecheng?json="+JSON.stringify(i)})},toxingxiang:function(i,e){var a=this;t.navigateTo({url:"./xingxiangjianshe?id="+i.id,success:function(t){setTimeout(function(){a.xingxiangjianshe.data[e].count+=1},1e3)}})},toqingganbaike:function(i,e){var a=this;t.navigateTo({url:"./baike?id="+i.id,success:function(t){setTimeout(function(){a.qingganbaike.data[e].count+=1},1e3)}})},toliaomei:function(i,e){var a=this;t.navigateTo({url:"./liaomeishizhan?id="+i.id,success:function(t){setTimeout(function(){a.liaomeishizhan.data[e].count+=1},1e3)}})},tosijiao:function(i,e){t.navigateTo({url:"./sijiao?json="+JSON.stringify(i)})},toxinliceshi:function(i,e){t.navigateTo({url:"./xinliceshi?id="+i.id})},fuzhituijian:function(i){t.setClipboardData({data:i,success:function(){t.showToast({title:"复制成功",duration:1}),t.switchTab({url:"/pages/searchpage"})}})},goTopage:function(i){"liaomeitaolulist"==i?t.switchTab({url:"/pages/liaomeitaolulist"}):t.navigateTo({url:i})},gotosearchpage:function(){t.switchTab({url:"/pages/searchpage"})},touchStart:function(t){this.startX=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY},touchEnd:function(t){this.endX=t.changedTouches[0].clientX,this.endY=t.changedTouches[0].clientY,this.changeTab()},goToAdvert:function(i){"html"==i.type?t.navigateTo({url:"./viewhtml?url="+i.url}):"image"==i.type?(i.title=i.title.replace(",","，"),t.navigateTo({url:"./viewimage?title="+i.title+"&url="+i.url})):"ganhuo"==i.type?(i.title=i.title.replace(",","，"),t.navigateTo({url:"./viewganhuo?url="+i.url+"&duration="+i.duration+"&title="+i.title+"&direction="+i.direction})):t.navigateTo({url:"adding"})}},onPullDownRefresh:function(){t.stopPullDownRefresh(),t.switchTab({url:"/pages/searchpage"})},onShow:function(){var i=c(a.default.mark(function i(){var e;return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:e=this,t.getClipboardData({success:function(t){var i=t.data.replace(/^\s\s*/,"").replace(/\s\s*$/,"");i.length>0&&(e.inputValue=i)}}),this.getShouyeman();case 3:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),onLoad:function(){var i=c(a.default.mark(function i(){return a.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:t.setStorageSync("system",t.getSystemInfoSync().system),this.getShouyekuai();case 2:case"end":return i.stop()}},i,this)}));function e(){return i.apply(this,arguments)}return e}(),onShareAppMessage:function(){return{title:"恋爱联盟",path:"/pages/home"}}};i.default=u}).call(this,e("6e42")["default"])},e34d:function(t,i,e){"use strict";e("38a7");var a=n(e("b0ce")),s=n(e("2ba8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))}},[["e34d","common/runtime","common/vendor"]]]);