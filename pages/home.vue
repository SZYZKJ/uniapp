<template>
	<view class="home">
		<swiper class="swiper" :indicator-active-color="indicatorActiveColor" :indicator-dots="indicatorDots" :autoplay="autoplay"
		 :interval="interval" :duration="duration" circular="true">
			<block v-for="(item,index) in lunbotu" :key="index">
				<swiper-item>
					<image :src="item.adurl" mode="scaleToFill" class="slide-image" @tap="goToAdvert(item)" />
				</swiper-item>
			</block>
		</swiper>
		<view @touchstart="touchStart" @touchend="touchEnd">
			<view class="tubiao">
				<view class="box" v-for="(item,index) in tubiao" :key="index">
					<view @tap="goTopage(item.page)">
						<image class="image" mode="scaleToFill" :src="item.image" />
						<view class="title">{{item.title}}</view>
					</view>
				</view>
			</view>
			<view @tap="gotosearchpage">
				<view class="search">
					<view class="text">
						{{inputValue}}
					</view>
					<image class="image" mode="scaleToFill" :src="searchicon" />
				</view>
				<view class="searchmiaoshu">
					{{miaoshu}}
				</view>
				<view class="tuijiankuang">
					<view class="tuijian" v-for="(item,index) in tuijian" :key="index" @tap="fuzhituijian(item)">{{item}}</view>
				</view>
			</view>
			<view class="kuai3">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="kecheng.image" />
					<view class="gengduo" @tap="goTopage('kechenglist')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="box" v-for="(item,index) in kecheng.data" :key="index" @tap="tokecheng(item,index)">
					<view>
						<image class="image" mode="scaleToFill" :src="item.image" />
					</view>
					<view class="text">
						<view class="bigtext">
							{{item.title}}
						</view>
						<view class="minlan">
							<view class="laiyuan">{{item.count}}人学习</view>
							<view v-if="item.yigoumai" class="yigoumai">去学习</view>
							<view v-if="item.yigoumai==0" class="yigoumai">¥{{item.jiage}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="kuai4">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="xingxiangjianshe.image" />
					<view class="gengduo" @tap="goTopage('xingxiangjianshelist')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="bigbox">
					<view class="box" v-for="(item,index) in xingxiangjianshe.data" :key="index" @tap="toxingxiang(item,index)">
						<image class="image" mode="scaleToFill" :src="item.newimage" />
						<view class="text">
							<view class="bigtext">
								{{item.title}}
							</view>
							<view class="mintext">
								{{item.count}}次阅读
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="kuai3">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="qingganbaike.image" />
					<view class="gengduo" @tap="goTopage('qingganbaike')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="box" v-for="(item,index) in qingganbaike.data" :key="index" @tap="toqingganbaike(item,index)">
					<view>
						<image class="image" mode="scaleToFill" :src="item.newimage" />
					</view>
					<view class="text">
						<view class="bigtext">
							{{item.title}}
						</view>
						<view class="mintext">
							{{item.count}}次阅读
						</view>
					</view>
				</view>
			</view>
			<view v-if="islianmeng" class="kuai4">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="liaomeishizhan.image" />
					<view class="gengduo" @tap="goTopage('liaomeishizhanlist')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="bigbox">
					<view class="box" v-for="(item,index) in liaomeishizhan.data" :key="index" @tap="toliaomei(item,index)">
						<image class="image" mode="scaleToFill" :src="item.newimage" />
						<view class="text">
							<view class="bigtext">
								{{item.title}}
							</view>
							<view class="mintext">
								{{item.count}}次阅读
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="kuai3">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="sijiao.image" />
					<view class="gengduo" @tap="goTopage('sijiaolist')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="box" v-for="(item,index) in sijiao.data" :key="index" @tap="tosijiao(item,index)">
					<view>
						<image class="image" mode="scaleToFill" :src="item.newimage" />
					</view>
					<view class="text">
						<view class="bigtext">
							{{item.title}}
						</view>
						<view class="mintext">
							{{item.count}}人学习
						</view>
					</view>
				</view>
			</view>
			<view class="kuai4">
				<view class="shouhang">
					<image class="image1" mode="scaleToFill" :src="xinliceshi.image" />
					<view class="gengduo" @tap="goTopage('xinliceshilist')">
						{{gengduotext}}
						<image class="image2" mode="scaleToFill" :src="gengduoicon" />
					</view>
				</view>
				<view class="bigbox">
					<view class="box" v-for="(item,index) in xinliceshi.data" :key="index" @tap="toxinliceshi(item,index)">
						<image class="image" mode="scaleToFill" :src="item.newimage" />
						<view class="text">
							<view class="bigtext">
								{{item.title}}
							</view>
							<view class="mintext">
								{{item.count}}次测试
							</view>
						</view>
					</view>
				</view>
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
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				indicatorActiveColor: "#ffffff",
				inputValue: "海量聊天话术每日更新",
				searchicon: '',
				gengduotext: '',
				gengduoicon: '',
				miaoshu: '',
				tuijian: [],
				kecheng: {},
				xingxiangjianshe: {},
				qingganbaike: {},
				liaomeishizhan: {},
				sijiao: {},
				xinliceshi: {},
				isend: [false, false],
				lunbotu: [],
				tubiao: [],
				issystem: 0,
				islianmeng: 0,
			}
		},
		methods: {
			async getIslianmeng() {
				let unionid = uni.getStorageSync('unionid') || '';
				let that = this;
				const json = await api.getIslianmeng({
					unionid: unionid,
				});
				this.issystem = json.issystem;
				this.islianmeng = json.islianmeng;
				uni.setStorageSync('issystem', json.issystem);
				uni.setStorageSync('islianmeng', json.islianmeng);
			},
			async getShouyekuai() {
				let unionid = uni.getStorageSync('unionid') || '';
				const json = await api.getShouyekuai({
					unionid: unionid,
				});
				this.lunbotu = json.lunbotu;
				this.tubiao = json.tubiao;
				this.miaoshu = json.miaoshu;
				this.searchicon = json.searchicon;
				this.tuijian = json.tuijian;
				this.$forceUpdate();
			},
			async getShouyeman() {
				let unionid = uni.getStorageSync('unionid') || '';
				const json = await api.getShouyeman({
					unionid: unionid,
				});
				this.kecheng = json.kecheng;
				this.xingxiangjianshe = json.xingxiangjianshe;
				this.qingganbaike = json.qingganbaike;
				this.liaomeishizhan = json.liaomeishizhan;
				this.sijiao = json.sijiao;
				this.xinliceshi = json.xinliceshi;
				this.gengduotext = json.gengduotext;
				this.gengduoicon = json.gengduoicon;
				this.$forceUpdate();
			},
			async checkUnionid() {
				let unionid = uni.getStorageSync('unionid') || '';
				let token = uni.getStorageSync('token') || '';
				if (unionid.length == 0) {
					uni.navigateTo({
						url: '/pages/shouquan'
					})
				} else {
					const json = await api.checkAppunionid({
						unionid: unionid,
						token: token,
					});
					if (json.MSG == 'NO') {
						uni.showToast({
							title: "请重新登录",
							duration: 1000
						});
						uni.setStorageSync('unionid', '');
						uni.setStorageSync('token', '');
						uni.navigateTo({
							url: '/pages/shouquan'
						})
					}
				}
			},
			changeTab() {
				if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					uni.switchTab({
						url: "./info"
					})
				} else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
					uni.switchTab({
						url: "./liaomeitaolulist"
					})
				}
			},
			tokecheng(item, e) {
				uni.navigateTo({
					url: "./kecheng?json=" + JSON.stringify(item),
				})
			},
			toxingxiang(item, e) {
				uni.navigateTo({
					url: "./xingxiangjianshe?id=" + item.id,
					success: res => {
						setTimeout(() => {
							this.xingxiangjianshe.data[e].count += 1;
						}, 1000);
					},
				})
			},
			toqingganbaike(item, e) {
				uni.navigateTo({
					url: "./baike?id=" + item.id,
					success: res => {
						setTimeout(() => {
							this.qingganbaike.data[e].count += 1;
						}, 1000);
					},
				})
			},
			toliaomei(item, e) {
				uni.navigateTo({
					url: "./liaomeishizhan?id=" + item.id,
					success: res => {
						setTimeout(() => {
							this.liaomeishizhan.data[e].count += 1;
						}, 1000);
					},
				})
			},
			tosijiao(item, e) {
				uni.navigateTo({
					url: "./sijiao?json=" + JSON.stringify(item),
				})
			},
			toxinliceshi(item, e) {
				uni.navigateTo({
					url: "./xinliceshi?id=" + item.id,
				})
			},
			fuzhituijian(e) {
				uni.setClipboardData({
					data: e,
					success: function() {
						uni.showToast({
							title: "复制成功",
							duration: 1
						});
						uni.switchTab({
							url: "/pages/searchpage"
						})
					}
				});
			},
			goTopage(page) {
				if (page == 'liaomeitaolulist') {
					uni.switchTab({
						url: "/pages/liaomeitaolulist"
					})
				} else {
					uni.navigateTo({
						url: page,
					})
				}
			},
			gotosearchpage() {
				uni.switchTab({
					url: "/pages/searchpage"
				})
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
			goToAdvert(item) {
				if (item.type == 'html') {
					uni.navigateTo({
						url: "./viewhtml?url=" + item.url,
					})
				} else if (item.type == 'image') {
					item.title = item.title.replace(",", "，");
					uni.navigateTo({
						url: "./viewimage?title=" + item.title + "&url=" + item.url,
					})
				} else if (item.type == 'ganhuo') {
					item.title = item.title.replace(",", "，");
					uni.navigateTo({
						url: "./viewganhuo?url=" + item.url + "&duration=" + item.duration + "&title=" + item.title + "&direction=" +
							item.direction,
					})
				} else {
					uni.navigateTo({
						url: 'adding'
					});
				}
			},
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
			uni.switchTab({
				url: "/pages/searchpage"
			})
		},
		async onShow() {
			let that = this;
			uni.getClipboardData({
				success: function(res) {
					var copyvalue = res.data.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
					if (copyvalue.length > 0) {
						that.inputValue = copyvalue;
					}
				}
			});
			this.getShouyeman();
		},
		async onLoad() {
			uni.setStorageSync('system', uni.getSystemInfoSync().system);
			this.getShouyekuai();
			this.checkUnionid();
			this.getIslianmeng();
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
	.home {
		background: #ffffff;
		text-align: center;
		padding-bottom: 30rpx;
	}

	.swiper {
		height: 300rpx;
	}

	.slide-image {
		width: 100%;
		height: 100%;
	}

	.tubiao {
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;

		.box {
			box-sizing: border-box;
			text-align: center;

			.image {
				width: 60rpx;
				height: 60rpx;
			}

			.title {
				font-size: 20rpx;
			}
		}
	}

	.search {
		margin-left: 10%;
		margin-top: 30rpx;
		width: 80%;
		border-radius: 50rpx;
		border: 4rpx solid #ff7e00;
		height: 80rpx;
		line-height: 100rpx;
		display: flex;

		.text {
			margin-left: 12%;
			line-height: 80rpx;
			width: 76%;
			overflow: hidden;
		}

		.image {
			margin-top: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}

	.searchmiaoshu {
		margin-top: 10rpx;
		font-size: 20rpx;
		color: #ff7e00;
	}

	.tuijiankuang {
		margin-top: 10rpx;
		display: flex;
		justify-content: space-around;

		.tuijian {
			padding-left: 10rpx;
			padding-right: 10rpx;
			font-size: 20rpx;
			color: #ffffff;
			background: #FFCC66;
			border-radius: 10rpx;
		}
	}

	.kuai3 {
		margin-top: 30rpx;

		.shouhang {
			width: 100%;
			height: 40rpx;
			display: flex;
			justify-content: space-between;

			.image1 {
				margin-left: 10rpx;
				height: 40rpx;
				width: 176rpx;
			}

			.image2 {
				margin-top: 10rpx;
				width: 20rpx;
				height: 20rpx;
			}

			.gengduo {
				color: #ff7e00;
				font-size: 26rpx;
				line-height: 40rpx;
				margin-right: 30rpx;
			}
		}

		.box {
			margin-top: 30rpx;
			margin-left: 20rpx;
			display: flex;
			width: 100%;
			min-height: 203rpx;

			.image {
				border-radius: 15rpx;
				width: 335rpx;
				height: 203rpx;
			}

			.text {
				margin-left: 30rpx;
				margin-right: 30rpx;
				margin-top: 10rpx;
				margin-bottom: 10rpx;
				text-align: left;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.bigtext {
					min-height: 80rpx;
					font-size: 26rpx;
					color: #333;
				}

				.minlan {
					width: 320rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					text-align: center;

					.laiyuan {
						font-size: 20rpx;
					}

					.yigoumai {
						width: 100rpx;
						color: #fff;
						background: #ff7e00;
						border-radius: 20rpx;
						font-size: 20rpx;
					}
				}

				.mintext {
					font-size: 24rpx;
				}
			}
		}
	}

	.kuai4 {
		margin-top: 30rpx;

		.shouhang {
			width: 100%;
			height: 40rpx;
			display: flex;
			justify-content: space-between;

			.image1 {
				margin-left: 10rpx;
				height: 40rpx;
				width: 176rpx;
			}

			.image2 {
				margin-top: 10rpx;
				width: 20rpx;
				height: 20rpx;
			}

			.gengduo {
				color: #ff7e00;
				font-size: 26rpx;
				line-height: 40rpx;
				margin-right: 30rpx;
			}
		}

		.bigbox {
			display: inline-flex;
			flex-wrap: wrap;
			align-content: space-around;
			width: 100%;

			.box {
				display: flex;
				flex-direction: column;
				align-content: space-around;
				width: 375rpx;
				text-align: left;

				.image {
					border-radius: 15rpx;
					margin: 20rpx;
					width: 335rpx;
					height: 203rpx;
				}

				.text {
					margin-left: 30rpx;
					margin-right: 30rpx;
					text-align: left;

					.bigtext {
						min-height: 80rpx;
						font-size: 26rpx;
						color: #333;
					}

					.mintext {
						margin-top: 10rpx;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
