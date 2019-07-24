<template>
  <view class="swiper-tab">
    <view v-for="(item,index) in tabList" :key="index" v-bind:class="currentTab==index ? 'swiper-tab-list active' : 'swiper-tab-list'" @tap="swichNav(index)">
      {{item}}
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      currentTab: 0,
      tabList: []
    },
    methods: {
      changeTab(e) {
        this.currentTab = e;
      },
      swichNav(e) {
        if (this.currentTab == e) {
          return false;
        } else {
          this.currentTab = e;
        }
        this.$emit("getCurrentTab", this.currentTab)
      },
    }
  }
</script>

<style lang="less">
  .swiper-tab {
    margin-top: 0rpx;
    margin-bottom: 0rpx;
    padding: 0rpx;
    font-weight: bolder;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 66rpx;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .swiper-tab-list {
    font-size: 38rpx;
    color: #777777;
  }
  .active {
    color: #ff4500;
    border-bottom: 5rpx solid #ff4500;
  }
</style>
