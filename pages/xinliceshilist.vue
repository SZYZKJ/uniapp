<template>
	<view class="xinliceshilist">
		<scroll-view scroll-x="true" class="tab-h">
			<view v-for="(item,index) in nametab" :key="index" v-bind:class="currentTab==index?'tab-itemactive':'tab-item'" @tap="swichNav(index)">{{item}}</view>
		</scroll-view>
		<view class="jiange" @touchstart='touchStart' @touchend="touchEnd">
			<view v-for="(item,index) in XinliceshiList[currentTab]" :key="index">
				<view class="wenzhang" @tap="goTohtml(item)">
					<view class="kuai">
						<view class="textkuang">
							<text selectable='true' class="title">{{item.title}}</text>
							<view class="laiyuan">{{item.count}}次已测</view>
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
	import api from 'common/api';
	import tip from 'common/tip';
	export default {
		data() {
			return {
				nametab: ['情感', '性格', '健康', '职场', '人际', '能力', '亲子', ],
				titletab: [{
					'category': '情感',
					'category_id': 5,
				}, {
					'category': '性格',
					'category_id': 4,
				}, {
					'category': '健康',
					'category_id': 1,
				}, {
					'category': '职场',
					'category_id': 3,
				}, {
					'category': '人际',
					'category_id': 2,
				}, {
					'category': '能力',
					'category_id': 0,
				}, {
					'category': '亲子',
					'category_id': 6,
				}],
				XinliceshiList: [
					[],
					[],
					[],
					[],
					[],
					[],
					[],
				],
				currentTab: 0,
				scroll: ['', '', '', '', '', '', '', ''],
				isend: [false, false, false, false, false, false, false, false, ],
			}
		},
		methods: {
			async getXinliceshiList(e) {
				if (this.isend[this.changeTab]) return;
				let unionid = uni.getStorageSync('unionid') || '';
				const json = await api.getXinliceshiList({
					unionid: unionid,
					category_id: this.titletab[this.currentTab].category_id,
					scroll: this.scroll[this.currentTab],
				})
				if (json.data.length < 10) this.isend[this.currentTab] = true;
				if (e) this.XinliceshiList[this.currentTab] = json.data.concat(this.XinliceshiList[this.currentTab]);
				else this.XinliceshiList[this.currentTab] = this.XinliceshiList[this.currentTab].concat(json.data);
				this.scroll[this.currentTab] = json.scroll;
				this.$forceUpdate();
				if (unionid == '') {
					uni.navigateTo({
						url: '/pages/shouquan'
					})
					return false;
				}
			},
			changeTab() {
				if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					if (this.currentTab > 0) {
						this.currentTab--;
						if (this.XinliceshiList[this.currentTab].length == 0)
							this.getXinliceshiList(0);
					}
				} else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					if (this.currentTab < this.titletab.length - 1) {
						this.currentTab++;
						if (this.XinliceshiList[this.currentTab].length == 0)
							this.getXinliceshiList(0);
					}
				}
			},
			touchStart(e) {
				this.startX = e.mp.changedTouches[0].pageX;
				this.startY = e.mp.changedTouches[0].pageY;
			},
			touchEnd(e) {
				this.endX = e.mp.changedTouches[0].pageX;
				this.endY = e.mp.changedTouches[0].pageY;
				this.changeTab();
			},
			goTohtml(item) {
				uni.navigateTo({
					url: "./xinliceshi?id=" + item.id
				})
			},
			swichNav(e) {
				var cur = e;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
					if (this.XinliceshiList[this.currentTab].length == 0)
						this.getXinliceshiList(0);
				}
			},
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
			this.getXinliceshiList(1);
		},
		onReachBottom() {
			this.getXinliceshiList(0);
		},
		onLoad() {
			this.getXinliceshiList(0);
		},
		onShareAppMessage() {
			return {
				title: '恋爱联盟心理测试',
				path: '/pages/xinliceshilist',
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
	.xinliceshilist {
		background: #ffffff;
	}
	.tab-h {
		z-index: 99;
		position: fixed;
		top: 0rpx;
		background: #ffffff;
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		width: 100%;
		font-size: 28rpx;
		.tab-item {
			color: #000;
			margin-left: 20rpx;
			margin-right: 20rpx;
			display: inline;
		}
		.tab-itemactive {
			color: #ff7e00;
			margin-left: 20rpx;
			margin-right: 20rpx;
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
</style>
