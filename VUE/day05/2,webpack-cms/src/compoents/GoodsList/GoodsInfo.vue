<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :list="list" :isfull="false"></Swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h4>小米手机</h4>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">市场价:
            <del>￥1000</del>&nbsp;&nbsp;销售价:
            <span class="price_now">￥800</span>
          </p>
          <p>购买数量:&nbsp;&nbsp;
            <number_box></number_box>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">
        <h4>商品参数</h4>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
				<mt-button type='primary' size='large' plain>图文介绍</mt-button>
				<mt-button type='danger' size='large' plain>商品评论</mt-button>
			</div>
    </div>
  </div>
</template>

<script>
import Swiper from "../subcomponents/swiper.vue";
import number_box from "../subcomponents/number_box.vue";

export default {
  data() {
    return {
      infoId: this.$route.params.id,
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
      ]
    };
  },
  created() {},
  components: {
    Swiper,
    number_box
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .price_now {
    color: red;
    font-size: 18px;
    font-weight: bold;
  }

	.mui-card-footer {
		display: block;
		button {
			margin: 10px 0;
		}
	}
}
</style>
