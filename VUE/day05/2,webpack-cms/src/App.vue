<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed :title="title"></mt-header>
		<transition>
		    <router-view></router-view>
		</transition>
    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink class="mui-tab-item" to="/home" >
       <div @click="title='首页'">
				  <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
			 </div>
      </routerLink>
      <routerLink class="mui-tab-item" to="/member" >
        <div @click="title='会员'">
					<span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
				</div>
      </routerLink>
      <routerLink class="mui-tab-item" to="/shopcar">
				<div @click="title='购物车'">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
				</div>
      </routerLink>
      <routerLink class="mui-tab-item" to="/search">
       <div @click="title='搜索'">
				  <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
			 </div>
      </routerLink>
    </nav>
  </div>
</template>

<script>
export default {
	data() {
		return {
			title : '首页'
		}
	},
};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
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