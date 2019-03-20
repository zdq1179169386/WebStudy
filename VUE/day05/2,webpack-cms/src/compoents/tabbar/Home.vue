<template>
  <div>
    <!-- 轮播 -->
    <Swiper :list="list" :isfull="true"></Swiper>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/newsist">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">Home</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="./home/newsphotos">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">Email</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/goodslist">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">Chat</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Toast from "mint-ui";
import Swiper from "../subcomponents/swiper.vue";

export default {
  data() {
    return {
      list: [
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553061898219&di=6dd2cca9c14943a89a93996baebb0aeb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F57baaa16d4cff.jpg"
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553061898801&di=6598fca208a532ab8dcc6ed87460e814&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20181006%2F20%2F1538827398-iDNdRlFEgs.jpg"
        },
        {
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553061898801&di=1e46fc9c1671ea49b6ee17e25360a9aa&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20181001%2F23%2F1538406454-XlGWZTOuPe.jpg"
        }
      ],
      
    };
  },
  methods: {
    getLuoBo() {
      this.$http.jsonp("http://vue.studyit.io/api/getlunbo").then(result => {
        console.log(result.body);
        if (result.data.status === 0) {
          this.list = result.body.message;
        } else {
          Toast("请求轮播数据失败");
        }
      });
    }
  },
  created() {
    // this.getLuoBo();
  },
  components: {
    Swiper
  }
};
</script>

<style lang='scss' scoped>
.mui-grid-view,
.mui-grid-9 {
  background-color: white;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 15px;
}
</style>
