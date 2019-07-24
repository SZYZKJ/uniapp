<template>
    <view class="kechengneirong">
        <view class="title">{{kecheng.title}}</view>
        <view v-html="kecheng.content"></view>
    </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
    export default {
        data() {
            return {
                neirongid: '',
                kecheng: {},
                kechengjson: '',
                kefenxiang: '0',
            }
        },
        methods: {
            async getKecheng() {
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getKecheng({
                    unionid: unionid,
                    kechengid: this.kechengjson.id,
                    neirongid: this.neirongid,
                    kefenxiang: this.kefenxiang,
                });
                if (json.MSG == 'YES') {
                    this.kecheng = json.data;
                    uni.setNavigationBarTitle({
                        title: this.kecheng.title
                    });
                    if (unionid == '') {
                        uni.navigateTo({
                            url: "/pages/shouquan"
                        });
                        return false;
                    }
                } else {
                    tip.confirm('尊敬的恋爱联盟用户，当前内容为付费阅读，请先购买~');
                    uni.setStorageSync('yigoumai', '0');
                    uni.navigateBack({
                        delta: 1
                    })
                }
            },
        },
        onLoad(e) {
            this.neirongid = e.neirongid;
            this.kechengjson = JSON.parse(e.kechengjson);
            this.kefenxiang = e.kefenxiang;
            this.getKecheng();
        },
        onShareAppMessage() {
            if (this.kefenxiang == '1') {
                return {
                    title: "恋爱联盟",
                    path: '/pages/kechengneirong?neirongid=' + this.neirongid + '&kechengjson=' + JSON.stringify(this.kechengjson) + '&kefenxiang=' + this.kefenxiang,
                };
            } else {
                return {
                    title: "恋爱联盟",
                    path: '/pages/kecheng?json=' + JSON.stringify(this.kechengjson),
                };
            }
        },
        onUnload() {
            var pages = getCurrentPages();
            if (pages.length == 1) {
                uni.switchTab({
                    url: "/pages/home"
                });
            }
        }
    }
</script>

<style lang="less">
    .kechengneirong {
        background: #ffffff;
        padding-left: 30rpx;
        padding-right: 30rpx;
        color: #333;
        word-break: break-all;
        text-align: justify;
        padding-bottom: 100rpx;
    }
    .title {
        color: #333;
        font-size: 40rpx;
    }
</style>
