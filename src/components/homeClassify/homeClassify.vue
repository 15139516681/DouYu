<template>
	<div id="homeClassify">
		<div class="classify_header">
			<div class="classify_header_title">选择分类</div>
			<div class="classify_shut" @click="shut"></div>
		</div>
		<div class="classify_nav">
			<div class="ClassifyModule-nav">
				<span :class="['ClassifyModule-navItem', opt === 'all' ? 'cur' : '']" @click="feel('all')">全部</span>
				<span :class="['ClassifyModule-navItem', opt === item.cate1Id ? 'cur' : '' ]" @click="feel(item.cate1Id)" v-for=" item in navClass"
				 :key="item.cate1Id">{{item.cate1Name}}</span>
			</div>
			<div class="ClassifyModule-content">
				<ul class="ClassifyModule-contentUl clearfloat">
					<li class="ClassifyModule-contentUlItem" v-for=" item in char"  @click="classify(item)">
						<div class="ClassifyModule-contentUlItemShow">
							<div class="ClassifyModule-contentUlItemShowImg">
								<img :src="item.icon">
							</div>
							<div class="ClassifyModule-contentUlItemShowText">{{item.cate2Name}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		// 面包内容
		name: 'homeClassify',
		props: ['navClass', 'allClass'],
		data() {
			return {
				// 全部
				opt: 'all',
				// 分类
				char: []
			}
		},
		methods: {
			// 点击面包分类导航
			feel(tag) {
				this.opt = tag
				this.find(tag)
			},
			// 关闭按钮
			shut() {
				this.$emit('shutClass')
			},
			// 点击面包内容分类
             classify(data){
				 this.$router.push({
					 path:'/',
					 query:{
						 name:data.cate2Name,
						 type:data.shortName
					 }
				 })
			 },
			 
			 // 查找符合导航的分类
			 // 如果是全部,则不进行筛选
			find(condition) {
				if (condition === 'all') {
					this.char = this.allClass
					return
				}
				// 筛选函数
				this.char = this.allClass.filter(function(res) {
					return condition === res.cate1Id
				})
			}
		},
       // 进入现实为全部
		created() {
			this.find('all')
		}
	}
</script>

<style scoped>
	#homeClassify {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, .5);
	}

	.classify_header {
		position: relative;
		background-color: #FFFFFF;
		height: 1.08rem;
		width: 100%;
	}

	.classify_header_title {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 1.08rem;
		font-size: .32rem;
		color: #3f3f3f
	}

	.classify_shut {
		position: absolute;
		left: .2rem;
		top: 50%;
		transform: translateY(-50%);
		width: .52rem;
		height: .52rem;
		background: url(../../assets/img/close_8b63a1d.png) no-repeat;
		background-size: .32rem .32rem;
		background-position: 50%;
	}

	.classify_nav {
		width: 100%;
		height: 100%;
	}

	.ClassifyModule-nav {
		width: 100%;
		overflow-x: auto;
		font-size: .28rem;
		background-color: #fff;
		white-space: nowrap;
	}

	.ClassifyModule-nav::-webkit-scrollbar {
		display: none;
	}

	.ClassifyModule-navItem {
		position: relative;
		display: inline-block;
		height: .88rem;
		line-height: .88rem;
		margin: 0 .22rem;
	}

	.cur {
		color: #ff5d23;
		font-weight: 700;
	}

	.cur::after {
		display: block;
		content: "";
		position: absolute;
		left: 0;
		bottom: .2rem;
		width: 100%;
		height: .04rem;
		background-color: #fa7122;
	}

	.ClassifyModule-content {
		width: 100%;
		height: 7.5rem;
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f4f4f4;
	}

	.ClassifyModule-contentUl {
		width: 100%;
		min-height: 100%;
		overflow: hidden;
	}

	.ClassifyModule-contentUlItem {
		width: 33.3333333%;
		border-right: .02rem dashed #ddd;
		border-bottom: .02rem dashed #ddd;
		height: 2.48rem;
		float: left;
		display: flex;
		align-items: center;
	}

	.ClassifyModule-contentUlItemShow {
		width: 100%;
	}

	.ClassifyModule-contentUlItemShowImg {
		display: flex;
		justify-content: center;
	}

	.ClassifyModule-contentUlItemShowImg img {
		display: block;
		width: 1.22rem;
		height: 1.22rem;
		border-radius: 50%;
	}

	.ClassifyModule-contentUlItemShowText {
		font-size: .24rem;
		height: .28rem;
		line-height: .28rem;
		text-align: center;
		margin-top: .1rem;
		color: #333;
	}
</style>
