<template>
  <view class="adding">
    <view>功能正在完善</view>
    <view>感谢关注与支持</view>
    <view>敬请期待</view>
    <view class="futrue">恋爱脱单上恋爱联盟</view>
  </view>
</template>

<script>
  export default {
    onLoad() {},
    onShareAppMessage() {
      return {
        title: "恋爱联盟",
        path: "/pages/home"
      };
    }
  }
</script>

<style lang="less">
  .adding {
    background: #fff;
    padding-top: 300rpx;
    text-align: center;
    font-size: 30rpx;
    color: #000000;
  }
  .futrue {
    margin-top: 300rpx;
  }
</style>
