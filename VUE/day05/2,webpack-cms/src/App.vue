<template>
  <div class="app-container">
    <!-- header -->
    <mt-header fixed :title="title"></mt-header>
		<transition>
		    <router-view></router-view>
		</transition>
    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink class="mui-tab-item-llb" to="/home" >
       <div @click="title='首页'">
				  <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
			 </div>
      </routerLink>
      <routerLink class="mui-tab-item-llb" to="/member" >
        <div @click="title='会员'">
					<span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
				</div>
      </routerLink>
      <routerLink class="mui-tab-item-llb" to="/shopcar">
				<div @click="title='购物车'">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{this.$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
				</div>
      </routerLink>
      <routerLink class="mui-tab-item-llb" to="/search">
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
.mint-header {
  z-index: 99;
}
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

/* mui-slider 会造成tabbar-item 不能点击，下面保存item 样式，mui-tab-item 重命名为 mui-tab-item-llb */
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>