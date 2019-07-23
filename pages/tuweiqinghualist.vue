<template>
    <view class="tuweiqinghualist">
        <view class="tou"></view>
        <view v-for="(item,index) in tuweiqinghualist" :key="index">
            <view class="tuweiqinghua" @tap="tuweiqinghua(item)">
                💎 {{item.title}}
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
                tuweiqinghualist: [],
                scroll: '',
                isend: false,
            }
        },
        methods: {
            async getTuweiqinghuaList(e) {
                if (this.isend) return;
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getTuweiqinghuaList({
                    unionid: unionid,
                    scroll: this.scroll,
                })
                if (json.data.length < 10) this.isend = true;
                if (e) this.tuweiqinghualist = json.data.concat(this.tuweiqinghualist);
                else this.tuweiqinghualist = this.tuweiqinghualist.concat(json.data);
                this.scroll = json.scroll;
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                };
            },
            tuweiqinghua(item) {
                uni.navigateTo({
                    url: "./tuweiqinghua?json=" + JSON.stringify(item.datalist)
                })
            }
        },
        onPullDownRefresh() {
            uni.stopPullDownRefresh();
            this.getTuweiqinghuaList(1);
        },
        onReachBottom() {
            this.getTuweiqinghuaList(0);
        },
        onLoad() {
            this.getTuweiqinghuaList(0);
        },
        onShareAppMessage() {
            return {
                title: '土味情话',
                path: '/pages/tuweiqinghualist',
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
    .tuweiqinghualist {
        margin: 0rpx;
        padding-bottom: 20rpx;
        background: rgba(0, 0, 0, 0.1);
        .tou {
            margin: 0rpx;
            height: 1rpx;
            width: 100%;
        }
        .tuweiqinghua {
            border-radius: 20rpx;
            margin-top: 20rpx;
            margin-left: 20rpx;
            margin-right: 20rpx;
            padding-left: 20rpx;
            padding-right: 20rpx;
            padding-top: 20rpx;
            padding-bottom: 20rpx;
            background: #ffffff;
            color: #000;
        }
        .textend {
            padding-top: 30rpx;
            padding-bottom: 30rpx;
            text-align: center;
        }
    }
</style>
