<template>
  <div class="car-container">
    <!-- 商品列表 -->
    <div class="goods-list">
      <div class="mui-card" v-for="item in list" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-input-row mui-checkbox mui-left">
            <input type="checkbox" class="center" v-model="$store.getters.getGoodsSelected[item.id]" @change.stop='changeSelected(item.id, $store.getters.getGoodsSelected[item.id])'>
            <label>
              <div class="goodsinfo">
                <img
                  src="http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg"
                >
                <div class="info">
                  <h1 class="title">{{item.name}}</h1>
                  <div class="count_add">
                    <span>￥{{item.price}}</span>
                    <number_box :initCount='item.count' :id='item.id'></number_box>
                    <a href="#">删除</a>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import number_box from "../subcomponents/car_number_box.vue";

export default {
  data() {
    return {
      list: this.$store.state.car
    };
  },
  components: {
    number_box
  },
  methods: {

    changeSelected(id, val){
      console.log('changeSelected');
      
      this.$store.commit('updateGoodsSelected', {id: id, selected:val });
    }
  }
};
</script>

<style lang='scss' scoped>
.car-container {
  .goods-list {
    img {
      width: 60px;
      height: 60px;
    }
    .mui-card-content {
      .goodsinfo {
        display: flex;
        justify-content: space-between;
      }
    }
    .mui-input-row {
      align-items: center;
    }
    .center {
      top: 50%;
      margin: -14px;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .count_add {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
    }
  }
}
</style>
