<script>
	import api from 'common/api';
	import tip from 'common/tip';
	export default {
		onLaunch: function() {
			//#ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //锁定屏幕方向 
			//#endif
			// 部分配置需要从服务器加载
			//#ifdef APP-PLUS
			// APP检测更新 具体可以参考：https://ask.dcloud.net.cn/article/35667

			plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {

				// const json = await api.checkVersion({
				// 	version: widgetInfo.version, // 当前应用的版本  
				// 	imei: plus.device.imei,
				// 	os: plus.os.name // OS环境 ios / android 
				// });
				// if (json.MSG=='') {
				// 	uni.downloadFile({
				// 		url: res.data.wgtUrl,
				// 		success: (downloadResult) => {
				// 			if (downloadResult.statusCode === 200) {
				// 				plus.runtime.install(downloadResult.tempFilePath, {
				// 					force: false
				// 				}, (d) => {
				// 					console.log('install success...');
				// 					plus.runtime.restart();
				// 				}, (e) => {
				// 					console.error('install fail...');
				// 				})
				// 			}
				// 		}
				// 	})
				// }
			});
			//#endif
		},
	}
</script>

<style>
</style>
