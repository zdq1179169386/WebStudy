<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">科技</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">生活</a>
        </div>
      </div>
    </div>
    <ul class="img_list">
      <li v-for="(item,i) in imglist" :key="i">
        <img v-lazy="item.img_url">
        <div class="info">
          <h3 class="info-title">{{ item.info_title }}</h3>
          <div class="info-body">{{ item.info_content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      imglist: [
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
          info_title:'图片标题',
          info_content:'图片内容'
        },
      ]
    };
  },
  methods: {},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
// https://www.jianshu.com/p/04bf173826aa
* {
  touch-action: pan-y;
}

.img_list {
  list-style: none;
  margin: 0;
  padding: 10px;

  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      box-shadow: 0 0 0.9px #999;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      position: absolute;
      background-color: rgba(0,0,0,0.4);
      text-align: left;
      height: 60px;
      bottom: 0;
      width: 100%;
      padding: 10px;

      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 12px;
      }

    }
  }
}
</style>
