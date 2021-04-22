<template>
	<div class="home">
		<a name="top"></a>
		<div class="settled">
			<dy-header></dy-header>
			<dy-nav  @list="list"></dy-nav>
		</div>
		<live-class :room_list="mix" v-show="show"></live-class>
		<div class="box" v-show="!show" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
		 infinite-scroll-distance="10">
			<live-one :game="roomList" :liveName="liveName"></live-one>
		</div>
		<home-classify v-if="arise" :navClass="navClass" :allClass="allClass" @shutClass="shutClass"></home-classify>
	</div>   
</template>
<script>
	import dyHeader from '../components/dyHeader/dyHeader.vue';
	import dyNav from '../components/dyNav/dyNav.vue';
	import liveClass from '../components/liveClass/liveClass.vue';
	import liveOne from '../components/liveOne/liveOne.vue';
	import homeClassify from '../components/homeClassify/homeClassify.vue'
	import {
		menu,
		getList
	} from '../api/api.js';
	import {
		InfiniteScroll
	} from 'mint-ui'
	export default {
		name: 'Home',
		components: {
			dyHeader,
			dyNav,
			liveClass,
			liveOne,
			homeClassify
		},
		data() {
			return {
				// 推荐板块内容
				mix: [],
				// 单个直播分类数据
				roomList: [],
				// 控制 板块的显示
				show: false,
				// 控制下拉更新速度
				reduce: true,
				// 请求的数据页面值
				page: 1,
				//因下拉选项总是被默认触发，先禁止下拉刷新，待数据请求成功后，再执行第二个页面的
				loading: true,
				// 当前选中的直播模块名称
				liveName: '全部',
				arise: false,
				navClass: [],
				allClass: [],
			}
		},
		// 如页面刷新,判断当前页面停留的情况,如果是分类直播,则从新加载渲染,如果是推荐,则切换到推荐
		// 判断条件,路由中是否有参数
		created() {
			if (this.$route.query.type) {
				this.liveName = this.$route.query.name;
				this.show = false;
				this.getGameList(this.$route.query.type);
			} else {
				this.show = true;
				this.mixRoom();
			}
		},
		
		// 事件监听,如果切换，则重置所有值，并刷新页面
		watch: {
			$route(val) {
				if (val.query.name) {
					this.roomList.length = 0
					this.liveName = this.$route.query.name
				}
				location.reload()
			}
		},
		methods: {
			// 下拉更新内容
			loadMore() {
				if (this.reduce) {
					this.reduce = false
					let pageAdd = ++this.page
					this.getGameList(this.$route.query.type, pageAdd)
				}
			},
			
			// 请求回来的所有直播数据
			mixRoom() {
				menu('/home/mix').then(res => {
					this.mix = res.data;
				})
			},
			// 打开全部分类
			list() {
				menu('/cate/list').then(res => {
					this.navClass = res.data.data.cate1Info
					this.allClass = res.data.data.cate2Info
					this.arise = true
				})
			},
			
			// 关闭全部分类
			shutClass() {
				this.arise = false
			},
			
			// 请求分类数据
			getGameList(data, page = 1) {
				// 判断是否是全部数据
				var data = data === 'all' ? '' : data
				// 以对象的形式传值
				var obj = {
					page: page,
					type: data
				}
				getList(obj).then(res => {
					this.roomList = this.roomList.concat(res.data.data.list)
					this.reduce = true
					this.loading = false
				})
			}
			}
	};
</script>
<style>
	.home {
		width: 100%;
		height: 100%;
	}

	.settled {
		width: 100%;
		position: fixed;
		height: 2rem;
		top: 0;
		background-color: #fff;
		z-index: 5;
	}

	.box {
		width: 100%;
		height: 16rem;
		overflow-y: scroll;
	}
</style>
