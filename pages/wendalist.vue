<template>
    <view class="wendalist">
        <scroll-view scroll-x="true" class="tab-h" :scroll-left="scrollLeft">
            <view v-for="(item,index) in inputdata.list" :key="index" v-bind:class="currentTab==index?'tab-itemactive':'tab-item'" @tap="swichNav(index)">{{item.category_name}}</view>
        </scroll-view>
        <view class="jiange" @touchstart='touchStart' @touchend="touchEnd">
            <view v-for="(item,index) in WendaList[currentTab]" :key="index">
                <view class="wenzhang" @tap="goTohtml(item,index)">
                    <view class="kuai">
                        <view class="textkuang">
                            <text selectable='true' class="title">{{item.title}}</text>
                            <view class="laiyuan">{{item.count}}次阅读</view>
                        </view>
                        <image class="image" :src="item.image" mode="scaleToFill" lazy-load="false" />
                    </view>
                </view>
            </view>
        </view>
        <view class="textend" v-if="!isend[currentTab]">加载中......</view>
        <view class="textend" v-if="isend[currentTab]">恋爱脱单上恋爱联盟</view>
    </view>
</template>

<script>
    import tip from './api/tip';
    import api from './api/api';
    export default {
        data() {
            return {
                title: '',
                scrollLeft: 0,
                inputdata: {},
                WendaList: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                currentTab: 0,
                scroll: ['', '', '', '', '', '', '', ''],
                isend: [false, false, false, false, false, false, false, false, ],
            }
        },
        methods: {
            async getWendaList(e) {
                if (this.isend[this.changeTab]) return;
                let unionid = uni.getStorageSync('unionid') || '';
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
                const json = await api.getWendaList({
                    unionid: unionid,
                    category_id: this.inputdata.list[this.currentTab].category_id,
                    scroll: this.scroll[this.currentTab],
                })
                if (json.data.length < 10) this.isend[this.currentTab] = true;
                if (e) this.WendaList[this.currentTab] = json.data.concat(this.WendaList[this.currentTab]);
                else this.WendaList[this.currentTab] = this.WendaList[this.currentTab].concat(json.data);
                this.scroll[this.currentTab] = json.scroll;
                this.$forceUpdate();
            },
            changeTab() {
                if (this.endX - this.startX > 30 && Math.abs(this.endY - this.startY) * 1.5 < Math.abs(this.endX - this.startX)) {
                    if (this.currentTab > 0) {
                        this.currentTab--;
                        if (this.WendaList[this.currentTab].length == 0)
                            this.getWendaList(0);
                    }
                } else if (this.endX - this.startX < -30 && Math.abs(this.endY - this.startY) * 1.5 < Math.abs(this.endX - this.startX)) {
                    if (this.currentTab < this.inputdata.list.length - 1) {
                        this.currentTab++;
                        if (this.WendaList[this.currentTab].length == 0)
                            this.getWendaList(0);
                    }
                }
                this.checkCor();
            },
            checkCor() {
                if (this.currentTab > 3) {
                    this.scrollLeft = 300;
                } else {
                    this.scrollLeft = 0;
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
            goTohtml(item, e) {
                uni.navigateTo({
                    url: "./wenda?id=" + item.id,
                    success: res => {
                        setTimeout(() => {
                            this.WendaList[this.currentTab][e].count += 1;
                        }, 1000);
                    },
                })
            },
            swichNav(e) {
                var cur = e;
                if (this.currentTab == cur) {
                    return false;
                } else {
                    this.currentTab = cur;
                    if (this.WendaList[this.currentTab].length == 0)
                        this.getWendaList(0);
                }
                this.checkCor();
            },
        },
        onPullDownRefresh() {
            uni.stopPullDownRefresh();
            this.getWendaList(1);
        },
        onReachBottom() {
            this.getWendaList(0);
        },
        onLoad(e) {
            this.inputdata = JSON.parse(e.json);
            this.title = this.inputdata.title;
            uni.setNavigationBarTitle({
                title: this.title
            });
            this.getWendaList(0);
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
    .wendalist {
        background: #ffffff;
        .tab-h {
            position: fixed;
            top: 0rpx;
            display: flex;
            height: 80rpx;
            min-width: 100%;
            font-size: 30rpx;
            white-space: nowrap;
            background: #ffffff;
            .tab-item {
                color: #000;
                margin-left: 20rpx;
                margin-right: 20rpx;
                display: inline;
            }
            .tab-itemactive {
                color: #ff7e00;
                margin-left: 15rpx;
                margin-right: 15rpx;
                display: inline;
                padding-bottom: 6rpx;
                border-bottom: 6rpx solid #ff7e00;
            }
        }
        .jiange {
            margin-top: 80rpx;
            border-top: 2px solid #efefef;
        }
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
