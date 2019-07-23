<template>
    <view class="empty-placeholder" v-if="show">
        <image class="icon-xl" src="../static/kong.png" />
    </view>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            message: {}
        },
    }
</script>

<style lang="less">
    .empty-placeholder {
        width: 100%;
        text-align: center;
        text {
            color: #666;
            font-size: 38rpx;
        }
    }
    .icon-xl {
        width: 100%;
        display: block;
        margin: 0 auto;
    }
</style>
