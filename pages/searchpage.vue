<template>
  <view class="searchpage">
    <view class="search">
      <view class="serch_content">
        <icon type="search" size="20"></icon>
        <input type="text" class="search_input" :value="inputValue" :focus="focus" @input="bindinput" @confirm="bindconfirm" @focus="bindfocus" confirm-type="search" placeholder="复制妹子聊天的话" maxlength="20" />
        <view class="cha" v-if="inputValue!=''" @tap="delText">
          <view class="chaclearn">
            <icon type="clear" size="20"></icon>
          </view>
        </view>
      </view>
      <view v-if="showRecommend==0">
        <tab class="tab" @getCurrentTab="getCurrentTab" v-bind:currentTab="currentTab" v-bind:tabList="tabList"></tab>
      </view>
    </view>
    <view class="showdata" v-if="showRecommend==0" @touchstart="touchStart" @touchend="touchEnd">
      <view v-if="currentTab==0">
        <placeholder v-if="huashuList.length==0&&isend0"></placeholder>
        <huashu v-bind:huashuList="huashuList" @jilu="jilu"></huashu>
      </view>
      <view v-if="currentTab==1">
        <placeholder v-if="biaoqingList.length==0&&isend1"></placeholder>
        <biaoqing v-bind:biaoqingList="biaoqingList" @jilu="jilu" @nochange="nochange"></biaoqing>
      </view>
      <view v-if="currentTab==2">
        <placeholder v-if="baikeList.length==0&&isend2"></placeholder>
        <baike v-bind:baikeList="baikeList" @goTohtml="goTohtml"></baike>
      </view>
      <view class="textend" v-if="(currentTab==0&&!isend0&&oldhuashu)||(currentTab==1&&!isend1&&oldbiaoqing)||(currentTab==2&&!isend2&&oldbaike)">加载中......</view>
      <view class="textend" v-else>恋爱脱单上恋爱联盟</view>
    </view>
    <view class="recommend" v-if="showRecommend">
      <view class="bigkuai">
        <view class="kuai">
          <view class="biaoti">热门推荐</view>
          <button class="weui-btn" type="default" size="mini" v-for="(item,index) in hotWordsList" :key="index" @tap="searchKeyword(item)">{{item}}</button>
        </view>
      </view>
      <view class="bigkuai">
        <view class="hiskuai">
          <view class="biaoti">历史记录</view>
          <button class="weui-btn" type="default" size="mini" v-for="(item,index) in hisWordsList" :key="index" @tap="searchKeyword(item)">{{item}}</button>
        </view>
        <view class="if_his" v-if="hisWordsList.length==0">暂无搜索记录</view>
        <button class="btn_box" @tap="clearHis">清除历史记录</button>
        <view class="minkuai"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  import tab from "./components/tab";
  import huashu from "./components/huashu";
  import biaoqing from "./components/biaoqing";
  import baike from "./components/baike";
  import placeholder from "./components/placeholder";
  export default {
    components: {
      tab: tab,
      huashu: huashu,
      biaoqing: biaoqing,
      baike: baike,
      placeholder: placeholder
    },
    data() {
      return {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        focus: false,
        ifonShow: true,
        inputValue: "",
        oldhuashu: "",
        oldbiaoqing: "",
        oldbaike: "",
        currentTab: 0,
        huashuList: [],
        biaoqingList: [],
        baikeList: [],
        isend0: false,
        isend1: false,
        isend2: false,
        scroll0: "",
        scroll1: "",
        scroll2: "",
        tabList: ["话术", "表情", '百科'],
        hisWordsList: [],
        hotWordsList: [],
        showRecommend: 0,
        jilutype: "huashu",
        jilucontent: "",
        copyinput: "",
      }
    },
    methods: {
      goTohtml(item) {
        if (item.doctype == 'wenda')
          uni.navigateTo({
            url: "/pages/wenda?id=" + item.id
          })
        else if (item.doctype == 'baike')
          uni.navigateTo({
            url: "/pages/baike?id=" + item.id
          })
        else if (item.doctype == 'xingxiangjianshe')
          uni.navigateTo({
            url: "/pages/xingxiangjianshe?id=" + item.id
          })
        else if (item.doctype == 'liaomeishizhan') {
          uni.navigateTo({
            url: "/pages/liaomeishizhan?id=" + item.id
          })
        } else if (item.doctype == 'xinliceshi')
          uni.navigateTo({
            url: "/pages/xinliceshi?id=" + item.id
          })
      },
      async getRecommend() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.getRecommend({
          unionid: unionid
        });
        this.hotWordsList = json.data.hotWordsList;
      },
      async getHiswordList() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.getHiswordList({
          unionid: unionid
        });
        this.hisWordsList = json.data;
      },
      confirm() {
        uni.showModal({
          title: "温馨提示",
          content: "您当前为非会员，无法为您提供更多恋爱能力~",
          showCancel: false,
          confirmText: "确定",
          success: function(res) {
            if (res.cancel) {} else {}
          },
          fail: function(res) {}, //接口调用失败的回调函数
          complete: function(res) {} //接口调用结束的回调函数（调用成功、失败都会执行）
        });
      },
      async searchLiaomeihuashu() {
        let that = this;
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.searchLiaomeihuashu({
          query: that.inputValue,
          unionid: unionid,
          scroll: that.scroll0
        });
        that.oldhuashu = that.inputValue;
        if (json.MSG == "OK") {
          that.huashuList = that.huashuList.concat(json.data);
          if (json.data.length < 10) this.isend0 = true;
          that.scroll0 = json.scroll;
        } else {
          this.confirm();
        }
        that.showRecommend = false;
      },
      async searchBiaoqing() {
        let that = this;
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.searchBiaoqing({
          query: that.inputValue,
          unionid: unionid,
          scroll: that.scroll1
        });
        that.oldbiaoqing = that.inputValue;
        if (json.MSG == "OK") {
          that.biaoqingList = that.biaoqingList.concat(json.data);
          if (json.data.length < 10) this.isend1 = true;
          that.scroll1 = json.scroll;
        } else {
          this.confirm();
        }
        that.showRecommend = false;
      },
      async searchBaike() {
        let that = this;
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.searchBaike({
          query: that.inputValue,
          unionid: unionid,
          scroll: that.scroll2
        });
        that.oldbaike = that.inputValue;
        if (json.MSG == "OK") {
          that.baikeList = that.baikeList.concat(json.data);
          if (json.data.length < 10) this.isend2 = true;
          that.scroll2 = json.scroll;
        } else {
          this.confirm();
        }
        that.showRecommend = false;
      },
      async clearHiswords() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.clearHiswords({
          unionid: unionid
        });
        this.hisWordsList = [];
      },
      doSearch(val) {
        if (val.length) {
          this.inputValue = val;
          if (this.currentTab == 0) this.searchLiaomeihuashu();
          if (this.currentTab == 1) this.searchBiaoqing();
          if (this.currentTab == 2) this.searchBaike();
        }
      },
      changeTab() {
        if (
          this.endX - this.startX > 30 &&
          Math.abs(this.endY - this.startY) * 1.5 <
          Math.abs(this.endX - this.startX)
        ) {
          if (this.currentTab > 0) {
            this.currentTab--;
            if (this.currentTab == 0 && this.inputValue != this.oldhuashu) {
              this.huashuList = [];
              this.scroll0 = "";
              this.isend0 = false;
              this.searchLiaomeihuashu();
            }
            if (this.currentTab == 1 && this.inputValue != this.oldbiaoqing) {
              this.biaoqingList = [];
              this.scroll1 = "";
              this.isend1 = false;
              this.searchBiaoqing();
            }
            if (this.currentTab == 2 && this.inputValue != this.oldbaike) {
              this.baikeList = [];
              this.scroll2 = "";
              this.isend2 = false;
              this.searchBaike();
            }
          } else {
            uni.switchTab({
              url: "./liaomeitaolulist"
            })
          }
        } else if (
          this.endX - this.startX < -30 &&
          Math.abs(this.endY - this.startY) * 1.5 <
          Math.abs(this.endX - this.startX)
        ) {
          if (this.currentTab < 2) {
            this.currentTab++;
            if (this.currentTab == 0 && this.inputValue != this.oldhuashu) {
              this.huashuList = [];
              this.scroll0 = "";
              this.isend0 = false;
              this.searchLiaomeihuashu();
            }
            if (this.currentTab == 1 && this.inputValue != this.oldbiaoqing) {
              this.biaoqingList = [];
              this.scroll1 = "";
              this.isend1 = false;
              this.searchBiaoqing();
            }
            if (this.currentTab == 2 && this.inputValue != this.oldbaike) {
              this.baikeList = [];
              this.scroll2 = "";
              this.isend2 = false;
              this.searchBaike();
            }
          } else {
            uni.switchTab({
              url: "./info"
            })
          }
        }
      },
      async setJilu() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.setJilu({
          unionid: unionid,
          query: this.inputValue,
          jilutype: this.jilutype,
          jilucontent: this.jilucontent
        });
      },
      jilu(jilutype, jilucontent) {
        this.jilutype = jilutype;
        this.jilucontent = jilucontent;
        this.setJilu();
      },
      nochange() {
        this.ifonShow = false;
      },
      touchStart(e) {
        this.startX = e.changedTouches[0].clientX;
        this.startY = e.changedTouches[0].clientY;
      },
      touchEnd(e) {
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;
        this.changeTab();
      },
      bindinput(obj) {
        this.inputValue = obj.detail.value;
      },
      bindconfirm() {
        this.showRecommend = false;
        this.inputValue = this.inputValue
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
        if (this.currentTab == 0 && this.inputValue != this.oldhuashu) {
          this.huashuList = [];
          this.scroll0 = "";
          this.isend0 = false;
          this.searchLiaomeihuashu();
        }
        if (this.currentTab == 1 && this.inputValue != this.oldbiaoqing) {
          this.biaoqingList = [];
          this.scroll1 = "";
          this.isend1 = false;
          this.searchBiaoqing();
        }
        if (this.currentTab == 2 && this.inputValue != this.oldbaike) {
          this.baikeList = [];
          this.scroll2 = "";
          this.isend2 = false;
          this.searchBaike();
        }
      },
      bindfocus() {
        this.showRecommend = true;
      },
      delText() {
        this.inputValue = "";
      },
      getCurrentTab(cur, evt) {
        this.currentTab = cur;
        if (this.currentTab == 0 && this.inputValue != this.oldhuashu) {
          this.huashuList = [];
          this.scroll0 = "";
          this.isend0 = false;
          this.searchLiaomeihuashu();
        }
        if (this.currentTab == 1 && this.inputValue != this.oldbiaoqing) {
          this.biaoqingList = [];
          this.scroll1 = "";
          this.isend1 = false;
          this.searchBiaoqing();
        }
        if (this.currentTab == 2 && this.inputValue != this.oldbaike) {
          this.baikeList = [];
          this.scroll2 = "";
          this.isend2 = false;
          this.searchBaike();
        }
      },
      searchKeyword(val) {
        this.currentTab = 0;
        this.huashuList = [];
        this.scroll0 = "";
        this.isend0 = false;
        this.doSearch(val);
      },
      clearHis() {
        this.clearHiswords();
      }
    },
    onPullDownRefresh() {
      uni.stopPullDownRefresh();
      this.showRecommend = 1 - this.showRecommend;
      if (this.showRecommend == 0) {
        this.inputValue = this.inputValue
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
        if (this.currentTab == 0 && this.inputValue != this.oldhuashu) {
          this.huashuList = [];
          this.scroll0 = "";
          this.isend0 = false;
          this.searchLiaomeihuashu();
        }
        if (this.currentTab == 1 && this.inputValue != this.oldbiaoqing) {
          this.biaoqingList = [];
          this.scroll1 = "";
          this.isend1 = false;
          this.searchBiaoqing();
        }
        if (this.currentTab == 2 && this.inputValue != this.oldbaike) {
          this.baikeList = [];
          this.scroll2 = "";
          this.isend2 = false;
          this.searchBaike();
        }
      }
      if (this.showRecommend) this.getHiswordList();
    },
    onReachBottom() {
      if (this.currentTab == 0) {
        if (!this.isend0) this.searchLiaomeihuashu();
      }
      if (this.currentTab == 1) {
        if (!this.isend1) this.searchBiaoqing();
      }
      if (this.currentTab == 2) {
        if (!this.isend2) this.searchBaike();
      }
    },
    onShow() {
      let that = this;
      that.showRecommend = 0;
      if (that.ifonShow == false) {
        that.ifonShow = true;
        return false;
      }
      uni.getClipboardData({
        success: function(res) {
          var copyvalue = res.data.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
          if (that.copyinput != copyvalue) {
            that.copyinput = copyvalue;
            that.inputValue = copyvalue;
          }
          if (
            (that.currentTab == 0 && that.oldhuashu == that.inputValue) ||
            (that.currentTab == 1 && that.oldbiaoqing == that.inputValue) ||
            (that.currentTab == 2 && that.oldbaike == that.inputValue)
          )
            return false;
          that.huashuList = [];
          that.biaoqingList = [];
          that.baikeList = [];
          that.isend0 = false;
          that.isend1 = false;
          that.isend2 = false;
          that.scroll0 = "";
          that.scroll1 = "";
          that.scroll2 = "";
          that.doSearch(that.inputValue);
        }
      });
    },
    onLoad() {
      this.getRecommend();
    },
    onShareAppMessage() {
      return {
        title: "恋爱联盟",
        path: "/pages/home"
      };
    }
  }
</script>

<style lang="less">
  .searchpage {
    background: #ffffff;
  }
  .search {
    width: 100%;
    top: 0rpx;
    position: fixed;
    z-index: 99;
    background: #ffffff;
    .serch_content {
      margin-left: 5%;
      margin-right: 5%;
      display: flex;
      align-items: center;
      border-radius: 300rpx;
      color: #333;
      background: rgba(0, 0, 0, 0.1);
      padding: 6rpx 20rpx;
      height: 58rpx;
      .search_input {
        line-height: 58rpx;
        font-size: 28rpx;
        width: 100%;
      }
      .cha {
        width: 58rpx;
        height: 58rpx;
        .chaclearn {
          margin-top: 10rpx;
        }
      }
    }
    .tab {
      margin-top: 6rpx;
      height: 66rpx;
    }
  }
  .showdata {
    padding-top: 136rpx;
    background: rgba(0, 0, 0, 0.1);
    .textend {
      padding-top: 30rpx;
      padding-bottom: 30rpx;
      text-align: center;
    }
  }
  .recommend {
    padding-top: 88rpx;
    .bigkuai {
      border-radius: 20rpx;
      margin-left: 20rpx;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      padding-top: 20rpx;
      background: rgba(0, 0, 0, 0.1);
    }
    .kuai {
      background: rgba(0, 0, 0, 0);
      width: 100%;
      border-radius: 20rpx;
      display: inline-block;
      .biaoti {
        font-weight: bolder;
        padding-left: 20rpx;
        text-align: left;
        color: #999999;
        font-size: 30rpx;
      }
      .weui-btn {
        margin-left: 2%;
        margin-top: 6rpx;
        margin-bottom: 0rpx;
        padding: 0rpx;
        text-align: center;
        width: 22.5%;
        height: 62rpx;
        background: #ffffff;
        font-size: 28rpx;
      }
    }
    .hiskuai {
      width: 100%;
      border-radius: 20rpx;
      display: inline;
      .biaoti {
        font-weight: bolder;
        padding-left: 20rpx;
        text-align: left;
        color: #999999;
        font-size: 30rpx;
      }
      .weui-btn {
        margin-left: 2%;
        margin-top: 6rpx;
        margin-bottom: 0rpx;
        padding: 0rpx;
        text-align: center;
        width: 22.5%;
        height: 62rpx;
        background: #ffffff;
        font-size: 28rpx;
      }
    }
    .if_his {
      flex-wrap: nowrap;
      margin-left: 20rpx;
      text-align: left;
      font-size: 28rpx;
      color: #999999;
    }
    .btn_box {
      width: 228rpx;
      align-items: center;
      margin-top: 20rpx;
      margin-bottom: 20rpx;
      font-size: 28rpx;
      color: #999999;
    }
    .minkuai {
      height: 1rpx;
    }
  }
</style>
