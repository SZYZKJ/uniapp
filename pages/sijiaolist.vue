<template>
    <view class="sijiaolist">
        <view v-for="(item,index) in sijiaoList" :key="index">
            <view class="wenzhang" @tap="goTohtml(item)">
                <view class="kuai">
                    <view class="textkuang">
                        <text selectable='true' class="title">{{item.title}}</text>
                        <view class="laiyuan">{{item.count}}次学习</view>
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
  import api from 'common/api';
  import tip from 'common/tip';
    export default {
        data() {
            return {
                title: '',
                category_id: 10,
                sijiaoList: [],
                scroll: '',
                isend: false,
            }
        },
        methods: {
            async getSijiaoList(e) {
                if (this.isend) return;
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getSijiaoList({
                    unionid: unionid,
                })
                if (json.data.length < 10) this.isend = true;
                if (e) this.sijiaoList = json.data.concat(this.sijiaoList);
                else this.sijiaoList = this.sijiaoList.concat(json.data);
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
                    url: "./sijiao?json=" + JSON.stringify(item)
                })
            }
        },
        onPullDownRefresh() {
            uni.stopPullDownRefresh();
            this.getSijiaoList(1);
        },
        onReachBottom() {
            this.getSijiaoList(0);
        },
        onLoad() {
            this.getSijiaoList(0);
        },
        onShareAppMessage() {
            return {
                title: this.title,
                path: '/pages/sijiaolist',
            };
        }
    }
</script>

<style lang="less">
    .sijiaolist {
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
                    .laiyuan {
                        font-size: 20rpx;
                    }
                }
                .image {
                    margin-left: 16rpx;
                    height: 138rpx;
                    width: 250rpx;
                }
            }
        }
        .textend {
            padding-top: 30rpx;
            padding-bottom: 30rpx;
            text-align: center;
        }
    }
</style>
