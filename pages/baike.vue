<template>
    <view class="baike">
        <view v-html="baike.content"></view>
        <view class="dikuang">
            <view class="shoucangkuang">
                <image class="shoucang" @tap="gaibiandianzan" v-if="dianzan" src="https://www.lianaizhuli.com/yidianzan.png" />
                <image class="shoucang" @tap="gaibiandianzan" v-else src="https://www.lianaizhuli.com/weidianzan.png" />
                <view>{{baike.dianzan}}</view>
            </view>
            <view class="shoucangkuang">
                <image class="shoucang" @tap="gaibianshoucang" v-if="shoucang" src="https://www.lianaizhuli.com/yishoucang.png" />
                <image class="shoucang" @tap="gaibianshoucang" v-else src="https://www.lianaizhuli.com/weishoucang.png" />
                <view>{{baike.shoucang}}</view>
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
                id: '',
                baike: {},
                dianzan: 0,
                shoucang: 0,
            }
        },
        methods: {
            async getBaike() {
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getBaike({
                    unionid: unionid,
                    baikeid: this.id
                });
                this.baike = json.data;
                uni.setNavigationBarTitle({
                    title: this.baike.title
                });
                const newjson = await api.getDianzanshoucang({
                    unionid: unionid,
                    doctype: 'baike',
                    docid: this.id,
                });
                this.dianzan = newjson.dianzan;
                this.shoucang = newjson.shoucang;
                if (unionid == '') {
                    unionid = '';
                    uni.navigateTo({
                        url: "/pages/shouquan"
                    });
                    return false;
                }
            },
            async setDianzanshoucangshu() {
                let unionid = uni.getStorageSync('unionid') || '';
                if (unionid == '') {
                    uni.navigateTo({
                        url: "/pages/shouquan"
                    });
                    return false;
                }
                await api.setDianzanshoucangshu({
                    unionid: unionid,
                    doctype: 'baike',
                    docid: this.id,
                    dianzanshu: this.baike.dianzan,
                    shoucangshu: this.baike.shoucang,
                    dianzan: this.dianzan,
                    shoucang: this.shoucang,
                });
            },
            gaibianshoucang() {
                this.shoucang = 1 - this.shoucang;
                if (this.shoucang) {
                    this.baike.shoucang += 1;
                    tip.success('收藏成功');
                } else {
                    this.baike.shoucang -= 1;
                    tip.success('取消收藏');
                }
                this.setDianzanshoucangshu();
            },
            gaibiandianzan() {
                this.dianzan = 1 - this.dianzan;
                if (this.dianzan) {
                    this.baike.dianzan += 1;
                } else {
                    this.baike.dianzan -= 1;
                }
                this.setDianzanshoucangshu();
            }
        },
        onLoad(e) {
            this.id = e.id;
            this.getBaike();
        },
        onShareAppMessage() {
            return {
                title: "恋爱联盟",
                path: "/pages/baike?id=" + this.id
            };
        },
        onUnload() {
            var pages = getCurrentPages();
            if (pages.length == 1 && pages[0].route != 'pages/searchpage') {
                uni.switchTab({
                    url: "/pages/home"
                });
            }
        }
    }
</script>

<style lang="less">
    .baike {
        background: #ffffff;
        padding-left: 30rpx;
        padding-right: 30rpx;
        color: #000;
        word-break: break-all;
        text-align: center;
    }
    .title {
        color: #000;
        font-size: 40rpx;
    }
    .dikuang {
        padding-bottom: 100rpx;
        width: 100%;
        display: flex;
        justify-content: space-around;
        .shoucangkuang {
            flex-direction: column;
            text-align: center;
            .shoucang {
                width: 100rpx;
                height: 100rpx;
                margin-top: 100rpx;
            }
        }
    }
</style>
