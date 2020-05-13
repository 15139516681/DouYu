import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
// 此处代码可以解决路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    component: Home,
	meta:{
		title:'斗鱼 - 每个人的直播平台'
	}
  },
  {
	  path:'/search',
	  name:'Search',
	  component: ()=> import('../components/search/search.vue'),
	  meta:{
		  title:'斗鱼 - 搜索'
	  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 导航守卫改变titile名字
router.beforeEach((to,from,next)=>{
	if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})
export default router
