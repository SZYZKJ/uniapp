<template>
  <web-view class="webview" :src="url">
  </web-view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
  export default {
    data() {
      return {
        url: "",
      }
    },
    methods: {
      async setJilu() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: '/pages/shouquan'
          })
          return false;
        }
        const json = await api.setJilu({
          unionid: unionid,
          jilutype: 'html',
          jilucontent: this.url,
        });
      }
    },
    onLoad(options) {
      this.url = options.url;
      this.setJilu();
    },
    onShareAppMessage() {
      return {
        title: '恋爱联盟',
        path: '/pages/viewhtml?url=' + this.url,
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
  .webview {
    overflow: inherit;
    width: 750rpx;
  }
</style>
