<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,i) in newList" :key="i">
        <router-link :to="'/home/newsinfo/' + i">
          <img class="mui-media-object mui-pull-left" src alt>
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>{{ item.time }}</span>
              <span>{{ item.count }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newList: [
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        {
          title:'新闻标题',
          time:'发布时间:2018-12-12 12:12',
          count:'点击:1000次'
        },
        ]
    };
  },
  created() {
    // this.getNewList();
  },
  methods: {
    getNewList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newList = result.data.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-media {
  img {
    width: 40px;
    height: 40px;
    background-color: red;
  }
  h1 {
    font-size: 18px;
  }
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
  }
}
</style>
