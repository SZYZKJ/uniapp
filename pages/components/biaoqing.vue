<template>
  <view class="biaoqingkuai">
    <view class="biaoqingList" v-for="(item,index) in biaoqingList" :key="index">
      <view class="box">
        <image class="image_box" @tap="imgYu(item)" :src="item" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      biaoqingList: [],
    },
    methods: {
      imgYu(item) {
        this.$emit("nochange");
        this.$emit("jilu", "biaoqing", item);
        uni.previewImage({
          current: item,
          urls: this.biaoqingList
        });
      }
    },
    onLoad() {}
  }
</script>

<style lang="less">
  .biaoqingkuai {
    padding-top: 10rpx;
  }
  .biaoqingList {
    display: inline-block;
    .box {
      margin-top: 20rpx;
      margin-left: 20rpx;
      .image_box {
        border-radius: 20rpx;
        border: 1rpx solid rgba(255, 255, 255, 1);
        width: 220rpx;
        height: 220rpx;
      }
    }
  }
</style>
