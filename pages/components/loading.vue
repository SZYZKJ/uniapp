<template>
    <view class="loadMoreGif" v-if="show">
        <image src="../../static/loadding.gif" />
    </view>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
        },
    }
</script>

<style lang="less">
    .loadMoreGif {
        margin: 15rpx auto;
        width: 220rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        text {
            font-size: 30rpx;
            color: #999;
            margin-left: 10rpx;
        }
        image {
            width: 30rpx;
            height: 30rpx;
        }
    }
</style>
