<template>
  <view class="qingganbaike">
    <view class="tubiao">
      <view class="box" v-for="(item,index) in wenda" :key="index">
        <view @tap="goTowendalist(item)">
          <image class="image" mode="scaleToFill" :src="item.image" />
          <view class="title">{{item.title}}</view>
        </view>
      </view>
    </view>
    <view class="kuai">
      <view class="hang">
        <image class="image" mode="aspectFit" :src="rumenjieduan" />
      </view>
      <view class="neikuai">
        <view class="bigbox">
          <view class="box" v-for="(item,index) in rumen" :key="index">
            <view @tap="gotobaike(item)">
              <view class="image-group">
                <image class="image" mode="scaleToFill" :src="item.image" />
                <view class="image-tip">{{item.category_name}}</view>
              </view>
              <view class="text">
                {{item.title}}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="kuai">
      <view class="hang">
        <image class="image" mode="aspectFit" :src="jinjiejieduan" />
      </view>
      <view class="neikuai">
        <view class="bigbox">
          <view class="box" v-for="(item,index) in jinjie" :key="index">
            <view @tap="gotobaike(item)">
              <view class="image-group">
                <image class="image" mode="scaleToFill" :src="item.image" />
                <view class="image-tip">{{item.category_name}}</view>
              </view>
              <view class="text">
                {{item.title}}
              </view>
            </view>
          </view>
        </view>
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
        wenda: [],
        rumen: [],
        jinjie: [],
        rumenjieduan: '',
        jinjiejieduan: '',
      }
    },
    methods: {
      async getQingganbaike() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getQingganbaike({
          unionid: unionid,
        });
        this.wenda = json.wenda;
        this.rumen = json.rumen;
        this.jinjie = json.jinjie;
        this.rumenjieduan = json.rumenjieduan;
        this.jinjiejieduan = json.jinjiejieduan;
        if (unionid == '') {
          uni.navigateTo({
            url: '/pages/shouquan'
          })
          return false;
        };
      },
      gotobaike(item) {
        uni.navigateTo({
          url: "./baikelist?json=" + JSON.stringify(item)
        })
      },
      goTowendalist(item) {
        uni.navigateTo({
          url: "./wendalist?json=" + JSON.stringify(item)
        })
      }
    },
    onLoad() {
      this.getQingganbaike();
    },
    onShareAppMessage() {
      return {
        title: '情感百科',
        path: '/pages/qingganbaike',
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
  .qingganbaike {
    color: #000000;
    background: #efefef;
  }
  .tubiao {
    background: #ffffff;
    padding-top: 50rpx;
    padding-bottom: 50rpx;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .box {
      box-sizing: border-box;
      text-align: center;
      .image {
        width: 70rpx;
        height: 60rpx;
      }
      .title {
        font-size: 26rpx;
      }
    }
  }
  .kuai {
    background: #ffffff;
    margin-top: 4rpx;
    padding-top: 30rpx;
    padding-bottom: 30rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    .hang {
      height: 40rpx;
      line-height: 40rpx;
      margin-bottom: 30rpx;
      .image {
        width: 137rpx;
        height: 40rpx;
      }
    }
    .neikuai {
      .bigbox {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .box {
          margin-bottom: 30rpx;
          display: flex;
          flex-direction: column;
          width: 340rpx;
          text-align: left;
          .image-group {
            display: flex;
            justify-content: center;
            align-items: center;
            .image {
              width: 100%;
              height: 200rpx;
            }
            .image-tip {
              position: absolute;
              font-size: 36rpx;
              color: #ffffff;
            }
          }
          .text {
            text-align: left;
            font-size: 26rpx;
          }
        }
      }
    }
  }
</style>
