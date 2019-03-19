<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间：2018-12-12 12：12</span>
      <span>点击：1000次</span>
    </p>
    <hr>
    <div class="content"></div>
    <comment-box :newsinfo_id='id'></comment-box>
  </div>
</template>

<script>
import comment from '../comment/comment.vue'

export default {
  data() {
    return {
      // 保存路由传过来的id
      id : this.$route.params.id
    }
  },
  methods: {
    
  },
  components: {
    'comment-box' : comment,
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  .title {
    font-size: 20px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
  }
  .content {
    background-color: pink;
    height: 700px;
  }
}


</style>
