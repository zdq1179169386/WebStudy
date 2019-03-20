<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论(最多100字)" maxlength="100" v-model="commentcontent"></textarea>

    <mt-button type="primary" size="large" v-on:click="postComment">发表评论</mt-button>

    <ul class="cmt-list">
      <li class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户:{{item.name}}&nbsp;&nbsp;发表时间:{{item.time | ZD_Datafformat}}</div>
        <div class="cmt-body">{{item.content}}</div>
        <hr>
      </li>
    </ul>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" },
        { name: "zdq", time: Date.now(), content: "搏一搏，单车变摩托" }
      ],
      commentcontent: ""
    };
  },
  methods: {
    postComment() {
      if (this.commentcontent.length == 0) {
       return Toast({
         message : "输入内容不能为空",
         duration : 1500
       });
      }
      var commentObj = {
        name: "zdq1",
        time: Date.now(),
        content: this.commentcontent.trim()
      };
      this.comments.unshift(commentObj);
      this.commentcontent = "";
    },
    getMore() {}
  },
  props: ["newsinfo_id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 15px;
    height: 90px;
    margin: 0;
  }
  .cmt-list {
    list-style: none;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    .cmt-item {
      margin: 10px 0;
      line-height: 35px;
    }
  }
}
</style>
