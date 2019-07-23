<template>
  <view class="xingxiangjianshelist">
    <view v-for="(item,index) in xingxiangjiansheList" :key="index">
      <view class="wenzhang" @tap="goTohtml(item,index)">
        <view class="kuai">
          <view class="textkuang">
            <text selectable='true' class="title">{{item.title}}</text>
            <view class="laiyuan">{{item.count}}次阅读</view>
          </view>
          <image class="image" :src="item.image" mode="scaleToFill" lazy-load="false" />
        </view>
      </view>
    </view>
    <view class="textend" v-if="!isend">加载中......</view>
    <view class="textend" v-if="isend">恋爱脱单上恋爱联盟</view>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  export default {
    data() {
      return {
        xingxiangjiansheList: [],
        isend: 0,
        scroll: '',
      }
    },
    methods: {
      async getXingxiangjiansheList(e) {
        if (this.isend) return;
        let unionid = uni.getStorageSync('unionid') || '';
        let that = this;
        const json = await api.getXingxiangjiansheList({
          unionid: unionid,
          scroll: this.scroll,
        });
        if (json.data.length < 10) this.isend = true;
        if (e) this.xingxiangjiansheList = json.data.concat(this.xingxiangjiansheList);
        else this.xingxiangjiansheList = this.xingxiangjiansheList.concat(json.data);
        this.scroll = json.scroll;
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      goTohtml(item, e) {
        uni.navigateTo({
          url: "./xingxiangjianshe?id=" + item.id,
          success: res => {
            setTimeout(() => {
              this.xingxiangjiansheList[e].count += 1;
            }, 1000);
          },
        })
      },
    },
    onPullDownRefresh() {
      uni.stopPullDownRefresh();
      this.getXingxiangjiansheList(1);
    },
    onReachBottom() {
      this.getXingxiangjiansheList(0);
    },
    onLoad() {
      this.getXingxiangjiansheList(0);
    },
    onShareAppMessage() {
      return {
        title: "恋爱联盟",
        path: "/pages/xingxiangjianshelist"
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
  .xingxiangjianshelist {
    background: #ffffff;
    .wenzhang {
      background: #ffffff;
      width: 92%;
      margin-left: 4%;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      border-bottom: 1px solid #efefef;
      .kuai {
        padding-left: 16rpx;
        padding-right: 16rpx;
        display: flex;
        justify-content: space-between;
        .textkuang {
          width: 80%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            color: #333;
            font-size: 28rpx;
            width: 420rpx;
          }
          .laiyuan {
            font-size: 20rpx;
          }
        }
        .image {
          margin-left: 16rpx;
          height: 138rpx;
          width: 250rpx;
        }
      }
    }
    .textend {
      padding-top: 30rpx;
      padding-bottom: 30rpx;
      text-align: center;
    }
  }
</style>