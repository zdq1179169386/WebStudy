<template>
  <div>
    <mt-button type="primary" @click="show">primary</mt-button>
    <h1>这是APP组件</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodlist">goodlist</router-link>
    <router-view></router-view>
    <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {};
  },
  created() {
    // this.getList();
  },
  methods: {
    show() {
      return Toast({
        message: "提示信息",
        position: "top",
        duration: -1,
        // 图片，字体图标
        iconClass: 'glyphicon glyphicon-heart',
        // 自定义toast 的样式
        className: 'my-toast'
      });
    },
    getList() {
      var toast = this.show();
      setInterval(() => {
        toast.close();
      }, 3000);
    }
  }
};
</script>

<style>
.my-toast i{
  color: red !important
}
</style>
