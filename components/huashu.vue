<template>
  <view class="kuai">
    <view class="huashuList" v-for="(item,index) in huashuList" :key="index">
      <view class="duihua">
        <view v-for="(huashu,minindex) in item.chat_content" :key="minindex">
          <view v-if="huashu.ans_sex==2" class="nv">
            <image class="item_img" src="../static/nv.png" />
            <view class="textkuang" @tap="copycontent(huashu.content)">
              <text class="text" selectable="true">{{huashu.content}}</text>
            </view>
          </view>
          <view v-else class="nan">
            <image class="item_img" src="../static/nan.png" />
            <view class="textkuang" @tap="copycontent(huashu.content)">
              <text class="text" selectable="true">{{huashu.content}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      huashuList: [],
    },
    methods: {
      copycontent(GG) {
        uni.setClipboardData({
          data: GG,
          success: function() {
            uni.showToast({
              title: "复制成功",
              duration: 500
            });
          }
        });
        this.$emit("jilu", "huashu", GG);
      }
    },
    onLoad() {}
  }
</script>

<style lang="less">
  .kuai {}
  .huashuList {
    .duihua {
      margin-top: 20rpx;
      border-radius: 20rpx;
      margin-left: 20rpx;
      margin-right: 20rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      background: #ffffff;
    }
    .nv {
      line-height: 25px;
      display: flex;
      left: 0;
    }
    .nan {
      line-height: 25px;
      display: flex;
      left: 0;
    }
    .item_img {
      padding-top: 10rpx;
      padding-right: 10rpx;
      width: 35rpx;
      height: 35rpx;
    }
    .textkuang {
      width: 100%;
    }
    .text {
      font-size: 28rpx;
      color: #333;
    }
    .vip {
      margin-top: 20rpx;
      text-align: center;
      .item_img {
        padding: 0rpx;
        border-radius: 20rpx;
        width: 368rpx;
        height: 248rpx;
      }
    }
  }
</style>
