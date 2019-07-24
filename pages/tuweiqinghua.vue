<template>
    <view class="tuweiqinghua" scroll-y="true" style="min-height:100%" @touchstart='touchStart' @touchend="touchEnd">
        <view v-bind:class="item.person==1?'words-item person1':'words-item person2'" v-for="(item,index) in wordsList" :key="index">
            <view class="words-avatar">
                <image class="words-avatar1" :src="person2Avatar" v-if="item.person==1" />
                <image class="words-avatar2" mode="aspectFit" :src="person2Avatar" v-if="item.person==2" />
            </view>
            <view @tap="copyText(item.content)" class="words-content" v-if="item.type==1">
                <text selectable="true">{{item.content}}</text>
            </view>
            <image @tap="previewImage(item.content)" class="words-img" mode="widthFix" :src="item.content" v-if="item.type==2" />
        </view>
        <view class="fixed-footer">
            <view class="btngroup-prev-next">
                <view @tap="openChat(0)" class="btn-prev">上一个(下拉)</view>
                <view @tap="openChat(1)" class="btn-next">下一个(上滑)</view>
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
                userinfo: uni.getStorageSync('userinfo'),
                person2Avatar: "../static/meinv.png",
                wordsList: [],
                cententsList: [],
                nowid: 0,
                winheight: 0,
            }
        },
        methods: {
            copyText(t) {
                var e = t;
                uni.setClipboardData({
                    data: e,
                    success: function(t) {
                        uni.showToast({
                            title: "内容已复制",
                            icon: "success",
                            duration: 1000
                        });
                    }
                });
            },
            async getTuweiqinghua() {
                let unionid = uni.getStorageSync('unionid') || '';
                const json = await api.getTuweiqinghua({
                    unionid: unionid,
                })
                this.cententsList.push(json.data.datalist);
                this.wordsList = json.data.datalist;
                this.nowid++;
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
            },
            previewImage(t) {
                var e = t;
                uni.previewImage({
                    current: e,
                    urls: [e]
                });
            },
            openChat(e) {
                var t = e;
                if (t == 0) {
                    if (this.nowid > 0) {
                        this.nowid--;
                        this.wordsList = this.cententsList[this.nowid];
                    }
                } else {
                    if (this.nowid < this.cententsList.length - 1) {
                        this.nowid++;
                        this.wordsList = this.cententsList[this.nowid];
                    } else {
                        this.getTuweiqinghua();
                    }
                }
            },
            changeTab() {
                if (this.endY - this.startY > 30 && Math.abs(this.endX - this.startX) * 1.5 < Math.abs(this.endY - this.startY)) {
                    this.openChat(0);
                }
                if (this.endY - this.startY < -30 && Math.abs(this.endX - this.startX) * 1.5 < Math.abs(this.endY - this.startY)) {
                    this.openChat(1);
                }
            },
            touchStart(e) {
                this.startX = e.changedTouches[0].clientX;
                this.startY = e.changedTouches[0].clientY;
            },
            touchEnd(e) {
                this.endX = e.changedTouches[0].clientX;
                this.endY = e.changedTouches[0].clientY;
                this.changeTab();
            },
        },
        onLoad(e) {
            var Width = uni.getSystemInfoSync().windowWidth;
            var Height = uni.getSystemInfoSync().windowHeight;
            this.winheight = Height / Width * 750;
            this.wordsList = JSON.parse(e.json);
            this.cententsList = [this.wordsList];
            var r = [
                "对方正在期待地搓搓手...",
                "对方正在害羞...",
                "对方正在脸红...",
            ];
            uni.setNavigationBarTitle({
                title: r[Math.floor(Math.random() * 3)]
            });
        },
        onShareAppMessage() {
            return {
                title: '土味情话',
                path: '/pages/tuweiqinghua?json=' + JSON.stringify(this.wordsList),
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
    .tuweiqinghua {
        background-color: #ebeaeb; // position: relative;
        width: 100%;
        padding: 30rpx 20rpx 230rpx;
        box-sizing: border-box;
    }
    .words-item {
        position: relative;
        width: 100%;
        height: auto;
        min-height: 80rpx;
        box-sizing: border-box;
        margin-bottom: 30rpx;
        overflow: hidden;
    }
    .words-avatar {
        position: absolute;
        top: 0;
        width: 80rpx;
        height: 80rpx;
        background-color: #fff;
    }
    .words-avatar image {
        width: 80rpx;
        height: 80rpx;
    }
    .words-content {
        position: relative;
        width: auto;
        height: auto;
        padding: 20rpx;
        font-size: 30rpx;
        display: inline-block;
        border-radius: 8rpx;
        color: #000;
        max-width: 70%;
    }
    .words-content::after {
        content: "";
        position: absolute;
        top: 28rpx;
        width: 0;
        height: 0;
        border-bottom: 12rpx solid transparent;
        border-top: 12rpx solid transparent;
    }
    .words-img {
        width: 200rpx;
        display: block;
        max-height: 200rpx;
        box-sizing: border-box;
    }
    .words-item.person1 {
        padding-right: 100rpx;
    }
    .words-item.person2 {
        padding-left: 100rpx;
    }
    .words-item.person1 .words-avatar {
        right: 0;
    }
    .words-item.person2 .words-avatar {
        left: 0;
    }
    .words-item.person1 .words-content {
        background-color: #a3e36b;
        float: right;
    }
    .words-item.person2 .words-content {
        background-color: #fff;
    }
    .words-item.person1 .words-content:active {
        background-color: #99d565;
    }
    .words-item.person2 .words-content:active {
        background-color: #f7f7f7;
    }
    .words-item.person1 .words-content::after {
        right: -20rpx;
        border-right: 12rpx solid transparent;
        border-left: 12rpx solid #a3e36b;
    }
    .words-item.person2 .words-content::after {
        left: -20rpx;
        border-right: 12rpx solid #fff;
        border-left: 12rpx solid transparent;
    }
    .words-item.person1 .words-content:active::after {
        border-left-color: #99d565;
    }
    .words-item.person2 .words-content:active::after {
        border-right-color: #f7f7f7;
    }
    .words-item.person1 .words-img {
        float: right;
    }
    .fixed-footer {
        z-index: 99;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .btngroup-prev-next {
        position: relative;
        width: 100%;
        height: 90rpx;
        line-height: 90rpx;
        text-align: center;
        color: #535355;
        font-size: 34rpx;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 0;
        display: flex;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }
    .btn-prev {
        position: relative;
        width: 100%;
        height: 90rpx;
        flex: 1;
        background-color: #fff;
        border-right: 1px solid #eaeaea;
        overflow: hidden;
    }
    .btn-next {
        position: relative;
        width: 100%;
        height: 90rpx;
        flex: 1;
        background-color: #fff;
        overflow: hidden;
    }
    .btn-prev.disabled,
    .btn-next.disabled {
        color: #b8b8bd;
    }
</style>
