<template>
  <view class="xinliceshi">
    <view v-if="isceshi==0" class="shouxian">
      <view class="title">
        {{xinliceshi.title}}
      </view>
      <view class="image">
        <view v-html="xinliceshi.image"></view>
      </view>
      <view class="text">{{xinliceshi.shortDescribe}}</view>
      <view class="kaishiceshi" @tap="changeceshi">开始测试</view>
    </view>
    <view v-if="isceshi==1" class="title">
      {{xinliceshi.title}}
    </view>
    <view v-if="isceshi==1" class="timu">
      <view class="timutitle">{{timu.index+1}}、 {{timu.title}}</view>
      <view v-for="(item,index) in timu.options" :key="index">
        <view class="zixiang" @tap="xuanzemethod(index)">
          <view class="xuanxiang">{{item.title}}</view>
          <view class="xuanze1" v-if="timu.xuanze==index"></view>
          <view class="xuanze0" v-else></view>
        </view>
      </view>
      <view class="tijiaokuang">
        <view class="shangyiti" v-if="xuanze.length" @tap="shangyiti">上一题</view>
        <view class="tijiao" v-if="tijiao" @tap="tijiaoceshi">提交</view>
      </view>
    </view>
    <view v-if="isceshi==1" class="wanchenglv">{{timu.index+1}}/{{xinliceshi.questions.length}}</view>
    <view v-if="isceshi==2" class="xinliceshi">
      <view class="title">
        {{xinliceshi.title}}
      </view>
      <view class="image">
        <view v-html="xinliceshi.image"></view>
      </view>
      <view class="bigtext">{{ceshidaan.result.title}}</view>
      <view class="text">{{ceshidaan.result.content}}</view>
      <view class="kaishiceshi" @tap="changeceshi">再测一次</view>
      <view class="dikuang">
        <view class="shoucangkuang">
          <image class="shoucang" @tap="gaibiandianzan" v-if="dianzan" src="https://www.lianaizhuli.com/yidianzan.png" />
          <image class="shoucang" @tap="gaibiandianzan" v-else src="https://www.lianaizhuli.com/weidianzan.png" />
          <view>{{xinliceshi.dianzan}}</view>
        </view>
        <view class="shoucangkuang">
          <image class="shoucang" @tap="gaibianshoucang" v-if="shoucang" src="https://www.lianaizhuli.com/yishoucang.png" />
          <image class="shoucang" @tap="gaibianshoucang" v-else src="https://www.lianaizhuli.com/weishoucang.png" />
          <view>{{xinliceshi.shoucang}}</view>
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
        isceshi: 0,
        tijiao: 0,
        ceshiid: '',
        xinliceshi: {},
        xuanze: [],
        timu: {},
        score: 0,
        ceshidaan: {},
        ceshitype: '',
        dianzan: 0,
        shoucang: 0,
      }
    },
    methods: {
      async getXinliceshi() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getXinliceshi({
          unionid: unionid,
          ceshiid: this.ceshiid,
        });
        this.xinliceshi = json.data;
        this.xinliceshi.image = '<img style="max-width:100%;height:auto;" src="' + this.xinliceshi.image + '"/>';
        this.ceshitype = this.xinliceshi.type;
        const newjson = await api.getDianzanshoucang({
          unionid: unionid,
          doctype: 'xinliceshi',
          docid: this.ceshiid,
        });
        this.dianzan = newjson.dianzan;
        this.shoucang = newjson.shoucang;
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      async setDianzanshoucangshu() {
        let unionid = uni.getStorageSync('unionid') || '';
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
        await api.setDianzanshoucangshu({
          unionid: unionid,
          doctype: 'xinliceshi',
          docid: this.ceshiid,
          dianzanshu: this.xinliceshi.dianzan,
          shoucangshu: this.xinliceshi.shoucang,
          dianzan: this.dianzan,
          shoucang: this.shoucang,
        });
      },
      async getCeshidaan() {
        let unionid = uni.getStorageSync('unionid') || '';
        const json = await api.getCeshidaan({
          unionid: unionid,
          ceshiid: this.ceshiid,
          ceshitype: this.ceshitype,
          score: this.score,
          optionId: this.xuanze[this.xuanze.length - 1].options[this.xuanze[this.xuanze.length - 1].xuanze].optionId,
        });
        this.ceshidaan = json.data;
        uni.setNavigationBarTitle({
          title: '测试结果'
        });
        this.isceshi = 2;
        if (unionid == '') {
          uni.navigateTo({
            url: "/pages/shouquan"
          });
          return false;
        }
      },
      deepClone(obj) {
        let _obj = JSON.stringify(obj),
          objClone = JSON.parse(_obj);
        return objClone
      },
      gaibianshoucang() {
        this.shoucang = 1 - this.shoucang;
        if (this.shoucang) {
          this.xinliceshi.shoucang += 1;
          tip.success('收藏成功');
        } else {
          this.xinliceshi.shoucang -= 1;
          tip.success('取消收藏');
        }
        this.setDianzanshoucangshu();
      },
      gaibiandianzan() {
        this.dianzan = 1 - this.dianzan;
        if (this.dianzan) {
          this.xinliceshi.dianzan += 1;
        } else {
          this.xinliceshi.dianzan -= 1;
        }
        this.setDianzanshoucangshu();
      },
      tijiaoceshi() {
        this.getCeshidaan();
      },
      shangyiti() {
        var shujulen = this.xuanze.length;
        this.score -= this.xuanze[shujulen - 1].options[this.xuanze[shujulen - 1].xuanze].score;
        if (shujulen == 1) {
          this.timu = this.deepClone(this.xuanze[0]);
          this.xuanze = [];
          this.timu.index = 0;
        } else {
          if (this.tijiao == 1) {
            this.timu = this.deepClone(this.xuanze[shujulen - 2]);
            this.score -= this.xuanze[shujulen - 2].options[this.xuanze[shujulen - 2].xuanze].score;
            this.xuanze.pop();
            this.xuanze.pop();
          } else {
            this.timu = this.deepClone(this.xuanze[shujulen - 1]);
            this.xuanze.pop();
          }
        }
        this.tijiao = 0;
      },
      xuanzemethod(e) {
        if (this.ceshitype == 'score' && this.xuanze.length == this.xinliceshi.questions.length) {
          var shujulen = this.xuanze.length;
          this.score -= this.xuanze[shujulen - 1].options[this.xuanze[shujulen - 1].xuanze].score;
          this.xuanze.pop();
          this.timu.xuanze = e;
          this.score += this.timu.options[e].score;
          this.xuanze.push(this.timu);
        } else {
          this.timu.xuanze = e;
          this.score += this.timu.options[e].score;
          this.xuanze.push(this.timu);
        }
        if (this.ceshitype == 'jump') {
          if (this.timu.options[e].nextQuestionId == 0) {
            this.tijiao = 1;
          } else {
            for (let i = 0; i < this.xinliceshi.questions.length; ++i) {
              if (this.xinliceshi.questions[i].questionId == this.timu.options[e].nextQuestionId) {
                this.timu = this.deepClone(this.xinliceshi.questions[i]);
                this.timu.index = i;
                this.timu.xuanze = -1;
                for (var j = 0; j < this.timu.options.length; ++j) {
                  this.timu.options[j].title = String.fromCharCode('A'.charCodeAt(0) + j) + '、' + this.timu.options[j].title;
                }
                break;
              }
            }
          }
        } else {
          if (this.xuanze.length == this.xinliceshi.questions.length) {
            this.tijiao = 1;
          } else {
            this.timu = this.deepClone(this.xinliceshi.questions[this.timu.index + 1]);
            this.timu.index = this.xuanze.length;
            this.timu.xuanze = -1;
            for (var i = 0; i < this.timu.options.length; ++i) {
              this.timu.options[i].title = String.fromCharCode('A'.charCodeAt(0) + i) + '、' + this.timu.options[i].title;
            }
          }
        }
      },
      charCodeAt(e) {
        return String.fromCharCode(e);
      },
      changeceshi() {
        this.isceshi = 1;
        uni.setNavigationBarTitle({
          title: '心理测试'
        });
        this.timu = this.deepClone(this.xinliceshi.questions[0]);
        this.xuanze = [];
        this.timu.index = 0;
        this.timu.xuanze = -1;
        for (var i = 0; i < this.timu.options.length; ++i) {
          this.timu.options[i].title = String.fromCharCode('A'.charCodeAt(0) + i) + '、' + this.timu.options[i].title;
        }
      }
    },
    onLoad(e) {
      this.ceshiid = e.id;
      this.getXinliceshi();
    },
    onShareAppMessage() {
      return {
        title: this.xinliceshi.title,
        path: '/pages/xinliceshi?id=' + this.ceshiid,
      };
    },
    onUnload() {
      var pages = getCurrentPages();
      if (pages.length == 1 && pages[0].route != 'pages/searchpage') {
        uni.switchTab({
          url: "/pages/home"
        })
      }
    }
  }
</script>

<style lang="less">
  .xinliceshi {
    color: #000;
  }
  .shouxian {
    top: 0;
    text-align: center;
    background: #fff;
    padding-bottom: 30rpx;
  }
  .kaishiceshi {
    border-radius: 50rpx;
    background: #ff7e00;
    line-height: 100rpx;
    color: #ffffff;
    width: 90%;
    text-align: center;
    margin-top: 30rpx;
    margin-left: 5%;
    height: 100rpx;
  }
  .timu {
    width: 90%;
    border-radius: 30rpx;
    background: #fff;
    margin-left: 5%;
  }
  .title {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    background: #fff;
    text-align: center;
    padding: 30rpx;
    margin-bottom: 30rpx;
    font-size: 40rpx;
    color: #000;
  }
  .timutitle {
    padding: 30rpx;
    font-size: 30rpx;
    color: #000;
  }
  .zixiang {
    padding-left: 30rpx;
    padding-right: 30rpx;
    display: flex;
    align-items: center;
    min-height: 100rpx;
    line-height: 100rpx;
    .xuanxiang {
      width: 96%;
      color: #000;
    }
    .xuanze0 {
      width: 25rpx;
      height: 25rpx;
      border-radius: 50rpx;
      border: 5rpx solid #ff7e00;
    }
    .xuanze1 {
      background: #ff7e00;
      width: 30rpx;
      height: 30rpx;
      border-radius: 50rpx;
    }
  }
  .wanchenglv {
    margin-top: 30rpx;
    color: #000;
    text-align: center;
  }
  .image {
    margin-left: 2%;
    width: 96%;
    height: auto;
  }
  .bigtext {
    margin-top: 30rpx;
    font-size: 35rpx;
    color: #000;
    text-align: left;
    margin-left: 5%;
    width: 90%;
  }
  .text {
    margin-top: 30rpx;
    color: #000;
    text-align: left;
    margin-left: 5%;
    width: 90%;
  }
  .tijiaokuang {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .shangyiti {
    border-radius: 50rpx;
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    width: 200rpx;
    height: 100rpx;
    line-height: 100rpx;
    color: #ffffff;
    background: #ff7e00;
    text-align: center;
  }
  .tijiao {
    border-radius: 50rpx;
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    width: 200rpx;
    height: 100rpx;
    line-height: 100rpx;
    color: #ffffff;
    background: #ff7e00;
    text-align: center;
  }
  .dikuang {
    padding-top: 100rpx;
    padding-bottom: 100rpx;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .shoucangkuang {
      flex-direction: column;
      text-align: center;
      .shoucang {
        width: 100rpx;
        height: 100rpx;
        margin-top: 100rpx;
      }
    }
  }
</style>
