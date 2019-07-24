<template>
	<view class="container">
		<view v-for="(item,index) in baikeList" :key="index">
			<view class="wenzhang" @tap="goTohtml(item)">
				<view class="kuai">
					<view class="textkuang">
						<text selectable='true' class="title">{{item.title}}</text>
						<view class="laiyuan">{{doctype[item.doctype]}}</view>
					</view>
					<image class="image" :src="item.image" mode="scaleToFill" lazy-load="false" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			baikeList: [],
		},
		data() {
			return {
				doctype: {
					'baike': '情感百科',
					'wenda': '问答',
					'xinliceshi': '心理测试',
					'xingxiangjianshe': '形象建设',
					'liaomeishizhan': '撩妹实战'
				},
			}
		},
		methods: {
			goTohtml(item) {
				this.$emit('goTohtml',item);
			},
		},
	}
</script>

<style lang="less">
	.container {
		background: #ffffff;
		border-top: 6px solid #efefef;
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
						text-align: center;
						width: 100rpx;
						font-size: 20rpx;
						color: #fff;
						background: #ff7e00;
						border-radius: 20rpx;
					}
				}
				.image {
					margin-left: 16rpx;
					height: 138rpx;
					width: 250rpx;
				}
			}
		}
	}
</style>
