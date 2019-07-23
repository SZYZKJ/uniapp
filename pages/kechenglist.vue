<template>
    <view class="kechenglist">
        <view v-for="(item,index) in kechenglist" :key="index">
            <view class="wenzhang" @tap="goTohtml(item)">
                <view class="kuai">
                    <view class="textkuang">
                        <text selectable='true' class="title">{{item.title}}</text>
                        <view class="minlan">
                            <view class="laiyuan">{{item.count}}次学习</view>
                            <view class="yigoumai">¥{{item.jiage}}</view>
                            <view class="yigoumai" v-if="item.yigoumai">已购买</view>
                            <view class="weigoumai" v-else>去试读</view>
                        </view>
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
                inputdata: {
                    title: '',
                },
                kechenglist: [],
                scroll: '',
                isend: false,
            }
        },
        methods: {
            async getKechengList(e) {
                if (this.isend) return;
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getKechengList({
                    unionid: unionid,
                    scroll: this.scroll,
                })
                if (json.data.length < 10) this.isend = true;
                if (e) this.kechenglist = json.data.concat(this.kechenglist);
                else this.kechenglist = this.kechenglist.concat(json.data);
                this.scroll = json.scroll;
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
            },
            goTohtml(item) {
                uni.navigateTo({
                    url: "./kecheng?json=" + JSON.stringify(item)
                })
            }
        },
        onPullDownRefresh() {
            uni.stopPullDownRefresh();
            this.getKechengList(1);
        },
        onReachBottom() {
            this.getKechengList(0);
        },
        onLoad() {
            this.getKechengList(0);
        },
        onShareAppMessage() {
            return {
                title: '恋爱联盟',
                path: '/pages/kechenglist',
            };
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
    .kechenglist {
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
                    .minlan {
                        display: flex;
                        justify-content: space-between;
                        text-align: center;
                        .laiyuan {
                            font-size: 20rpx;
                        }
                        .yigoumai {
                            width: 100rpx;
                            color: #fff;
                            background: #ff7e00;
                            border-radius: 20rpx;
                            font-size: 20rpx;
                        }
                        .weigoumai {
                            width: 100rpx;
                            color: #fff;
                            background: #09BB07;
                            border-radius: 20rpx;
                            font-size: 20rpx;
                        }
                    }
                }
                .image {
                    margin-left: 16rpx;
                    height: 138rpx;
                    width: 250rpx;
                }
            }
        }
    }
    .textend {
        padding-top: 30rpx;
        padding-bottom: 30rpx;
        text-align: center;
    }
</style>
