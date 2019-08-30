<template>
	<view class="shouquan">
		<view class="denglu">请先登录</view>
		<image class="authorize-icon" src="../static/weixin.png" @click="Login" />
	</view>
</template>

<script>
	import api from 'common/api';
	import tip from 'common/tip';
	export default {
		methods: {
			async getAppunionid(e) {
				const json = await api.getAppunionid({
					code: e.code,
				});
				uni.setStorageSync('unionid', json.data.unionid);
				uni.setStorageSync('token', json.data.token);
				uni.setStorageSync('userinfo', json.data.userinfo);
				uni.switchTab({
					url: "/pages/home"
				})
			},
			async Login() {
				var all;
				var Service;
				plus.oauth.getServices((Services) => {
					all = Services
					Object.keys(all).some((key) => {
						if (all[key].id == 'weixin') {
							Service = all[key]
						}
					})
					Service.authorize((e) => {
						this.getAppunionid(e);
					}, function(e) {
						plus.nativeUI.alert("尊敬的用户，为确保对您的服务质量，请允许我们获取您的公开信息");
					});
				}, function(err) {
					plus.nativeUI.alert("尊敬的用户，为确保对您的服务质量，请允许我们获取您的公开信息");
				});
			},
		},
		onLoad() {
			uni.setStorageSync('unionid', '');
			uni.setStorageSync('token', '');
			uni.setStorageSync('userInfo', {});
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
	.shouquan {
		.denglu {
			width: 100%;
			text-align: center;
			position: fixed;
			bottom: 0;
			padding-bottom: 500rpx;
		}

		.authorize-icon {
			position: fixed;
			bottom: 0;
			left: 311rpx;
			width: 128rpx;
			height: 128rpx;
			display: block;
			margin: 0 auto;
			padding-bottom: 300rpx;
		}
	}
</style>
