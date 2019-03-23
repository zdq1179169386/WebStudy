
<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="textChange" ref="numberbox">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
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
  props:['max'],
  // 检测max 属性，设置最大值
  watch: {
    max : function(newV,oldV){
      console.log(newV);
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newV);
    }
  },
  methods: {
    textChange(){
      this.$emit('getcount',this.$refs.numberbox.value);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
