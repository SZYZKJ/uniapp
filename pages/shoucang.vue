<template>
  <view class="shoucang">
    <view class="bianji" v-if="bianji" @tap="changbianji">编辑</view>
    <view class="bianji" v-else @tap="changbianji">取消</view>
    <view class="tab-h">
      <view v-for="(item,index) in tabname" :key="index" v-bind:class="currentTab==index?'tab-itemactive':'tab-item'" @tap="swichNav(index)">{{item.name}}</view>
    </view>
    <view class="jiange" @touchstart='touchStart' @touchend="touchEnd">
      <view v-for="(item,index) in DianzanshoucangList" :key="index">
        <view v-if="currentTab==0&&item.shoucang" class="wenzhang">
          <view class="kuai" @tap="goTohtml(item)">
            <view class="textkuang">
              <text selectable='true' class="title">{{item.title}}</text>
              <view class="laiyuan">{{doctype[item.doctype]}}</view>
            </view>
            <image class="image" :src="item.image" mode="scaleToFill" lazy-load="false" />
          </view>
          <view class="xuanze0" v-if="bianji==0&&item.xuanze==0" @tap="dianjixuanze(index)"></view>
          <view class="xuanze1" v-if="bianji==0&&item.xuanze==1" @tap="dianjixuanze(index)"></view>
        </view>
        <view v-if="currentTab==1&&item.dianzan" class="wenzhang">
          <view class="kuai" @tap="goTohtml(item)">
            <view class="textkuang">
              <text selectable='true' class="title">{{item.title}}</text>
              <view class="laiyuan">{{doctype[item.doctype]}}</view>
            </view>
            <image class="image" :src="item.image" mode="scaleToFill" lazy-load="false" />
          </view>
          <view class="xuanze0" v-if="bianji==0&&item.xuanze==0" @tap="dianjixuanze(index)"></view>
          <view class="xuanze1" v-if="bianji==0&&item.xuanze==1" @tap="dianjixuanze(index)"></view>
        </view>
      </view>
    </view>
    <view class="textend">恋爱脱单上恋爱联盟</view>
    <view v-if="bianji==0" class="fixed-footer">
      <view class="btngroup-prev-next">
        <view @tap="querenqingkong" class="btn-prev">一键清空</view>
        <view @tap="querenshanchu" class="btn-next">删除（{{shanchushu}}）</view>
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
        bianji: 1,
        shanchushu: 0,
        xuanze: [],
        title: '',
        scrollLeft: 0,
        tabname: [{
          'listtype': 'shoucang',
          'name': '收藏'
        }, {
          'listtype': 'dianzan',
          'name': '点赞'
        }],
        doctype: {
          'baike': '情感百科',
          'wenda': '问答',
          'xinliceshi': '心理测试',
          'xingxiangjianshe': '形象建设',
          'liaomeishizhan': '撩妹实战'
        },
        DianzanshoucangList: [],
        currentTab: 0,
      }
    },
    methods: {
      querenqingkong() {
        uni.showModal({
          title: '一键清空',
          content: '确认要清空吗？清空后将永久无法找回，请谨慎操作。',
          showCancel: true,
          success: res => {
            for (var i = 0; i < this.DianzanshoucangList.length; ++i) {
              if (this.currentTab == 0 && this.DianzanshoucangList[i].shoucang) {
                this.DianzanshoucangList[i].shoucang = 0;
              }
              if (this.currentTab == 1 && this.DianzanshoucangList[i].dianzan) {
                this.DianzanshoucangList[i].dianzan = 0;
              }
            }
            this.bianji = 1;
            let unionid = uni.getStorageSync('unionid') || '';
            if (unionid == '') {
              uni.navigateTo({
                url: '/pages/shouquan'
              })
              return false;
            }
            api.setDianzanshoucang({
              unionid: unionid,
              DianzanshoucangList: this.DianzanshoucangList,
            })
          },
        });
      },
      querenshanchu() {
        uni.showModal({
          title: '删除',
          content: '确认删除' + this.shanchushu + '条记录吗？',
          showCancel: true,
          success: res => {
            for (var i = 0; i < this.DianzanshoucangList.length; ++i) {
              if (this.currentTab == 0 && this.DianzanshoucangList[i].xuanze == 1) {
                this.DianzanshoucangList[i].shoucang = 0;
              }
              if (this.currentTab == 1 && this.DianzanshoucangList[i].xuanze == 1) {
                this.DianzanshoucangList[i].dianzan = 0;
              }
            }
            this.bianji = 1;
            let unionid = uni.getStorageSync('unionid') || '';
            if (unionid == '') {
              uni.navigateTo({
                url: '/pages/shouquan'
              })
              return false;
            }
            api.setDianzanshoucang({
              unionid: unionid,
              DianzanshoucangList: this.DianzanshoucangList
            })
          },
        });
      },
      async getDianzanshoucangList() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: '/pages/shouquan'
          })
          return false;
        }
        const json = await api.getDianzanshoucangList({
          unionid: unionid,
        })
        this.bianji = 1;
        this.DianzanshoucangList = json.data;
        for (var i = 0; i < this.DianzanshoucangList.length; ++i)
          this.DianzanshoucangList[i].xuanze = 0;
        this.shanchushu = 0;
      },
      changeTab() {
        if (this.endX - this.startX > 50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          if (this.currentTab > 0) {
            this.currentTab--;
          }
        } else if (this.endX - this.startX < -50 && Math.abs(this.endY - this.startY) * 3 < Math.abs(this.endX - this.startX)) {
          if (this.currentTab < this.tabname.list.length - 1) {
            this.currentTab++;
          }
        }
      },
      dianjixuanze(e) {
        this.DianzanshoucangList[e].xuanze = 1 - this.DianzanshoucangList[e].xuanze;
        if (this.DianzanshoucangList[e].xuanze)
          this.shanchushu += 1;
        else this.shanchushu -= 1;
      },
      changbianji() {
        this.bianji = 1 - this.bianji;
        this.shanchushu = 0;
        for (var i = 0; i < this.DianzanshoucangList.length; ++i)
          this.DianzanshoucangList[i].xuanze = 0;
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
      goTohtml(item) {
        if (this.bianji == 0) return;
        if (item.doctype == 'wenda')
          uni.navigateTo({
            url: "./wenda?id=" + item.docid
          })
        else if (item.doctype == 'baike')
          uni.navigateTo({
            url: "./baike?id=" + item.docid
          })
        else if (item.doctype == 'xingxiangjianshe')
          uni.navigateTo({
            url: "./xingxiangjianshe?id=" + item.docid
          })
        else if (item.doctype == 'liaomeishizhan')
          uni.navigateTo({
            url: "./liaomeishizhan?id=" + item.docid
          })
        else if (item.doctype == 'xinliceshi')
          uni.navigateTo({
            url: "./xinliceshi?id=" + item.docid
          })
      },
      swichNav(e) {
        var cur = e;
        if (this.currentTab == cur) {
          return false;
        } else {
          for (var i = 0; i < this.DianzanshoucangList.length; ++i)
            this.DianzanshoucangList[i].xuanze = 0;
          this.shanchushu = 0;
          this.currentTab = cur;
        }
      },
    },
    onPullDownRefresh() {
      uni.stopPullDownRefresh();
      this.getQingganbaikeList(1);
    },
    onLoad() {
      this.getDianzanshoucangList();
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
  .shoucang {
    background: #ffffff;
    .bianji {
      width: 100rpx;
      height: 80rpx;
      ;
      z-index: 100;
      position: fixed;
      top: 0rpx;
      left: 650rpx;
      color: #333;
    }
    .tab-h {
      position: fixed;
      top: 0rpx;
      display: flex;
      justify-content: space-around;
      height: 80rpx;
      width: 100%;
      font-size: 28px;
      background: #ffffff;
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
    .jiange {
      margin-top: 80rpx;
      border-top: 2px solid #efefef;
    }
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
      .xuanze0 {
        position: relative;
        top: -100rpx;
        left: 300rpx;
        width: 80rpx;
        height: 80rpx;
        border-radius: 50rpx;
        border: 5rpx solid #ff7e00;
      }
      .xuanze1 {
        position: relative;
        top: -100rpx;
        left: 300rpx;
        background: #ff7e00;
        width: 88rpx;
        height: 88rpx;
        border-radius: 50rpx;
      }
    }
    .textend {
      padding-top: 30rpx;
      padding-bottom: 30rpx;
      text-align: center;
    }
    .fixed-footer {
      z-index: 99;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .btngroup-prev-next {
      position: relative;
      width: 100%;
      height: 90rpx;
      line-height: 90rpx;
      text-align: center;
      color: #535355;
      font-size: 34rpx;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 0;
      display: flex;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
    }
    .btn-prev {
      position: relative;
      width: 100%;
      height: 90rpx;
      flex: 1;
      background-color: #fff;
      border-right: 1px solid #eaeaea;
      overflow: hidden;
    }
    .btn-next {
      position: relative;
      width: 100%;
      height: 90rpx;
      flex: 1;
      background-color: #fff;
      overflow: hidden;
    }
  }
</style>
