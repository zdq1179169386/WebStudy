<template>
    <div class="goodlist">
      <div class="goods-item">
        <img src="http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg">
        <h1 class="title">小米手机</h1>
        <div class="info">
          <p class="price">
            <span>￥899</span>
            <span>￥999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
       
      <div class="goods-item">
        <img src="http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg">
        <h1 class="title">小米手机</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥899</span>
            <span class="old">￥999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
      
      <div class="goods-item">
        <img src="http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg">
        <h1 class="title">小米手机</h1>
        <div class="info">
          <p class="price">
            <span>￥899</span>
            <span>￥999</span>
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
            
        }
    },
    methods: {
        
    },
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
        box-shadow:  0 0 8px #ccc;
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