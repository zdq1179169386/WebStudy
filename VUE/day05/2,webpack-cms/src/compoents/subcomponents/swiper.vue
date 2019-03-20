<template>
  <div>
     <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,i) in list" :key="i">
        <img :src="item.img_url" :class="{ fullwidth : isfull ,fullheight : !isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:['list','isfull'],
  created() {
  },
}
</script>

<style lang="scss" scoped>

.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    vertical-align: middle;
    background-color: green;
    
    .fullwidth {
      width: 100%;
    }
    .fullheight {
      height: 100%;
    }
  }
}

</style>
