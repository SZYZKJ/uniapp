<template>
  <view class="phonenumber">
    <image class="authorize-icon" src="../static/authorize.png"></image>
    <view class="auth-item">为更好向您提供服务</view>
    <view class="auth-item">恋爱联盟申请获取以下权限：</view>
    <view class="auth-item">获取您的手机号码</view>
    <view class="btn-authorize">
      <button open-type="getPhoneNumber" type="primary" bindgetphonenumber="getPhoneNumber">授权</button>
    </view>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  export default {
    data() {
      return {
          loginres: {},
        }
      },
      methods: {
          async getPhoneNumber(e) {
            let unionid = uni.getStorageSync('unionid') || '';
            if (unionid == '') {
              uni.navigateTo({
                url: "/pages/shouquan"
              });
              return false;
            }
            if (e.detail.errMsg == 'getPhoneNumber:ok') {
              if (this.loginres.code) {
                const rlt = await api.getPhoneNumber({
                  unionid: unionid,
                  jsCode: this.loginres.code,
                  encryptedData: e.detail.encryptedData,
                  iv: e.detail.iv,
                })
                uni.setStorageSync('userInfo', e.detail.userInfo);
                if (rlt.data.unionid) {
                  let data = rlt.data;
                  if (data.unionid) {
                    uni.setStorageSync('unionid', data.unionid);
                    uni.setStorageSync('phoneNumber', 1);
                    uni.navigateBack({
                      delta: 1
                    })
                  }
                } else {
                  let res = await uni.showModal({
                    title: 'appid有误',
                    content: '授权失败'
                  })
                }
              }
            } else {
              uni.showModal({
                title: '友情提示',
                content: '尊敬的用户，为确保对您的服务质量，请允许我们获取您的手机号码',
              })
            }
          },
        },
        async onLoad() {
          this.loginres = await uni.login();
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
  .phonenumber {
    height: 100%;
    background: #fff;
    text-align: center;
    padding-top: 100rpx;
    .authorize-icon {
      width: 128rpx;
      height: 128rpx;
      display: block;
      margin: 0 auto;
      padding-bottom: 10rpx;
    }
    .auth-item {
      padding: 5rpx 0;
    }
    .btn-authorize {
      margin: 100rpx 50rpx;
    }
  }
</style>
