<template>
    <view class="sijiao">
        <image class="image" :src="sijiao.url" mode="widthFix" />
        <navigator class="kuang" url="/pages/vip">
            <view class="text">立即学习</view>
        </navigator>
    </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
    export default {
        data() {
            return {
                sijiao: {},
            }
        },
        onLoad(options) {
            this.sijiao = JSON.parse(options.json);
            uni.setNavigationBarTitle({
                title: this.sijiao.title,
            })
        },
        onShareAppMessage() {
            return {
                title: '恋爱联盟',
                path: '/pages/sijiao?json=' + JSON.stringify(this.sijiao),
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
    .sijiao {
        background: #FFFFFF;
        padding-bottom: 80rpx;
        .image {
            width: 100%;
        }
        .kuang {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 80rpx;
            background: #ffffff;
            .text {
                margin-left: 20%;
                width: 60%;
                border-radius: 20rpx;
                color: #ffffff;
                text-align: center;
                background: #09BB07;
                line-height: 80rpx;
            }
        }
    }
</style>
