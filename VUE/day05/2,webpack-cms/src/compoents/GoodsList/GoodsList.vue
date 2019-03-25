<template>
  <div class="goodlist">
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item)">
      <img :src="item.img_url">
      <h1 class="title">{{item.name}}</h1>
      <div class="info">
        <p class="price">
          <span>￥899</span>
          <span>￥{{item.price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          id: 1,
          img_url:
            "http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg",
          price: 199,
          name: "小米手机"
        },
        {
          id: 2,
          img_url:
            "http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg",
          price: 299,
          name: "苹果手机"
        },
        {
          id: 3,
          img_url:
            "http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg",
          price: 399,
          name: "华为手机"
        },
        {
          id: 4,
          img_url:
            "http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg",
          price: 499,
          name: "三星手机"
        }
      ]
    };
  },
  methods: {
    goDetail(item) {
      // 编程式导航
      this.$router.push(
        "/home/goodsinfo/" + item.id + "/" + item.price + "/" + item.name
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 10px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: 200px;
    }
    .title {
      font-size: 20px;
      margin: 10px 0;
    }
    .info {
      background-color: #eee;
      padding: 5px;
      p {
        margin: 0;
        padding: 5px;
      }
    }
    .sell {
      display: flex;
      justify-content: space-between;
    }
    .now {
      color: red;
      font-weight: bold;
    }
    .old {
      text-decoration: line-through;
    }
  }
}
</style>