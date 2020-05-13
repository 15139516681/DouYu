<template>
	<div id="dyNav">
		<div class="nav_boxall">
			<div class="nav_box_auto">
				<ul class="nav_box clearfloat"  >
					<li><span :class="['defa_color', cur === -1 ? 'nav_patch' : '']" @click="pitch(-1,'')">推荐</span></li>
					<li v-for="(item, index) in nav" :key="index">
						<span  @click="pitch(index , item)" :class="['defa_color', current === item.name ? 'nav_patch' : '']">{{ item.name }}
						</span>
					</li>
				</ul>
			</div>
			<div class="nav_classify" @click="classify"></div>
		</div>
	</div>
</template>

<script>
	import {
		menu
	} from '../../api/api.js';
	export default {
		// 顶部导航
		name: 'dyNav',
		data() {
			return {
				// 导航值
				nav: [],
				// 选中项
				current: '',
				// 推荐
				cur: '',
			};
		},
		methods: {
			// 请求导航数据
			navTitle() {
				menu('/cate/recList?cid=&ct=').then(res => {
					this.nav = res.data.data;
				});
			},
			// 点击切换
			pitch(index, data) {
				this.cur = index
				this.current = data.name;
				this.$router.push({
					path: "/",
					query: {
						name: data.name,
						type: data.shortName
					}
				})
				location.reload()
			},
			
			// 面包导航,请求全部分类
			classify(){
				this.$emit('list')
			}
		},
		// 自执行函数,进入首次显示推荐
		created() {
			this.navTitle();
			if (this.$route.query.name) {
				this.current = this.$route.query.name
			} else {
				this.cur = -1
			}
			
		},
		
	};
</script>

<style>
	.nav_boxall {
		position: relative;
		width: 100%;
	}

	.nav_box_auto {
		width: 100%;
		overflow-x: auto;
	}

	/* 清除默认滚动条样式 */
	.nav_box_auto::-webkit-scrollbar {
		display: none;
	}

	.nav_box {
		width: 16.5rem;
	}

	.nav_box li {
		float: left;
		margin: 0 0.22rem;
		height: .88rem;
		line-height: .88rem;
	}

	.defa_color {
		display: block;
		font-size: 0.28rem;
		color: #3f3f3f;

	}

	/* 选中后的效果 */
	.nav_patch {
		font-weight: 700;
		position: relative;
		color: #ff5d23;
	}

	.nav_classify {
		width: .88rem;
		height: .88rem;
		position: absolute;
		right: 0;
		top: 0;
		background: url(../../assets/img/category_0148919.png) no-repeat;
		background-size: cover;
	}
</style>
