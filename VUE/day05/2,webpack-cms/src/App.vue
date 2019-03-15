<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed title="title"></mt-header>
		<transition>
		    <router-view></router-view>
		</transition>
    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </routerLink>
      <routerLink class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </routerLink>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active {
	transition: all 0.5s ease
}
</style>