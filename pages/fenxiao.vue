<template>
  <view class="fenxiao">
    <image class="banner" mode="widthFix" :src="fenxiao.banner" />
    <view scroll-x="true" class="tab-h" scroll-left="scrollLeft">
      <view v-for="(item,index) in tablist" :key="index" v-bind:class="currentTab==index?'tab-itemactive':'tab-item'" @tap="swichNav(index)">{{item}}</view>
    </view>
    <view class="shouhang" v-if="currentTab==0" @touchstart='touchStart' @touchend="touchEnd">
      <view class="userinfo-avatar">
        <image class="avatarUrl" :src="userinfo.avatarUrl" />
      </view>
      <view class="headercontent0">{{userinfo.nickName}}</view>
      <view class="jibie">
        {{fenxiao.jibie}}
      </view>
    </view>
    <view class="shouhang" v-if="currentTab==0" @touchstart='touchStart' @touchend="touchEnd">
      <view class="jibie">
        <text>直接推广收益率</text>{{fenxiao.yijibili}}
      </view>
      <view class="jibie">
        <text>间接推广收益率</text>{{fenxiao.erjibili}}
      </view>
    </view>
    <view class="shuju" v-if="currentTab==0" @touchstart='touchStart' @touchend="touchEnd">
      <view class="minkuang" @tap="dianjizhanshi(0)">
        <text>总推广收益（元）</text>
        <view class="shuzhi">{{fenxiao.zongshouyi}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(1)">
        <text class="kedianji">总推广订单(笔)</text>
        <view class="shuzhi">{{fenxiao.dingdan.length}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(2)">
        <text>今天推广收益（元）</text>
        <view class="shuzhi">{{fenxiao.jintianshouyi}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(3)">
        <text>今天推广订单（笔）</text>
        <view class="shuzhi">{{fenxiao.jintiandingdan}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(4)">
        <text>可提现（元）</text>
        <view class="shuzhi">{{fenxiao.ketixian}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(5)">
        <text>已提现（元）</text>
        <view class="shuzhi">{{fenxiao.yitixian}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(6)">
        <text class="kedianji">下级推广员（人）</text>
        <view class="shuzhi">{{fenxiao.yijiyonghu}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(7)">
        <text class="kedianji">客户总数（人）</text>
        <view class="shuzhi">{{fenxiao.yijiyonghu+fenxiao.erjiyonghu}}</view>
      </view>
      <view class="minkuang" @tap="dianjizhanshi(8)">
        <text class="kedianji">立即提现</text></view>
      <view class="minkuang" @tap="dianjizhanshi(9)">
        <text class="kedianji">提现记录</text>
        <view class="shuzhi">{{fenxiao.tixianjilu.length}}</view>
      </view>
    </view>
    <view class="xiangqing" v-if="currentTab==0" @touchstart='touchStart' @touchend="touchEnd">
      <view v-if="currentTab0==1" v-for="(item,index) in dingdan" :key="index">
        <view class="dingdankuang">
          <view class="dingdanminkuang">
            <view><text class="guding">用户名称</text><text class="xiangqing">{{item.yonghuming}}</text></view>
            <view><text class="guding">商品名称</text><text class="xiangqing">{{item.shangpinming}}</text></view>
            <view><text class="guding">支付时间</text><text class="xiangqing">{{item.time}}</text></view>
            <view><text class="guding">商品价格</text><text class="xiangqing">{{item.total_fee}}</text></view>
            <view><text class="guding">你的收益</text><text class="xiangqing">{{item.shouyi}}</text></view>
          </view>
        </view>
      </view>
      <view v-if="currentTab0==6" v-for="(item,index) in yijiyonghu" :key="index">
        <view class="dingdankuang">
          <view class="dingdanminkuang">
            <view><text class="guding">用户名称</text><text class="xiangqing">{{item.nickName}}</text></view>
            <view><text class="guding">添加时间</text><text class="xiangqing">{{item.time}}</text></view>
          </view>
        </view>
      </view>
      <view v-if="currentTab0==7" v-for="(item,index) in fenxiaoyonghu" :key="index">
        <view class="dingdankuang">
          <view class="dingdanminkuang">
            <view><text class="guding">用户名称</text><text class="xiangqing">{{item.nickName}}</text></view>
            <view><text class="guding">添加时间</text><text class="xiangqing">{{item.time}}</text></view>
          </view>
        </view>
      </view>
      <view v-if="currentTab0==9" v-for="(item,index) in tixianjilu" :key="index">
        <view class="dingdankuang">
          <view class="dingdanminkuang">
            <view><text class="guding">提现金额</text><text class="xiangqing">{{item.tixianjine}}元</text></view>
            <view><text class="guding">提现时间</text><text class="xiangqing">{{item.time}}</text></view>
          </view>
        </view>
      </view>
      <view v-if="currentTab0==8">
        <view class="tixian">提现提醒：
          <view class="jinshi" @tap="fuzhilianjie">请确保你关注了《恋爱联盟》公众号，并进入过菜单栏左边《加入会员》，点击进入会员或者课程并授权，或直接进入链接http://www.lianaizhuli.com/kechenglist(点击可复制链接),否则无法提现成功。</view>{{fenxiao.tixiantixing}}</view>
        <view class="tixianjine"><text class="tixianclour">提现金额：</text><input class="jinekuang" value="tixianjine" bindinput="bindinput" auto-focus/><text class="tixianclour">元</text></view>
        <button class="dianjitixian" type="primary" @tap="tixian"> 提现 </button>
      </view>
    </view>
    <image class="banner" v-if="currentTab==1" mode="widthFix" :src="fenxiao.xiangqing" @touchstart='touchStart' @touchend="touchEnd" />
    <view v-if="currentTab==2" @touchstart='touchStart' @touchend="touchEnd">
      <view class="wenankuag">
        朋友圈文案，点击可复制
        <view class="wenan" @tap="copycontent">
          {{fenxiao.wenan}}
        </view>
      </view>
      <view class="wenankuag">
        点击海报预览并保存到相册，然后发朋友圈或朋友，即可躺着赚钱🎉🎉🎉
      </view>
      <view class="haibaokuang">
        <view v-for="(item,index) in haibao" :key="index">
          <image class="haibao" mode="scaleToFill" :src="item" @tap="imgYu(item)" />
          <!-- <image class="haibao" mode="scaleToFill" src="{{'data:image/png;base64,'+item}}" @tap="imgYu({{index}})" /> -->
        </view>
      </view>
      <view v-if="loading" class="loadingkuang">
        <view>正在生成海报...</view>
        <image class="loading" src="../static/loadding.gif" />
      </view>
    </view>
  </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
  export default {
    data() {
      return {
        userinfo: uni.getStorageSync('userinfo'),
        fenxiao: {},
        haibao: [],
        currentTab: 0,
        nowtime: 0,
        currentTab0: 0,
        dingdan: [],
        yijiyonghu: [],
        fenxiaoyonghu: [],
        tixianjilu: [],
        tixianjine: '1.00',
        loading: 0,
        tablist: ['数据', '规则', '海报'],
      }
    },
    methods: {
      async getFenxiaodingdan() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getFenxiaodingdan({
          unionid: unionid,
        });
        this.dingdan = json.data;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      async tixian() {
        var timestamp = Date.parse(new Date());
        if (timestamp - this.nowtime < 10000) {
          uni.showToast({
            icon: 'none',
            title: "点击过于频繁",
            duration: 2000
          });
          return false;
        } else {
          this.nowtime = timestamp;
        }
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.tiXian({
          unionid: unionid,
          tixianjine: this.tixianjine,
        });
        if (json.MSG == 'YES') {
          uni.showToast({
            title: "提现" + json.data + '元成功',
            duration: 2000
          });
          this.onShow();
        } else if (json.MSG == 'NO') {
          uni.showToast({
            icon: 'none',
            title: "输入不合法",
            duration: 2000
          });
        } else if (json.MSG == 'NOGZHID') {
          tip.confirm('请确保你关注了《恋爱联盟》公众号，若还是无法体现，请到《恋爱联盟》公众号回复任意信息后再重新提现，否则无法提现成功。');
        } else if (json.MSG == 'SENDNUM_LIMIT') {
          uni.showToast({
            icon: 'none',
            title: "提现次数限制",
            duration: 2000
          });
        } else if (json.MSG == 'RCVDAMOUNT_LIMIT') {
          uni.showToast({
            icon: 'none',
            title: "今天额度限制",
            duration: 2000
          });
        } else if (json.MSG == 'ERROR') {
          uni.showToast({
            icon: 'none',
            title: "请稍后再试",
            duration: 2000
          });
        } else if (json.MSG == 'FREQ_LIMIT') {
          uni.showToast({
            icon: 'none',
            title: "点击过于频繁",
            duration: 2000
          });
        } else if (json.MSG == 'FAIL') {
          uni.showToast({
            icon: 'none',
            title: "提现失败",
            duration: 2000
          });
        }
      },
      async getYijiyonghu() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getYijiyonghu({
          unionid: unionid,
        });
        this.yijiyonghu = json.data;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      async getFenxiaoyonghu() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getFenxiaoyonghu({
          unionid: unionid,
        });
        this.fenxiaoyonghu = json.data;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      async getTixianjilu() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getTixianjilu({
          unionid: unionid,
        });
        this.tixianjilu = json.data;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      async getwodefenxiao() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getFenxiao({
          unionid: unionid,
        });
        this.fenxiao = json.data;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        let that = this;
        var haibaoming = that.fenxiao.haibaoming || '';
        this.haibao = ['./haibao/' + haibaoming + '0.png', './haibao/' + haibaoming + '1.png', './haibao/' + haibaoming + '2.png', ]
        let flag = 1;
        for (let i = 0; i < 3; ++i) {
          if (flag == 1) {
            await uni.getFileInfo({
              filePath: './haibao/' + haibaoming + i.toString() + '.png',
              fail(res) {
                flag = 0;
              },
              complete() {
                if (i == 2 && flag == 0) {
                  that.gethaibao();
                }
              }
            })
          }
        }
      },
      async gethaibao() {
        let unionid = uni.getStorageSync('unionid') || '';
        this.haibao = [];
        this.loading = 1;
        let that = this;
        for (let ii = 0; ii < 3; ++ii) {
          const json = await api.getHaibaobase64({
            unionid: unionid,
            imgname: ii.toString(),
          });
          var haibaoming = this.fenxiao.haibaoming || '';
          var filepath = './haibao/' + haibaoming + ii.toString() + '.png';
          OutputStream = new FileOutputStream(filepath);
          OutputStream.write(json.data);
          OutputStream.flush();
          OutputStream.close();
          uni.saveFile({
            tempFilePath: filepath,
            success() {
              that.haibao.push(filepath);
              if (ii == 2) {
                that.loading = 0;
              }
            },
          })
        }
        this.loading = 0;
        if (unionid == '') {
          unionid = '';
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      changeTab() {
        if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          if (this.currentTab > 0) {
            this.currentTab -= 1;
          }
        } else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          if (this.currentTab < 2) {
            this.currentTab += 1;
          }
        }
      },
      fuzhilianjie() {
        uni.setClipboardData({
          data: "http://www.lianaizhuli.com/kechenglist",
          success: function() {
            uni.showToast({
              title: "复制成功",
              duration: 500
            });
          }
        });
      },
      bindinput(obj) {
        this.tixianjine = obj.detail.value;
      },
      dianjizhanshi(e) {
        if (e != this.currentTab0) {
          this.currentTab0 = e;
          if (this.currentTab0 == 1) {
            this.getFenxiaodingdan();
          }
          if (this.currentTab0 == 6) {
            this.getYijiyonghu();
          }
          if (this.currentTab0 == 7) {
            this.getFenxiaoyonghu();
          }
          if (this.currentTab0 == 9) {
            this.getTixianjilu();
          }
        }
      },
      imgYu(item) {
        uni.previewImage({
          current: item,
          urls: this.haibao,
        });
      },
      copycontent() {
        let that = this;
        uni.setClipboardData({
          data: that.fenxiao.wenan,
          success: function() {
            uni.showToast({
              title: "复制成功",
              duration: 500
            });
          }
        });
      },
      touchStart(e) {
        this.startX = e.mp.changedTouches[0].pageX;
        this.startY = e.mp.changedTouches[0].pageY;
      },
      touchEnd(e) {
        this.endX = e.mp.changedTouches[0].pageX;
        this.endY = e.mp.changedTouches[0].pageY;
        this.changeTab();
      },
      swichNav(e) {
        var cur = e;
        if (this.currentTab == cur) {
          return false;
        } else {
          this.currentTab = cur;
        }
      },
    },
    async onShow() {
      this.getwodefenxiao();
    },
    onShareAppMessage() {
      return {
        title: "恋爱联盟",
        path: "/pages/fenxiao"
      };
    },
    onUnload() {
      var pages = getCurrentPages();
      if (pages.length == 1) {
        uni.switchTab({
          url: "/pages/home"
        });
      }
    }
  }
</script>

<style lang="less">
  .fenxiao {
    background: #ffffff;
    color: #000;
    word-break: break-all;
    padding-bottom: 80rpx;
  }
  .tixian {
    margin: 20rpx;
    color: #333;
    .jinshi {
      color: #FF0000;
    }
  }
  .tixianjine {
    width: 60%;
    margin-left: 20%;
    text-align: center;
    display: flex;
    margin-bottom: 20rpx;
    .tixianclour {
      color: #333;
    }
    .jinekuang {
      width: 250rpx;
    }
  }
  .dianjitixian {
    width: 60%;
    margin-left: 20%;
    margin-bottom: 200rpx;
  }
  .dingdankuang {
    margin-top: 20rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    border-radius: 20rpx;
    background: #efefef;
    .dingdanminkuang {
      padding-top: 20rpx;
      margin-left: 20rpx;
      margin-right: 20rpx;
      padding-bottom: 20rpx;
      .guding {
        color: #000000;
      }
      .xiangqing {
        padding-left: 50rpx;
      }
    }
  }
  .loadingkuang {
    text-align: center;
  }
  .loading {
    width: 50rpx;
    height: 50rpx;
  }
  .wenankuag {
    margin-left: 30rpx;
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    margin-right: 30rpx;
    color: #333;
    .wenan {
      margin-top: 30rpx;
      color: #ff7e00;
    }
  }
  .banner {
    width: 100%;
  }
  .shouhang {
    margin-top: 20rpx;
    margin-left: 20rpx;
    display: flex;
    line-height: 60rpx;
  }
  .userinfo-avatar {
    margin-right: 30rpx;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    overflow: hidden;
  }
  .headercontent0 {
    color: #333;
    font-size: 26rpx;
    margin-right: 30rpx;
  }
  .jibie {
    margin-right: 30rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;
    font-size: 26rpx;
    margin-top: 10rpx;
    height: 40rpx;
    line-height: 40rpx;
    border: 1px solid #ff7e00;
    border-radius: 20rpx;
    color: #ff7e00;
  }
  .shuju {
    margin-top: 20rpx;
    width: 96%;
    margin-left: 2%;
    background: #d8b980;
    border-radius: 10rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    display: flex;
    flex-wrap: wrap;
    .minkuang {
      font-size: 24rpx;
      width: 35%;
      color: #fff;
      padding-left: 80rpx;
      height: 120rpx;
      .shuzhi {
        padding-top: 20rpx;
      }
      .kedianji {
        background: #09bb07;
        border-radius: 10rpx;
      }
    }
  }
  .haibaokuang {
    width: 100%;
    display: flex;
    .haibao {
      margin: 23rpx;
      border: 1rpx solid #ff7e00;
      border-radius: 20rpx;
      width: 200rpx;
      height: 200rpx;
    }
  }
  .tab-h {
    display: flex;
    justify-content: space-around;
    height: 80rpx;
    font-size: 28px;
    border-bottom: 2rpx solid #dfdfdf;
    .tab-item {
      color: #000;
      margin-left: 20rpx;
      margin-right: 20rpx;
      display: inline;
    }
    .tab-itemactive {
      color: #ff7e00;
      margin-left: 15rpx;
      margin-right: 15rpx;
      display: inline;
      padding-bottom: 6rpx;
      border-bottom: 6rpx solid #ff7e00;
    }
  }
  .libiao {
    margin-bottom: 50rpx;
  }
</style>
