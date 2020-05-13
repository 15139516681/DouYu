<template>
	<div class="search">
		<div class="search_header">
			<input class="sea_text" type="text" placeholder="搜索房间/主播分类" v-model="search_cont" />
			<div class="sea_but" @click="seeAbout(search_cont,pitchOn)">搜索</div>
		</div>
		<div class="hot_box" v-show="look">
			<div class="hot_title">最近热搜</div>
			<div class="hot_word">
				<div class="hotword_single" v-for="(item, index) in hotWord">
					<i :class="['icon_num', 'serail' + index ]"></i>
					<span class="heat_word" @click="trendSearch(item,pitchOn)">{{item}}</span>
				</div>
			</div>
		</div>
		<div class="result" v-show="!look">
			<div class="search_nav">
				<div :class="['search_nav_all', pitchOn === 0 ? 'select' : '']" @click="alltap(0)">全部</div>
				<div :class="['search_nav_all', pitchOn === 1 ? 'select' : '']" @click="alltap(1)">主播</div>
				<div :class="['search_nav_all', pitchOn === 2 ? 'select' : '']" @click="alltap(2)">直播</div>
				<div :class="['search_nav_all', pitchOn === 3 ? 'select' : '']" @click="alltap(3)">视频</div>
			</div>
			<all-search :allResult="allResult" v-if="pitchOn === 0 ? true : false" @allMoreTouch="allMoreLoad"></all-search>
			<search-anchor :searchAnchor="searchAnchor" @anchorMoreTouch="anchorMoreLoad" v-if="pitchOn === 1 ? true : false ">
			</search-anchor>
			<search-live :searchLive="searchLive" @liveMoreTouch="liveMoreLoad" v-if="pitchOn === 2 ? true : false"></search-live>
			<search-video :searchVideo="searchVideo" @videoMoreTouch="videoMoreLoad" v-if="pitchOn === 3 ? true : false"></search-video>
		</div>
	</div>
</template>
<script>
	import {
		menu,
		search
	} from '../../api/api.js'
	import allSearch from './allSearch.vue'
	import searchAnchor from './anchor.vue'
	import searchLive from './live.vue'
	import searchVideo from './video.vue'
	export default {
		name: 'search',
		components: {
			allSearch,
			searchAnchor,
			searchLive,
			searchVideo
		},
		data() {
			return {
				// 输入框的值
				search_cont: '',
				// 热搜词
				hotWord: [],
				// 所有的搜索结果
				allResult: {},
				// 主播的搜索结果
				searchAnchor: [],
				// 直播的搜索结果
				searchLive: [],
				// 视频的搜索结果
				searchVideo: [],
				// 控制热搜和内容的切换
				look: true,
				// 判断当前点击的是哪个分类
				pitchOn: 0,
				// 存储默认值
				defau: '',
				// 主播数据加载更多
				anchorOffset: 0,
				// 直播数据加载更多
				liveOffset: 0,
				// 视频数据加载更多
				videoOffset: 0,
			}
		},
		methods: {
			// 请求热搜词
			hot() {
				menu('/search/getTodayTop?count=10&isAjax=1').then(res => {
					this.hotWord = res.data.data
				})
			},
			// 搜索调用的函数
			seeAbout(data, kind) {
				// 判断搜索内容是否为空,为空则不执行
				if (data) {
					// 把这个值存储起来,点击下方导航时,调用这里的值
					this.defau = data
					// 判断是哪个分类显示
					if (kind === 0) {
						search('/search/multi', data).then(res => {
							this.allResult = res.data.data
							this.look = false
						})
					} else if (kind === 1) {
						search('/search/anchor', data).then(res => {
							this.searchAnchor = res.data.data.list
						})
					} else if (kind === 2) {
						search('/search/liveRoom', data).then(res => {
							this.searchLive = res.data.data.list
						})
					} else {
						search('/search/video', data).then(res => {
							this.searchVideo = res.data.data.list
						})
					}
				}
			},
			// 分类导航
			alltap(opt) {
				// 赋值给选中的结果,使导航显示为被选中状态
				this.pitchOn = opt
				// 调用发送请求的函数
				this.seeAbout(this.defau, opt)
			},

            // 右边点击更多
			allMoreLoad(data) {
				this.alltap(data)
			},
			// 主播点击加载更多
			anchorMoreLoad() {
				this.anchorOffset += 20
				search('/search/anchor', this.defau, this.anchorOffset).then(res => {
					this.searchAnchor = this.searchAnchor.concat(res.data.data.list)
				})
			},
			// 直播点击加载更多
			liveMoreLoad() {
				this.liveOffset += 20
				search('/search/liveRoom', this.defau, this.liveOffset).then(res => {
					this.searchLive = this.searchLive.concat(res.data.data.list)
				})
			},
			// 视频点击加载更多
			videoMoreLoad() {
				this.videoOffset += 20
				search('/search/video', this.defau, this.videoOffset).then(res => {
					this.searchVideo = this.searchVideo.concat(res.data.data.list)
				})
			},
			// 点击热搜词，直接查询更多
			trendSearch(data, opt) {
				this.search_cont = data
				this.seeAbout(data, opt)
			}
		},
		// 自执行 调用热搜词
		created() {
			this.hot()
		}
	}
</script>

<style scoped>
	.search {
		width: 100%;
	}

	.search_header {
		width: 100%;
		padding: .14rem 0 .12rem .2rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		background: #fff;
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		border-bottom: .02rem solid #eee;
	}

	.sea_text {
		width: 6.1rem;
		border: none;
		outline: none;
		background-color: #f8f8f8;
		color: #333;
		font-size: .28rem;
		padding: 0 .2rem;
	}

	.sea_but {
		width: 1.2rem;
		height: .6rem;
		font-size: .3rem;
		line-height: .6rem;
		padding-left: .3rem;
	}

	.hot_box {
		width: 100%;
		margin-top: .88rem;
	}

	.hot_title {
		width: 100%;
		padding-left: .2rem;
		font-size: .28rem;
		height: 1.1rem;
		line-height: 1.1rem;
		color: #333;
		border-bottom: .02rem solid #eee;
		text-align: left;
		font-weight: 700;
	}

	.hot_word {
		width: 100%;
		height: 4.4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.hotword_single {
		font-size: .28rem;
		padding-left: .2rem;
		height: .88rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.icon_num {
		display: block;
		width: .28rem;
		height: .28rem;
		margin-right: .1rem;
		background: url(../../assets/img/icon-v2_ed53f03.png) no-repeat;
		background-size: 4.9rem .4rem;
	}

	.serail0 {
		background-position: -1.24rem 0;
	}

	.serail1 {
		background-position: -1.8rem 0;
	}

	.serail2 {
		background-position: -2.36rem 0;
	}

	.serail3 {
		background-position: -2.08rem 0;
	}

	.serail4 {
		background-position: -3.2rem 0;
	}

	.serail5 {
		background-position: -2.66rem 0;
	}

	.serail6 {
		background-position: -2.92rem 0;
	}

	.serail7 {
		background-position: -0.96rem 0;
	}

	.serail8 {
		background-position: -0.68rem 0;
	}

	.serail9 {
		background-position: -1.52rem 0;
	}

	.search_nav {
		position: fixed;
		top: .88rem;
		left: 0;
		z-index: 99;
		background-color: #fff;
		width: 100%;
		padding: 0 .4rem;
		display: flex;
		justify-content: flex-start;
		border-bottom: .02rem solid #eee;
	}

	.search_nav_all {
		margin-right: .4rem;
		height: .78rem;
		line-height: .78rem;
		font-size: .28rem;
		color: #333;
	}

	.select {
		color: #ff5d23;
		font-size: .36rem;
		font-weight: 700;
	}
</style>
