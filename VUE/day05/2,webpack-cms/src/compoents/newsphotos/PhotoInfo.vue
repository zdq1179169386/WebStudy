<template>
  <div class="photoinfo-container">
    <h3 class="title">图片详情标题</h3>
    <p class="subtitle">
      <span>发表时间：2018-12-12 12：12</span>
      <span>点击：1000次</span>
    </p>
    <hr>
    <!-- 图片九宫格 -->
     <!-- <div class="img_container">
          <img class="preview-img" v-for="(item, index) in imgList" :src="item.img_url" width="100" height="100" @click="$preview.open(index, list)" :key='index'>   
    </div> -->
    
    <vue-preview class='thumbs' :slides="imgList" @close="handleClose"></vue-preview>


    <comment-box :newsinfo_id="id"></comment-box>
  </div>
</template>

<script>
import comment from "../comment/comment.vue";
import '../global.css'


export default {
  data() {
    return {
      id: "",
      imgList: [
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            msrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            w:600,
            h:400
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            msrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            w:600,
            h:400
        },
         {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            msrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
           w:600,
            h:400
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            msrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
           w:600,
            h:400
        },
         {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            msrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            w:600,
            h:400
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            msrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            w:600,
            h:400
        },
         {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
            msrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552989993077&di=cf41ca36ec2c9428d5295291cf1264e1&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2017-11%2F201711221024324869.jpg",
           w:600,
            h:400
        },
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            msrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552999040763&di=b2cb6d0d26111365b2b0071e5c880577&imgtype=0&src=http%3A%2F%2Fu.candou.com%2Fs%2F500%2F2015%2F0904%2F1441301924766.jpg",
            w:600,
            h:400
        },
        
      ]
    };
  },
  methods: {
    handleClose(){

    }
  },
  components: {
    "comment-box": comment
  },
  props: ["newsinfo_id"]
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
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
  .img_container {
    // padding:10px;
    img {
      margin: 10px;
    }
  }
}
</style>
