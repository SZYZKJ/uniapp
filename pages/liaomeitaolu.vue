<template>
	<view class="liaomeitaolu">
		<swiper class="swiper" @change="bindchange" previous-margin="50rpx" next-margin="50rpx" circular="true">
			<block v-for="(item,index) in LilunList" :key="index">
				<swiper-item>
					<view class="current">{{index+1}}/{{LilunList.length}}</view>
					<view class="secondkuai">
						<view class="duihua">
							<view class="biaoti" @tap="copycontent(item.title)">
								<text selectable="true">{{item.title}}\n</text>
							</view>
							<view class="fangshi" @tap="copycontent(item.fangshi)"><a style="color:#333;">适合情景：</a><text selectable="true">{{item.fangshi}}\n</text></view>
							<view class="fangshi" @tap="copycontent(item.xiaoguo)"><a style="color:#333;">使用效果：</a><text selectable="true">{{item.xiaoguo}}\n</text></view>
							<view class="jiexi">
								<a style="color:#333;">具体做法：</a>
							</view>
							<view v-for="(minitem,minindex) in item.datalist" :key="minindex">
								<view class="nv" v-if="minitem.person==0">
									<image class="item_img" src="../images/nv.png" />
									<view class="textkuang" @tap="copycontent(minitem.content)">
										<text class="text" selectable="true">{{minitem.content}}</text>
									</view>
								</view>
								<view class="nan" v-if="minitem.person==1">
									<image class="item_img" src="../images/nan.png" />
									<view class="textkuang" @tap="copycontent(minitem.content)">
										<text class="text" selectable="true">{{minitem.content}}</text>
									</view>
								</view>
							</view>
							<view v-if="item.content.length>0">
								<view class="jiexi">
									<a style="color:#333;">解析：</a>
								</view>
								<view class="content" @tap="copycontent(item.content)">
									<text selectable="true">{{item.content}}</text>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import api from 'common/api';
	import tip from 'common/tip';
	export default {
		data() {
			return {
				cid: 107,
				title: "恋爱联盟",
				LilunList: [],
				scroll: "",
				isend: false,
				issystem: 0,
				title: {
					"555354659295006577": "直接开场白",
					"321772450499124142": "间接开场白",
					"954705093104796036": "幽默开场白",
					"706200759532847427": "酒吧开场白",
					"241970070930171655": "全环境搭讪",
					"847020183663766929": "搭讪模板",
					"592714267443116829": "收号后续",
					"739210464880021256": "好奇开场白",
					"641670114264877142": "筛选开场白",
					"706267352450146333": "调侃幽默",
					"916767903321494437": "高价值展示",
					"559231030230830323": "推拉",
					"139591450027399058": "打压",
					"421622887787204420": "服从性测试",
					"216906182379993169": "筛选",
					"754520455982876815": "一致性测试",
					"329167014077745490": "引导追逐",
					"141681688359599075": "冷读",
					"653921079302898593": "情感共鸣",
					"705942836098456401": "采访式谈话",
					"267105209307372401": "角色扮演",
					"667468209855356183": "爱情观",
					"846016084371072519": "赞美话术",
					"180702325838429030": "好感测试",
					"268593572301089945": "调情话术",
					"306065522251726604": "走心话术",
					"631577800116926043": "张力话题",
					"208309227486193985": "邀约话术",
					"270143440366503396": "约会碰面",
					"673553777846193566": "约会互动",
					"389176542212476170": "约会冷场",
					"427667882094816570": "约会后话术",
					"983532548950403603": "浪漫创意约会",
					"979666957014117155": "轻微触碰",
					"931398425196446021": "牵手",
					"917517756502853241": "接吻",
					"217880598991092092": "引导女生触碰",
					"807266584143880246": "化解触碰尴尬",
					"937003359675300134": "回家",
					"223517300450035940": "酒店",
					"299594360911260275": "单独空间相处",
					"512829660730509238": "化解最后尴尬",
					"144254242636989440": "神回复"
				}
			}
		},
		methods: {
			confirm() {
				if (this.issystem == 1) {
					uni.showModal({
						title: "开通会员",
						content: "您当前为非会员，点击开通，解锁更多会员专属服务，为您提供更多恋爱能力~",
						showCancel: true,
						cancelText: "取消",
						confirmText: "开通",
						success: function(res) {
							if (res.cancel) {} else {
								uni.navigateTo({
									url: "/pages/vip"
								});
							}
						},
						fail: function(res) {}, //接口调用失败的回调函数
						complete: function(res) {} //接口调用结束的回调函数（调用成功、失败都会执行）
					});
				} else {
					uni.showModal({
						title: "温馨提示",
						content: "您当前为非会员，无法为您提供更多恋爱能力~",
						showCancel: false,
						confirmText: "确定",
						success: function(res) {
							if (res.cancel) {} else {}
						},
						fail: function(res) {}, //接口调用失败的回调函数
						complete: function(res) {} //接口调用结束的回调函数（调用成功、失败都会执行）
					});
				}
			},
			async getLiaomeitaoluList() {
				let unionid = uni.getStorageSync('unionid') || '';
				if (unionid == '') {
					uni.navigateTo({
						url: "/pages/shouquan"
					});
					return false;
				}
				const json = await api.getLiaomeitaoluList({
					unionid: unionid,
					cid: this.cid,
					scroll: this.scroll
				});
				if (json.MSG == "OK") {
					if (json.data.length < 10) this.isend = true;
					this.LilunList = this.LilunList.concat(json.data);
					this.scroll = json.scroll;
					this.$forceUpdate();
				} else {
					this.confirm();
				}
			},
			bindchange(e) {
				if (e.detail.current + 1 == this.LilunList.length) {
					this.getLiaomeitaoluList();
				}
				this.$forceUpdate();
			},
			copycontent(GG) {
				var that = this;
				uni.setClipboardData({
					data: GG,
					success: function() {
						uni.showToast({
							title: "复制成功",
							duration: 500
						});
					}
				});
			}
		},
		onLoad(options) {
			var json = JSON.parse(options.json);
			this.cid = json.cid;
			uni.setNavigationBarTitle({
				title: this.title[this.cid]
			});
			this.getLiaomeitaoluList();
			this.issystem = uni.getStorageSync('issystem');
		},
		onShareAppMessage() {
			return {
				title: "恋爱联盟",
				path: "/pages/home"
			};
		}
	}
</script>

<style lang="less">
	.liaomeitaolu {
		text-align: justify;
		background: rgba(0, 0, 0, 0.1);

		.textend {
			padding-top: 30rpx;
			padding-bottom: 30rpx;
			text-align: center;
		}
	}

	.swiper {
		min-height: 5000rpx;
	}

	.current {
		text-align: center;
		color: #ff7e00;
		font-size: 30rpx;
	}

	.secondkuai {
		border-radius: 20rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		background: #ffffff;

		.duihua {
			.biaoti {
				text-align: center;
				white-space: pre-wrap;
				margin-bottom: 10rpx;
				font-weight: bolder;
				font-size: 30rpx;
				color: #333;
			}

			.fangshi {
				white-space: pre-wrap;
				margin-bottom: 10rpx;
				font-weight: bolder;
				font-size: 30rpx;
				color: #ff7e00;
			}

			.jiexi {
				white-space: pre-wrap;
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				font-weight: bolder;
				font-size: 30rpx;
				color: #333;
			}

			.nv {
				line-height: 25px;
				display: flex;
				left: 0;
			}

			.nan {
				line-height: 25px;
				display: flex;
				left: 0;
			}

			.item_img {
				padding-top: 10rpx;
				padding-right: 10rpx;
				width: 35rpx;
				height: 35rpx;
			}

			.textkuang {
				width: 100%;
			}

			.text {
				font-size: 28rpx;
				color: #333;
			}

			.vip {
				margin-top: 20rpx;
				text-align: center;

				.item_img {
					padding: 0rpx;
					border-radius: 20rpx;
					width: 368rpx;
					height: 248rpx;
				}
			}

			.content {
				padding-left: 20rpx;
				padding-right: 20rpx;
				padding-bottom: 20rpx;
				font-size: 28rpx;
			}
		}
	}
</style>
