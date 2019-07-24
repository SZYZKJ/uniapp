<template>
  <view class="weixin">
    <view v-if="vipdengji<1" class="tequan">您当前为非正式会员</view>
    <image v-if="vipdengji>0" class="image_box" @tap="imgYu(images[vipdengji])" :src="images[vipdengji]" mode="scaleToFill" />
    <view v-if="vipdengji>0" class="tequan1">您的会员特权，扫码添加导师微信，免费让他把您拉进答疑交流群，添加请备注“恋爱联盟”</view>
    <view v-if="vipdengji<6">
      <view class="kaitongtext">点击升级，解锁更多会员专属服务，为您提供更多恋爱能力~</view>
      <navigator class="vip" url="/pages/vip">升级会员</navigator>
    </view>
    <view class="tequan">恋爱联盟官方公众号</view>
    <image class="image" @tap="imgYu(gongzhonghao)" :src="gongzhonghao" mode="scaleToFill" />
  </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
  export default {
    data() {
      return {
        weixin: [
          "",
          "pym421542148",
          "job_zhou",
          "pym421542148",
          "job_zhou",
          "pym421542148",
          "job_zhou",
        ],
        images: [
          "",
          "https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg",
          "https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg",
          "https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg",
          "https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg",
          "https://www.lianaizhuli.com/daoshiweixin/pangyuming.jpg",
          "https://www.lianaizhuli.com/daoshiweixin/zhouguangyu.jpg"
        ],
        gongzhonghao: "https://www.lianaizhuli.com/daoshiweixin/gongzhonghao.png",
        vipdengji: 0
      }
    },
    methods: {
      imgYu(e) {
        var url = e;
        uni.previewImage({
          current: url,
          urls: [url]
        });
      },
      async getTequan() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        const json = await api.getTequan({
          unionid: unionid
        });
        this.vipdengji = json.vipdengji;
      },
    },
    onLoad() {
      this.getTequan();
    },
    onShareAppMessage() {
      return {
        title: "恋爱联盟",
        path: "/pages/home"
      };
    }
  }
</script>

<style lang="less">
  .weixin {
    align-items: center;
    text-align: center;
    margin-top: 0rpx;
    background: #ffffff;
  }
  .kaitongtext {
    margin-top: 50rpx;
    margin-left: 200rpx;
    margin-right: 200rpx;
    color: #000000;
  }
  .image_box {
    width: 200rpx;
    height: 336rpx;
  }
  .image {
    width: 100%;
    height: 214rpx;
    margin-top: 50rpx;
  }
  .vip {
    height: 60rpx;
    background: #09bb07;
    color: #ffffff;
    border-radius: 20rpx;
    margin-top: 50rpx;
    padding-top: 16rpx;
    width: 60%;
    margin-left: 20%;
  }
  .tequan {
    padding-top: 50rpx;
    color: #000000;
  }
  .tequan1 {
    padding-top: 50rpx;
    padding-left: 50rpx;
    padding-right: 50rpx;
    color: #000000;
  }
</style>
