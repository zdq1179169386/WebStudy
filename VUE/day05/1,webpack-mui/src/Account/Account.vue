<template>
  <div>
    <h1>这是account组件</h1>
    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
// scoped 作用域 只作用于组件内部, lang ： 语言
body {
  div {
    font-style: italic
  }
}
</style>

