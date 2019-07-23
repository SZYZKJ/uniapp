<template>
  <view class="shouquan">
    <image class="authorize-icon" src="../static/authorize.png"></image>
    <view class="auth-item">恋爱联盟申请获取以下权限：</view>
    <view class="auth-item">获取你的公开信息（头像、昵称等）</view>
    <view class="btn-authorize">
      <button open-type="getUserInfo" type="primary" lang="zh_CN" bindgetuserinfo="onGotUserInfo">授权</button>
    </view>
  </view>
</template>

<script>
  import tip from './api/tip';
  import api from './api/api';
  export default {
    methods: {
      async onGotUserInfo(e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
          let userInfores = await uni.getUserInfo();
          if (userInfores.errMsg == 'getUserInfo:ok') {
            try {
              let system = uni.getStorageSync('system');
              let options = uni.getStorageSync('options');
              const loginres = await uni.login();
              const rlt = await api.getUnionid({
                js_code: loginres.code,
                userinfo: userInfores.userInfo,
                system: system,
                options: options,
                encryptedData: userInfores.encryptedData,
                jiemiiv: userInfores.iv,
              })
              uni.setStorageSync('userInfo', userInfores.userInfo);
              if (rlt.data.unionid) {
                let data = rlt.data;
                if (data.unionid) {
                  uni.setStorageSync('unionid', data.unionid);
                  uni.navigateBack({
                    delta: 1
                  })
                } else {
                  uni.showModal({
                    title: '系统有误',
                    content: '授权失败'
                  })
                }
              }
            } catch (err) {
              uni.showModal({
                title: '系统有误',
                content: '授权失败'
              })
            }
          }
        } else {
          uni.showModal({
            title: '友情提示',
            content: '尊敬的用户，为确保对您的服务质量，请允许我们获取您的公开信息',
          })
        }
      }
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
  .shouquan {
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
