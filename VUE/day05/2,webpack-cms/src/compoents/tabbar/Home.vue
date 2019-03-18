<template>
  <div>
    <!-- 轮播 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in list" :key="item.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to='/home/newsist'>
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">Home</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">Chat</div>
        </a>
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

export default {
  data() {
    return {
      list: []
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
  }
};
</script>

<style lang='scss' scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
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
