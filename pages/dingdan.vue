<template>
    <view class="dingdan">
        <view class="title">您的订单如下</view>
        <view v-for="(item,index) in dingdan" :key="index">
            <view class="dingdankuang">
                <view class="dingdanminkuang">
                    <view><text class="guding">当前状态</text><text class="xiangqing">支付成功</text></view>
                    <view><text class="guding">商品名称</text><text class="xiangqing">{{item.attach.detail}}</text></view>
                    <view><text class="guding">支付时间</text><text class="xiangqing">{{item.time_end}}</text></view>
                    <view><text class="guding">付款金额</text><text class="xiangqing">{{item.cash_fee*0.01}}</text></view>
                    <view><text class="guding">交易单号</text><text class="xiangqing">{{item.transaction_id}}</text></view>
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
                isend: 0,
                dingdan: [],
            }
        },
        methods: {
            async getDingdan() {
                let unionid = uni.getStorageSync('unionid') || '';
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
                const json = await api.getDingdan({
                    unionid: unionid,
                })
                this.dingdan = json.data;
                this.isend = 1;
            }
        },
        onLoad() {
            this.getDingdan();
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
    .dingdan {
        margin: 0rpx;
        padding-bottom: 20rpx;
        background: #dfdfdf;
        .title {
            color: #000000;
            text-align: center;
        }
        .dingdankuang {
            margin-top: 20rpx;
            margin-left: 20rpx;
            margin-right: 20rpx;
            border-radius: 20rpx;
            background: #FFFFFF;
            .dingdanminkuang {
                padding-top: 20rpx;
                margin-left: 20rpx;
                margin-right: 20rpx;
                padding-bottom: 20rpx;
                .guding {
                    color: #000000;
                }
                .xiangqing {
                    padding-left: 50rpx;
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
