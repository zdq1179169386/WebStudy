
<template>
  <div class="mui-numbox" data-numbox-min="1"  style="height:25px" @click.stop>
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click.stop.prevent='add'>-</button>
    <input class="mui-input-numbox" type="number" :value="initCount" ref="numberbox" readonly>
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click.stop.prevent='reduce'>+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  // 挂载到父组件的时候调用
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  props:['initCount','id'],
  methods: {
    textChange(){
      console.log('textChange');
      this.$store.commit('updateGoodsInfo',{id:this.id,count: parseInt(this.$refs.numberbox.value) })
    },
    add(){
      this.initCount ++ ;
    },
    reduce(){
      this.initCount -- ;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
