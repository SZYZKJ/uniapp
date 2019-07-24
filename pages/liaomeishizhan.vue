<template>
    <view class="liaomeishizhan">
        <text selectable='true' class="title">{{liaomeishizhan.title}}</text>
        <view v-html="liaomeishizhan.content"></view>
        <view class="dikuang">
            <view class="shoucangkuang">
                <image class="shoucang" @tap="gaibiandianzan" v-if="dianzan" src="https://www.lianaizhuli.com/yidianzan.png" />
                <image class="shoucang" @tap="gaibiandianzan" v-else src="https://www.lianaizhuli.com/weidianzan.png" />
                <view>{{liaomeishizhan.dianzan}}</view>
            </view>
            <view class="shoucangkuang">
                <image class="shoucang" @tap="gaibianshoucang" v-if="shoucang" src="https://www.lianaizhuli.com/yishoucang.png" />
                <image class="shoucang" @tap="gaibianshoucang" v-else src="https://www.lianaizhuli.com/weishoucang.png" />
                <view>{{liaomeishizhan.shoucang}}</view>
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
                liaomeishizhan: {},
                dianzan: 0,
                shoucang: 0,
            }
        },
        methods: {
            async getLiaomeishizhan() {
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getLiaomeishizhan({
                    unionid: unionid,
                    liaomeishizhanid: this.id
                });
                this.liaomeishizhan = json.data;
                uni.setNavigationBarTitle({
                    title: this.liaomeishizhan.title
                });
                const newjson = await api.getDianzanshoucang({
                    unionid: unionid,
                    doctype: 'liaomeishizhan',
                    docid: this.id,
                });
                this.dianzan = newjson.dianzan;
                this.shoucang = newjson.shoucang;
                if (unionid == '') {
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
                    doctype: 'liaomeishizhan',
                    docid: this.id,
                    dianzanshu: this.liaomeishizhan.dianzan,
                    shoucangshu: this.liaomeishizhan.shoucang,
                    dianzan: this.dianzan,
                    shoucang: this.shoucang,
                });
            },
            gaibianshoucang() {
                this.shoucang = 1 - this.shoucang;
                if (this.shoucang) {
                    this.liaomeishizhan.shoucang += 1;
                    tip.success('收藏成功');
                } else {
                    this.liaomeishizhan.shoucang -= 1;
                    tip.success('取消收藏');
                }
                this.setDianzanshoucangshu();
            },
            gaibiandianzan() {
                this.dianzan = 1 - this.dianzan;
                if (this.dianzan) {
                    this.liaomeishizhan.dianzan += 1;
                } else {
                    this.liaomeishizhan.dianzan -= 1;
                }
                this.setDianzanshoucangshu();
            }
        },
        onLoad(e) {
            this.id = e.id;
            this.getLiaomeishizhan();
        },
        onShareAppMessage() {
            return {
                title: "恋爱联盟",
                path: "/pages/liaomeishizhan?id=" + this.id
            };
        },
        onUnload() {
            var pages = getCurrentPages();
            if (pages.length == 1 && pages[0].route != 'pages/searchpage') {
                uni.switchTab({
                    url: "/pages/home"
                })
            }
        }
    }
</script>

<style lang="less">
    .liaomeishizhan {
        background: #FFFFFF;
        .title {
            padding-left: 20rpx;
            padding-right: 20rpx;
            padding-top: 20rpx;
            padding-bottom: 20rpx;
            font-weight: bolder;
            font-size: 38rpx;
            color: #000000;
        }
        .image {
            width: 100%;
        }
        .dikuang {
            padding-top: 100rpx;
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
    }
</style>
