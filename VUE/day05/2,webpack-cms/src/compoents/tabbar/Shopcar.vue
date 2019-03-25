<template>
  <div class="car-container">
    <!-- 商品列表 -->
    <div class="goods-list">
      <div class="mui-card" v-for="item in list" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="mui-checkbox">
              <input
                type="checkbox"
                class="center"
                v-model="$store.getters.getGoodsSelected[item.id]"
                @change.stop="changeSelected(item.id, $store.getters.getGoodsSelected[item.id])"
              >
            </div>
            <div class="goodsinfo">
              <img
                src="http://a.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=09238b585e4e9258a6618eeaa9b2fd6e/b7003af33a87e950352a905018385343fbf2b4c8.jpg"
              >
              <div class="info">
                <h1 class="title">{{item.name}}</h1>
                <div class="count_add">
                  <span>￥{{item.price}}</span>&nbsp;&nbsp;
                  <number_box :initCount="item.count" :id="item.id"></number_box>&nbsp;&nbsp;
                  <a href="#" @click.prevent='deleteGoods(item.id)'>删除</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计</p>
            <p>已勾选商品<span>{{$store.getters.getGoodsCountAndAmount.count}}</span>件,总价<span>￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
          </div>
          <mt-button type='danger'>
            去结算
          </mt-button>
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
    changeSelected(id, val) {
      console.log("changeSelected");
      this.$store.commit("updateGoodsSelected", { id: id, selected: val });
    },
    // 删除
    deleteGoods(id){
      console.log(id);
      this.$store.commit('removeGoodsItem',{id:id})
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
    .mui-card-content-inner {
      .goodsinfo {
        display: flex;
        justify-content: space-between;
        margin-left: 35px;
      }
      .mui-checkbox {
        position: absolute;
        left: 45px;
        top: 50%;
      }
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
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
