<template>
    <view class="tequan">
        <view class="tequan">您当前为</view>
        <view class="tequanming">{{detail[vipdengji]}}</view>
        <view v-if="vipdengji>0" class="tequan">您的会员到期时间为</view>
        <view v-if="vipdengji>0" class="tequanming">{{viptime}}</view>
        <view v-if="vipdengji<6">
            <view class="kaitongtext">点击升级，解锁更多会员专属服务，为您提供更多恋爱能力~</view>
            <navigator class="vip" url="/pages/vip">升级会员</navigator>
        </view>
        <view v-if="vipdengji>0" class="tequankuang">
            您的特权
            <view class="tequanneirong" v-if="vipdengji==1">
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
            <view class="tequanneirong" v-if="vipdengji==2">
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
            <view class="tequanneirong" v-if="vipdengji==3">
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（1个月）</view>
            </view>
            <view class="tequanneirong" v-if="vipdengji==4">
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（3个月）</view>
            </view>
            <view class="tequanneirong" v-if="vipdengji==5">
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>1、小程序终身会员</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>2、500人高级答疑群</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>3、恋爱联盟课程共9门</view>
                <view class="tequantext"><text style="font-weight: bolder;font-size: 38rpx;color:#09BB07;">✔ </text>4、恋爱挽回婚姻一对一私教指导（1年）</view>
            </view>
            <view class="tequanneirong" v-if="vipdengji==6">
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
                detail: ['非会员', '终身会员', '分手挽回(送终身会员)', '私教1个月(送终身会员)', '私教3个月(送终身会员)', '私教1年(送终身会员)', '联盟会员(含私教终身)'],
                vipdengji: 0,
                viptime: '',
            }
        },
        methods: {
            async getTequan() {
                let unionid = uni.getStorageSync('unionid') || '';
                if (unionid == '') {
                    uni.navigateTo({
                        url: '/pages/shouquan'
                    })
                    return false;
                }
                const json = await api.getTequan({
                    unionid: unionid,
                })
                this.vipdengji = json.vipdengji;
                this.viptime = json.viptime;
            },
        },
        onLoad() {
            this.getTequan();
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
    .tequan {
        align-items: center;
        text-align: center;
        margin-top: 0rpx;
        background: #ffffff;
    }
    .kaitongtext {
        margin-top: 50rpx;
        margin-left: 200rpx;
        margin-right: 200rpx;
        color: #000000;
    }
    .vip {
        height: 60rpx;
        background: #ff7e00;
        color: #ffffff;
        border-radius: 20rpx;
        margin-top: 100rpx;
        padding-top: 16rpx;
        width: 60%;
        margin-left: 20%;
    }
    .tequankuang {
        padding-top: 100rpx;
        color: #000000;
    }
    .tequanming {
        padding-top: 50rpx;
        color: #ff7e00;
    }
    .tequanneirong {
        margin-top: 20rpx;
        margin-left: 138rpx;
        text-align: left;
        .tequantext {
            color: #000000;
        }
    }
</style>
