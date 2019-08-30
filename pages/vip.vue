<template>
	<view class="vip">
		<view class="viphang">
			<button v-bind:class="currentTab==1 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(1)">
				<view v-bind:class="currentTab==1 ? 'viptextactive' : 'viptext'">终身会员</view>
				<view v-bind:class="currentTab==1 ? 'viptextactive' : 'viptext'">￥199.00</view>
			</button>
			<button v-bind:class="currentTab==2 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(2)">
				<view v-bind:class="currentTab==2 ? 'viptextactive' : 'viptext'">分手挽回(送终身会员)</view>
				<view v-bind:class="currentTab==2 ? 'viptextactive' : 'viptext'">￥1999.00</view>
			</button>
		</view>
		<view class="viphang">
			<button v-bind:class="currentTab==3 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(3)">
				<view v-bind:class="currentTab==3 ? 'viptextactive' : 'viptext'">私教1个月(送终身会员)</view>
				<view v-bind:class="currentTab==3 ? 'viptextactive' : 'viptext'">￥499.00</view>
			</button>
			<button v-bind:class="currentTab==4 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(4)">
				<view v-bind:class="currentTab==4 ? 'viptextactive' : 'viptext'">私教3个月(送终身会员)</view>
				<view v-bind:class="currentTab==4 ? 'viptextactive' : 'viptext'">￥999.00</view>
			</button>
		</view>
		<view class="viphang">
			<button v-bind:class="currentTab==5 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(5)">
				<view v-bind:class="currentTab==5 ? 'viptextactive' : 'viptext'">私教1年(送终身会员)</view>
				<view v-bind:class="currentTab==5 ? 'viptextactive' : 'viptext'">￥2999.00</view>
			</button>
			<button v-bind:class="currentTab==6 ? 'vipkuangactive' : 'vipkuang'" @tap="swichtab(6)">
				<view v-bind:class="currentTab==6 ? 'viptextactive' : 'viptext'">联盟会员(含私教终身)</view>
				<view v-bind:class="currentTab==6 ? 'viptextactive' : 'viptext'">￥4999.00</view>
			</button>
		</view>
		<button class="zhifu" @tap="weixinzhifu">立即支付</button>
		<view class="tequan">
			会员特权
			<view class="tequanneirong" v-if="currentTab==1">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、20万+条撩妹话术可供搜索</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、上万+条撩妹套路可供参考</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、百万+张逗趣表情可供搜索</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、丰富的聊天实战案例</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>5、丰富的展示面案例</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>6、丰富的恋爱百科知识</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>7、丰富的土味情话</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>8、丰富的心理测试</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>9、500人答疑群</view>
			</view>
			<view class="tequanneirong" v-if="currentTab==2">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、初步真实情感信息收集</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>5、电话语音学员深入沟通</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>6、导师团队开会分析评估制定具体方案</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>7、专职导师监督指导</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>8、学员及时反馈导师改进方案</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>9、总结进度给出建议</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>10、挽回成功</view>
			</view>
			<view class="tequanneirong" v-if="currentTab==3">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（1个月）</view>
			</view>
			<view class="tequanneirong" v-if="currentTab==4">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（3个月）</view>
			</view>
			<view class="tequanneirong" v-if="currentTab==5">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（1年）</view>
			</view>
			<view class="tequanneirong" v-if="currentTab==6">
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（终身）</view>
				<view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>5、联盟会员专属服务</view>
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
				nowtime: 0,
				currentTab: 1,
				paySign_data: {},
				ioswenan: '',
				detail: ['非会员', '终身会员', '分手挽回(送终身会员)', '私教1个月(送终身会员)', '私教3个月(送终身会员)', '私教1年(送终身会员)', '联盟会员(含私教终身)'],
			}
		},
		methods: {
			tiaoqizhifu() {
				uni.requestPayment({
					timeStamp: this.paySign_data.timeStamp,
					nonceStr: this.paySign_data.nonceStr,
					package: this.paySign_data.package,
					signType: this.paySign_data.signType,
					paySign: this.paySign_data.paySign,
					'success': function(res) {
						tip.confirm('恭喜您已开通恋爱联盟会员，可以在“个人==》导师微信”里扫码添加导师微信，这是您的会员特权，导师将把您加入答疑交流群，为您提供更多恋爱能力~');
						uni.navigateBack({
							delta: 1
						})
					},
				})
			},
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
			async get_prepay_id() {
				var timestamp = Date.parse(new Date());
				if (timestamp - this.nowtime < 3000) {
					return false;
				} else {
					this.nowtime = timestamp;
				}
				let unionid = uni.getStorageSync('unionid') || '';
				if (unionid == '') {
					uni.navigateTo({
						url: '/pages/shouquan'
					})
					return false;
				}
				const json = await api.get_prepay_id({
					'unionid': unionid,
					'zhifutype': this.currentTab,
					'detail': this.detail[this.currentTab],
				});
				this.paySign_data = json.data;
				if (json.MSG == 'nophoneNumber') {
					uni.navigateTo({
						url: '/pages/phonenumber'
					});
				} else {
					this.tiaoqizhifu();
				}
			},
			weixinzhifu() {
				// this.get_prepay_id();
				if (plus.os.name == 'Android') {
					uni.showModal({
						title: '温馨提示',
						confirmText: '跳转',
						content: '目前安卓端APP暂时只支持在微信小程序里面支付，感谢谅解和支持~',
						showCancel: false,
						success: function(res) {
							let obj = plus.android.runtimeMainActivity(); //获取应用主Activity实例对象
							plus.android.invoke('com.szyzkj.lianailianmeng.Tiaozhuanxiaochengxu', 'launchMiniProgram', obj, 'pages/vip');
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
								summary: "http://www.lianaizhuli.com/huiyuan",
							});
						}
					});
				}
			},
			swichtab(e) {
				this.currentTab = e;
			}
		},
		onShow() {
			var phoneNumber = uni.getStorageSync('phoneNumber');
			if (phoneNumber == 1) {
				uni.setStorageSync('phoneNumber', 0);
				this.tiaoqizhifu();
			}
		},
		onLoad() {
			this.huoquwenan();
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
	.vip {
		text-align: center;
		margin-top: 0rpx;
		background: #ffffff;

		.zhifu {
			background: #09BB07;
			color: #ffffff;
			border-radius: 20rpx;
			margin-top: 28rpx;
			width: 60%;
		}

		.tequan {
			margin-top: 20rpx;
			color: #000000;
		}

		.tequanneirong {
			font-size: 28rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
			text-align: left;

			.tequantext {
				color: #000000;
			}
		}

		.viphang {
			padding-top: 20rpx;
			display: flex;
			justify-content: space-around;
		}

		.vipkuang {
			padding: 0rpx;
			width: 46%;
			border-radius: 20rpx;
			border: 1rpx solid;
		}

		.vipkuangactive {
			background: #dcf1ca;
			color: #09BB07;
			padding: 0rpx;
			width: 46%;
			border-radius: 20rpx;
			border: 1rpx solid;
		}

		.viptext {
			font-size: 28rpx;
			text-align: center;
			padding: 0rpx;
		}

		.viptextactive {
			background: #dcf1ca;
			color: #09BB07;
			font-size: 28rpx;
			text-align: center;
			padding: 0rpx;
		}
	}
</style>
