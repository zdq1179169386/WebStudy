<template>
  <div>
    <h1>newinfo{{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 保存路由传过来的id
      id : this.$route.params.id
    }
  },
  methods: {
    
  },
  props:[]
}
</script>

<style lang="scss" scoped>

</style>
