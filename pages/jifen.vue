<template>
    <view class="jifen">
        <view class="tequan">您当前的积分为</view>
        <view class="shuzi">{{jifen}}</view>
        <view v-if="vipdengji<6">
            <view class="kaitongtext">点击升级，解锁更多会员专属服务，获取更多积分，为您提供更多恋爱能力~</view>
            <navigator class="vip" url="/pages/vip">升级会员</navigator>
        </view>
    </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
    export default {
        data() {
            return {
                jifen: 0,
                vipdengji: 0,
            }
        },
        methods: {
            async getJifen() {
                let unionid = uni.getStorageSync('unionid') || '';
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
                const json = await api.getJifen({
                    unionid: unionid,
                    iszhudong: 1,
                })
                this.vipdengji = json.data.vipdengji;
                this.jifen = json.data.jifen;
            }
        },
        onLoad() {
            this.getJifen();
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
    .jifen {
        align-items: center;
        text-align: center;
        margin-top: 0rpx;
        background: #ffffff;
    }
    .kaitongtext {
        margin-top: 50rpx;
        margin-left: 200rpx;
        margin-right: 200rpx;
        color: #000000;
    }
    .vip {
        height: 60rpx;
        background: #ff7e00;
        color: #ffffff;
        border-radius: 20rpx;
        margin-top: 200rpx;
        padding-top: 16rpx;
        width: 60%;
        margin-left: 20%;
    }
    .tequan {
        padding-top: 20rpx;
        color: #000000;
    }
    .shuzi {
        padding-top: 50rpx;
        color: #ff7e00;
    }
    .tequanneirong {
        margin-top: 20rpx;
        margin-left: 138rpx;
        text-align: left;
        .tequantext {
            color: #000000;
        }
    }
</style>
