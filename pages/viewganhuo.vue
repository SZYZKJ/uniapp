<template>
  <view class="viewganhuo">
    <text selectable='true' class="title">{{title}}</text>
    <!-- <txv-video vid="j0797kjycv0" playerid="txv0"></txv-video> -->
    <video id="lianmeng" class="video" :src="url" :duration="duration" :direction="direction" autoplay="true"></video>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  // const TxvContext = requirePlugin("tencentvideo");
  // let txvContext = TxvContext.getTxvContext('txv1');
  export default {
    data() {
      return {
        title: "",
        url: "",
        duration: "",
        direction: 90,
      }
    },
    methods: {
      async setJilu() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: '/pages/shouquan'
          })
          return false;
        }
        const json = await api.setJilu({
          unionid: unionid,
          jilutype: 'ganhuo',
          jilucontent: this.url,
        });
      },
    },
    onHide() {
      var videoContextPrev = uni.createVideoContext('lianmeng');
      videoContextPrev.pause();
    },
    onLoad(options) {
      this.title = options.title;
      this.url = options.url;
      this.duration = options.duration;
      this.direction = options.direction;
      this.setJilu();
    },
    onShareAppMessage() {
      return {
        title: '恋爱联盟',
        path: '/pages/viewganhuo?title=' + this.title + '&url=' + this.url + '&duration=' + this.duration + '&direction=' + this.direction,
      };
    },
    onUnload() {
      var pages = getCurrentPages();
      if (pages.length == 1) {
        uni.switchTab({
          url: "/pages/home"
        })
      }
    }
  }
</script>

<style lang="less">
  .viewganhuo {
    background: #FFFFFF;
    .title {
      padding-left: 20rpx;
      padding-right: 20rpx;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      font-weight: bolder;
      font-size: 38rpx;
      color: #000000;
    }
    .video {
      width: 100%;
    }
  }
</style>
