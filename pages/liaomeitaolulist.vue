<template>
  <view class="liaomeitaolulist" @touchstart='touchStart' @touchend="touchEnd">
    <view class="tou"></view>
    <view class="kuai">
      <view class="biaoti">
        <view class="kuai_flag"></view>
        <biaoti>搭讪技巧</biaoti>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('555354659295006577')">直接开场白</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('321772450499124142')">间接开场白</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('954705093104796036')">幽默开场白</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('739210464880021256')">好奇开场白</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('641670114264877142')">筛选开场白</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('706200759532847427')">酒吧开场白</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('241970070930171655')">全环境搭讪</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('847020183663766929')">搭讪模板</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('706267352450146333')">调侃幽默</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('592714267443116829')">收号后续</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('144254242636989440')">神回复</button>
      </view>
    </view>
    <view class="kuai">
      <view class="biaoti">
        <view class="kuai_flag"></view>
        <biaoti>前期策略</biaoti>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('916767903321494437')">高价值展示</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('559231030230830323')">推拉</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('139591450027399058')">打压</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('421622887787204420')">服从性测试</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('216906182379993169')">筛选</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('754520455982876815')">一致性测试</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('329167014077745490')">引导追逐</button>
      </view>
    </view>
    <view class="kuai">
      <view class="biaoti">
        <view class="kuai_flag"></view>
        <biaoti>聊天互动</biaoti>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('141681688359599075')">冷读</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('180702325838429030')">好感测试</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('667468209855356183')">爱情观</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('705942836098456401')">采访式谈话</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('267105209307372401')">角色扮演</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('653921079302898593')">情感共鸣</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('846016084371072519')">赞美话术</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('268593572301089945')">调情话术</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('306065522251726604')">走心话术</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('631577800116926043')">张力话题</button>
      </view>
    </view>
    <view class="kuai">
      <view class="biaoti">
        <view class="kuai_flag"></view>
        <biaoti>约会技巧</biaoti>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('208309227486193985')">邀约话术</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('983532548950403603')">浪漫创意约会</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('270143440366503396')">约会碰面</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('673553777846193566')">约会互动</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('389176542212476170')">约会冷场</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('427667882094816570')">约会后话术</button>
      </view>
    </view>
    <view class="kuai">
      <view class="biaoti">
        <view class="kuai_flag"></view>
        <biaoti>恋爱成功</biaoti>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('979666957014117155')">轻微触碰</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('217880598991092092')">引导女生触碰</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('807266584143880246')">化解触碰尴尬</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('931398425196446021')">牵手</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('917517756502853241')">接吻</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('937003359675300134')">回家</button>
      </view>
      <view class="kuai_list">
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('223517300450035940')">酒店</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('299594360911260275')">单独空间相处</button>
        <button class="weui-btn" type="default" size="mini" @tap="gotoLilun('512829660730509238')">化解最后尴尬</button>
      </view>
    </view>
    <view class="tou"></view>
  </view>
</template>

<script>
  import api from 'common/api';
  import tip from 'common/tip';
  export default {
    methods: {
      changeTab() {
        if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          uni.switchTab({
            url: "./home"
          })
        } else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          uni.switchTab({
            url: "./searchpage"
          })
        }
      },
      gotoLilun(obj) {
        uni.navigateTo({
          url: "./liaomeitaolu?json=" + JSON.stringify({
            'cid': obj
          })
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
  .liaomeitaolulist {
    background: #ffffff;
    .tou {
      height: 1rpx;
    }
  }
  .kuai {
    margin: 20rpx 20rpx 20rpx 20rpx;
    background: #dfdfdf;
    border-radius: 20rpx;
    .biaoti {
      font-weight: bolder;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 30rpx;
      color: #000;
      .kuai_flag {
        margin-left: 20rpx;
        margin-right: 20rpx;
        width: 5rpx;
        height: 28rpx;
        background-color: #000000;
      }
    }
    .kuai_list {
      color: #000000;
      .weui-btn {
        align-items: center;
        margin-top: 0rpx;
        margin-bottom: 20rpx;
        margin-left: 2.5%;
        width: 30%;
        height: 62rpx;
        line-height: 62rpx;
        background: #ffffff;
        font-size: 28rpx;
        padding: 0rpx;
      }
    }
  }
</style>