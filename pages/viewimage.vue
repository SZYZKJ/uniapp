<template>
  <view class="viewimage">
    <text selectable='true' class="title">{{title}}</text>
    <image class="image" :src="url" mode="widthFix" />
  </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
  export default {
    data() {
      return {
        title: "",
        url: "",
      }
    },
    onLoad(options) {
      this.title = options.title;
      uni.setNavigationBarTitle({
        title: options.title,
      })
      this.url = options.url;
    },
    onShareAppMessage() {
      return {
        title: '恋爱联盟',
        path: '/pages/viewimage?title=' + this.title + '&url=' + this.url,
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
  .viewimage {
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
    .image {
      width: 100%;
    }
  }
</style>
