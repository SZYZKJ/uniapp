<template>
  <view class="info" @touchstart='touchStart' @touchend="touchEnd">
    <view class="header">
      <view class="headcontent">
        <view class="wenhouyu">{{wenhouyu}}</view>
        <view class="userinfo-avatar">
          <image class="avatarUrl" :src="userinfo.avatarUrl" />
        </view>
        <view>
          <view class="headercontent0">{{userinfo.nickName}}</view>
          <image class="headercontent3" v-if="vipdengji" src="https://www.lianaizhuli.com/geren/VIP.png" />
          <image class="headercontent3" v-else src="https://www.lianaizhuli.com/geren/feiVIP.png" />
          <view class="headercontent1" @tap="totequan">{{huiyuan[vipdengji]}}
            <view class="headercontent2" @tap="tojifen">积分 <text class="jifen">{{jifen}}</text></view>
          </view>
        </view>
        <view class="imagekuang">
          <image class="banimage" @tap="tovip" src="https://www.lianaizhuli.com/geren/huiyuanchongzhi.png" />
          <image class="banimage" @tap="toshoucang" src="https://www.lianaizhuli.com/geren/wodeshoucang.png" />
        </view>
      </view>
    </view>
    <view class="info_block">
      <navigator class="item" url="/pages/vip">
        <view class="item_content">
          <image class="item_img" src="../static/shengjihuiyuan.png" />
          <view class="text">
            <view class="text1">升级会员</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
      <navigator class="item" url="/pages/fenxiao">
        <view class="item_content">
          <image class="item_img" src="../static/fenxiao.png" />
          <view class="text">
            <view class="text1">推广中心</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
      <navigator class="item" url="/pages/tequan">
        <view class="item_content">
          <image class="item_img" src="../static/wodetequan.png" />
          <view class="text">
            <view class="text1">我的特权</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
      <navigator class="item" url="/pages/jifen">
        <view class="item_content">
          <image class="item_img" src="../static/wodejifen.png" />
          <view class="text">
            <view class="text1">我的积分</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
      <button class="item" open-type="contact" session-from="weapp" plain="false">
                                      <view class="item_content">
                                        <image class="item_img" src="../static/zaixiankefu.png"/>
                                        <view class="text">
                                          <view class="text1">在线客服</view>
                                          <image class="text2" src="../static/jiantou.png" />
                                        </view>
                                      </view>
                                    </button>
      <navigator class="item" url="/pages/weixin">
        <view class="item_content">
          <image class="item_img" src="../static/daoshiweixin.png" />
          <view class="text">
            <view class="text1">导师微信</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
      <navigator class="item" url="/pages/dingdan">
        <view class="item_content">
          <image class="item_img" src="../static/quanbudingdan.png" />
          <view class="text">
            <view class="text1">全部订单</view>
            <image class="text2" src="../static/jiantou.png" />
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  export default {
    data() {
      return {
        userinfo: uni.getStorageSync('userinfo'),
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        wenhouyu: "HI，欢迎您~",
        avatarUrl: "",
        nickName: "",
        huiyuan: ['非会员', '月会员(1个月)', '年会员(1年)', '私教一个月(送年会员)', '私教3个月(送年会员)', '私教一年(送终身会员)', '联盟会员(含私教终身)'],
        vipdengji: 0,
        jifen: 0,
      }
    },
    methods: {
      async getJifen() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: '/pages/shouquan'
          })
          return false;
        }
        const json = await api.getJifen({
          unionid: unionid,
          iszhudong: 0,
        })
        this.vipdengji = json.data.vipdengji;
        this.jifen = json.data.jifen;
        this.wenhouyu = json.data.wenhouyu;
      },
      tovip() {
        uni.navigateTo({
          url: '/pages/vip'
        })
      },
      toshoucang() {
        uni.navigateTo({
          url: '/pages/shoucang'
        })
      },
      totequan() {
        uni.navigateTo({
          url: '/pages/tequan'
        })
      },
      tojifen() {
        uni.navigateTo({
          url: '/pages/jifen'
        })
      },
      changeTab() {
        if (this.endX - this.startX > 30 && Math.abs(this.endY - this.startY) * 1.5 < Math.abs(this.endX - this.startX)) {
          uni.switchTab({
            url: "./searchpage"
          })
        } else if (this.endX - this.startX < -30 && Math.abs(this.endY - this.startY) * 1.5 < Math.abs(this.endX - this.startX)) {
          uni.switchTab({
            url: "./home"
          })
        }
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
    },
    onShow() {
      this.getJifen();
    },
    onLoad() {
      let that = this;
      let userInfo = uni.getStorageSync('userInfo');
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
    },
    onShareAppMessage() {
      return {
        title: '恋爱联盟',
        path: '/pages/home',
      };
    }
  }
</script>

<style lang="less">
  .header {
    background: #ffffff;
    background: url(https://www.lianaizhuli.com/geren/gerenbeijing.png);
    background-size: 750rpx 240rpx;
    height: 240rpx;
    .headcontent {
      position: fixed;
      height: 300rpx;
      margin-left: 5%;
      width: 90%;
      margin-top: 80rpx;
      padding-top: 20rpx;
      background: #ffffff;
      border-radius: 20rpx;
      border: 1rpx solid #efefef;
      .imagekuang {
        margin-top: 55rpx;
        display: flex;
        justify-content: space-around;
        width: 100%;
        .banimage {
          width: 200rpx;
          height: 100rpx;
        }
      }
      .wenhouyu {
        position: fixed;
        top: 0rpx;
        left: 60rpx;
        color: #ffffff;
      }
    }
    .headercontent0 {
      width: 100%;
      margin-left: 200rpx;
      color: #000000;
    }
    .headercontent3 {
      margin-left: 20rpx;
      width: 45rpx;
      height: 35rpx;
    }
    .headercontent1 {
      margin-left: 200rpx;
      margin-top: 20rpx;
      font-size: 26rpx;
      display: flex;
      color: #ff7e00;
      .headercontent2 {
        margin-left: 50rpx;
        color: #000000;
        .jifen {
          color: #ff7e00;
        }
      }
    }
  }
  .userinfo-avatar {
    position: fixed;
    top: 50rpx;
    left: 60rpx;
    overflow: hidden;
    width: 150rpx;
    height: 150rpx;
    border-radius: 10rpx;
  }
  .tequanming {
    margin-left: 50rpx;
    color: #000000;
  }
  .info_block {
    background: #ffffff;
    padding-top: 180rpx;
    padding-bottom: 180rpx;
    .item {
      height: 100rpx;
      line-height: 100rpx;
      border-color: #ffffff;
      background: #ffffff;
      padding-left: 0rpx;
      border-bottom: 1px solid #efefef;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000000;
      margin-left: 3%;
      width: 94%;
      border-radius: 0rpx;
    }
    .item_content {
      display: flex;
      align-items: center;
    }
    .text {
      width: 640rpx;
      display: flex;
      justify-content: space-between;
      margin-left: 25rpx;
      .text1 {
        font-size: 26rpx;
        color: #000;
      }
      .text2 {
        margin-top: 40rpx;
        width: 20rpx;
        height: 20rpx;
      }
    }
    .item_img {
      width: 30rpx;
      height: 28rpx;
    }
    .tip {
      color: #ffffff;
      font-size: 28rpx;
      margin-top: 20rpx;
      margin-left: 60rpx;
    }
  }
</style>
