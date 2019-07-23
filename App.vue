<script>
	export default {
		onLaunch: function() {
			uni.setStorageSync('unionid','ofIsD1YLw3q_1v4d2NgX9GrS3ZEM');
			//#ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //锁定屏幕方向 
			//#endif
			// 部分配置需要从服务器加载

			//#ifdef APP-PLUS
			// APP检测更新 具体可以参考：https://ask.dcloud.net.cn/article/35667
			plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
				this.$Request.post(this.$api.common.update, {
					appid: widgetInfo.appid, //当前应用的APPID
					version: widgetInfo.version, // 当前应用的版本  
					name: widgetInfo.name, // 当前应用的名称 
					imei: plus.device.imei, 
					os: plus.os.name // OS环境 ios / android 
				}).then((res) => {
					if (res.code == 200) {
						uni.downloadFile({
							url: res.data.wgtUrl,
							success: (downloadResult) => {
								if (downloadResult.statusCode === 200) {
									plus.runtime.install(downloadResult.tempFilePath, {
										force: false
									}, (d) => {
										console.log('install success...');
										plus.runtime.restart();
									}, (e) => {
										console.error('install fail...');
									})
								}
							}
						})
					}
				})
			});
			//#endif
		},
	}
</script>

<style>
</style>
