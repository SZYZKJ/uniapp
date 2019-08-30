<template>
	<view class="kecheng">
		<image class="banner" mode="widthFix" :src="kecheng.image" />
		<view class="title">{{kecheng.title}}</view>
		<view scroll-x="true" class="tab-h" scroll-left="scrollLeft">
			<view v-for="(item,index) in tablist" :key="index" v-bind:class="currentTab==index?'tab-itemactive':'tab-item'" @tap="swichNav(index)">{{item}}</view>
		</view>
		<image class="banner" v-if="currentTab==0" mode="widthFix" :src="kecheng.url" @touchstart='touchStart' @touchend="touchEnd" />
		<view v-else class="libiao" @touchstart='touchStart' @touchend="touchEnd">
			<view v-for="(item,index) in kecheng.children" :key="index">
				<view class="titlekuang" @tap="goTohtml(item,index)">
					<view class="itemtitle">{{item.title}}</view>
					<view class="yigoumai" v-if="kecheng.yigoumai">去学习</view>
					<view v-else>
						<view class="yigoumai" v-if="index<1||(index<2&&kecheng.children.length>=5)">免费</view>
						<image class="suo" v-else src="../static/suo.png" />
					</view>
				</view>
			</view>
		</view>
		<view class="kuang" v-if="kecheng.yigoumai==0">
			<view class="text" @tap="zhifukecheng">特价 {{kecheng.jiage}}</view>
		</view>
	</view>
</template>

<script>
	import api from 'common/api';
	import tip from 'common/tip';
	export default {
		data() {
			return {
				kecheng: {},
				currentTab: 0,
				paySign_data: {},
				isowenan: '',
				tablist: ['课程介绍', '课程列表'],
			}
		},
		methods: {
			async huoquwenan() {
				let unionid = uni.getStorageSync('unionid') || '';
				if (unionid == '') {
					uni.navigateTo({
						url: '/pages/shouquan'
					})
					return false;
				}
				const json = await api.getIoswenan({
					'unionid': unionid,
				});
				this.ioswenan = json.data;
			},
			tiaoqizhifu() {
				let that = this;
				uni.requestPayment({
					timeStamp: this.paySign_data.timeStamp,
					nonceStr: this.paySign_data.nonceStr,
					package: this.paySign_data.package,
					signType: this.paySign_data.signType,
					paySign: this.paySign_data.paySign,
					'success': function(res) {
						tip.confirm('恭喜您购买成功');
						that.kecheng.yigoumai = 1;
						that.currentTab = 1;
					},
				})
			},
			async zhifukecheng() {
				if (plus.os.name == 'Android') {
					let that = this;
					uni.showModal({
						title: '温馨提示',
						confirmText: '跳转',
						content: '目前安卓端APP暂时只支持在微信小程序里面支付，感谢谅解和支持~',
						showCancel: false,
						success: function(res) {
							let obj = plus.android.runtimeMainActivity(); //获取应用主Activity实例对象
							plus.android.invoke('com.szyzkj.lianailianmeng.Tiaozhuanxiaochengxu', 'launchMiniProgram', obj,
								'pages/kecheng?json=' + JSON.stringify(that.kecheng));
						}
					});
				} else {
					uni.showModal({
						title: '温馨提示',
						confirmText: '分享',
						content: '目前APP暂时只支持在微信里面打开链接来完成支付,分享链接到微信然后点击链接进去即可完成支付，感谢谅解和支持~',
						showCancel: false,
						success: function(res) {
							uni.share({
								provider: "weixin",
								scene: "WXSceneSession",
								type: 1,
								summary: "http://www.lianaizhuli.com/kechenglist",
							});
						}
					});
				}
				// var timestamp = Date.parse(new Date());
				// if (timestamp - this.nowtime < 3000) {
				//   return false;
				// } else {
				//   this.nowtime = timestamp;
				// }
				// let unionid = uni.getStorageSync('unionid') || '';
				// if (unionid == '') {
				//   uni.navigateTo({
				//     url: '/pages/shouquan'
				//   })
				//   return false;
				// }
				// const json = await api.get_kechengprepay_id({
				//   'unionid': unionid,
				//   'kechengid': this.kecheng.id,
				//   'detail': '课程：' + this.kecheng.title,
				// });
				// this.paySign_data = json.data;
				// if (json.MSG == 'nophoneNumber') {
				//   uni.navigateTo({
				//     url: '/pages/phonenumber'
				//   });
				// } else {
				//   this.tiaoqizhifu();
				// }
			},
			changeTab() {
				if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					if (this.currentTab > 0) {
						this.currentTab = 0;
					}
				} else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					if (this.currentTab < 1) {
						this.currentTab = 1;
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
			goTohtml(item, index) {
				if (this.kecheng.yigoumai || index < 1 || (index < 2 && this.kecheng.children.length >= 5)) {
					var kefenxiang = '0';
					if (index < 1 || (index < 2 && this.kecheng.children.length >= 5)) {
						kefenxiang = '1';
					}
					uni.navigateTo({
						url: './kechengneirong?neirongid=' + item.id + '&kechengjson=' + JSON.stringify(this.kecheng) + '&kefenxiang=' +
							kefenxiang,
					})
				} else {
					tip.confirm('尊敬的恋爱联盟用户，当前内容为付费阅读，请先购买~');
				}
			},
			swichNav(e) {
				var cur = e;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
				}
			},
		},
		onShow() {
			var yigoumai = uni.getStorageSync('yigoumai');
			if (yigoumai == '0') {
				this.kecheng.yigoumai = 0;
				uni.removeStorageSync('yigoumai')
			}
			var phoneNumber = uni.getStorageSync('phoneNumber');
			if (phoneNumber == 1) {
				uni.setStorageSync('phoneNumber', 0);
				this.tiaoqizhifu();
			}
		},
		onLoad(options) {
			this.kecheng = JSON.parse(options.json);
			this.huoquwenan();
		},
		onShareAppMessage() {
			return {
				title: "恋爱联盟",
				path: "/pages/kecheng?json=" + JSON.stringify(this.kecheng)
			};
		},
		onUnload() {
			var pages = getCurrentPages();
			if (pages.length == 1) {
				uni.switchTab({
					url: "/pages/home"
				});
			}
		}
	}
</script>

<style lang="less">
	.kecheng {
		background: #ffffff;
		color: #000;
		word-break: break-all;
		text-align: center;
		padding-bottom: 80rpx;
	}

	.banner {
		width: 100%;
	}

	.title {
		color: #333;
		font-size: 40rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.tab-h {
		display: flex;
		justify-content: space-around;
		height: 80rpx;
		font-size: 28px;
		border-bottom: 2rpx solid #dfdfdf;

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

	.libiao {
		margin-bottom: 50rpx;
	}

	.titlekuang {
		width: 90%;
		margin-left: 5%;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #dfdfdf;
		min-height: 120rpx;
		line-height: 120rpx;
	}

	.itemtitle {
		text-align: left;
		color: #333;
	}

	.yigoumai {
		margin-top: 45rpx;
		width: 100rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #fff;
		background: #ff7e00;
		border-radius: 20rpx;
		font-size: 25rpx;
	}

	.suo {
		margin-top: 40rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.kuang {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background: #ffffff;

		.text {
			margin-left: 20%;
			width: 60%;
			border-radius: 20rpx;
			color: #ffffff;
			text-align: center;
			background: #09BB07;
			line-height: 100rpx;
		}
	}
</style>
