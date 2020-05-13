<template>
	<div id="liveClass">
		<div class="all_box">
			<div class="alllive_top">
				<div class="alllive_text">全部直播</div>
				<div class="alllive_number" @click="allLiveData('all')">
					<span class="alllive_number_at">当前</span>
					<span class="alllive_number_qun">29357</span>
					<span class="alllive_number_at">个直播</span>
					<span class="alllive_number_icon"></span>
				</div>
			</div>
			<!-- 全部直播模块 -->
			<div class="alllive_shot">
				<!-- 每个推荐的直播模块 -->
				<div class="alllive_module">
					<div class="alllive_reco">
						<div class="alllive_reco_shot"><img src="../../assets/img/dy1.jpg" /></div>
						<div class="alllive_heat">
							<span class="icon_flame"></span>
							<span>311.3万</span>
						</div>
						<div class="alllive_title">
							<span class="icon_use"></span>
							<span class="alllive_title_text">长沙乡村敢死队</span>
						</div>
					</div>
					<div class="alllive_intro">双倍粉丝亲密度</div>
				</div>
				<!-- 每个推荐的直播模块 -->
				<div class="alllive_module">
					<div class="alllive_reco">
						<div class="alllive_reco_shot"><img src="../../assets/img/dy2.jpg" /></div>
						<div class="alllive_heat">
							<span class="icon_flame"></span>
							<span>243.0万</span>
						</div>
						<div class="alllive_title">
							<span class="icon_use"></span>
							<span class="alllive_title_text">芜湖大司马丶</span>
						</div>
					</div>
					<div class="alllive_intro">今晚夕阳红！同学们,不见不散！</div>
				</div>
				<!-- 每个推荐的直播模块 -->
				<div class="alllive_module">
					<div class="alllive_reco">
						<div class="alllive_reco_shot"><img src="../../assets/img/dy3.jpg" /></div>
						<div class="alllive_heat">
							<span class="icon_flame"></span>
							<span>234.6万</span>
						</div>
						<div class="alllive_title">
							<span class="icon_use"></span>
							<span class="alllive_title_text">彡彡九户外</span>
						</div>
					</div>
					<div class="alllive_intro">做个快乐的自己 485503</div>
				</div>
				<!-- 每个推荐的直播模块 -->
				<div class="alllive_module">
					<div class="alllive_reco">
						<div class="alllive_reco_shot"><img src="../../assets/img/dy4.jpg" /></div>
						<div class="alllive_heat">
							<span class="icon_flame"></span>
							<span>232.2万</span>
						</div>
						<div class="alllive_title">
							<span class="icon_use"></span>
							<span class="alllive_title_text">MrGemini</span>
						</div>
					</div>
					<div class="alllive_intro">Gemini：勇士单排冲王者！</div>
				</div>
			</div>
		</div>
		<div class="all_box" v-for="(item, index) in room_list.data" :key="index">
			<div class="alllive_top">
				<div class="alllive_text" :style="{ 'background-image': 'url(' + item.icon + ')', 'background-repeat': 'no-repeat', 'background-size': '0.36rem 0.36rem' }">
					<span>{{ item.tabName }}</span>
					<span class="split"></span>
					<span class="alllive_center">{{item.tabName}}</span>
				</div>
				<div class="alllive_number" @click="allLiveData(item)">
					<span class="alllive_number_at">当前</span>
					<span class="alllive_number_qun">{{ item.count }}</span>
					<span class="alllive_number_at">个直播</span>
					<span class="alllive_number_icon"></span>
				</div>
			</div>
			<live-single :details="item"></live-single>
		</div>
		<div class="index_buttom">
			<a href="#top" class="return_top">
				<i class="top"></i>
				返回顶部
			</a>
			<div class="download">下载客户端</div>
			<div class="hot_anchor">热门主播 : <span>ti9</span><span>Mix晴子</span></div>
			<p class="service">客服热线：027-87750710</p>
			<p class="service">武汉斗鱼网络科技有限公司</p>
			<p class="service">湖北省武汉市东湖开发区光谷软件园F4栋8楼</p>
			<p class="service">版权所有 © www.douyu.com 鄂ICP备15011961号-1</p>
		</div>
	</div>
</template>
<script>
import liveSingle from '../liveSingle/liveSingle.vue';
export default {
	name: 'liveClass',
	props: ['room_list'],
	components: {
		liveSingle
	},
	methods:{
		// 推荐页面点击右边更多
		// 因路由监听,点击即出发路由监听,不用调用函数
		allLiveData(item){
			if(item === 'all'){
				var item = {
					tabName :'全部',
					shortName:'all'
				}
			}
			this.$router.push({
				path:'/',
				query:{
					name:item.tabName,
					type:item.shortName
				}
			})
	}
	},
};
</script>

<style>
#liveClass {
	padding-top: 2.2rem;
}

.alllive_top {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items:center;
	padding: 0 0.1rem;
}
.alllive_text {
	padding-left: 0.6rem;
	line-height: 0.84rem;
	color: #333;
	font-size: 0.3rem;
	background: url(../../assets/img/icon-live_88adc06.png) no-repeat;
	background-size: 0.4rem 0.24rem;
	background-position-y: center;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
}
.split{
	height:.36rem;
	width: .02rem;
	background: #eee;
	margin-left: .1rem;
}
.alllive_center{
	font-size:.24rem;
	color: #ff7700;
	border: .02rem solid #f70;
	height: .42rem;
	line-height: .38rem;
	border-radius:.21rem;
	padding:0 .2rem ;
	margin-left: .2rem;
	}
.alllive_number {
	font-size: 0.26rem;
	color: #999;
}

.alllive_number_icon {
	display: inline-block;
	width: 0.26rem;
	height: 0.26rem;
	margin-left: 0.1rem;
	background: url(../../assets/img/icon-more_6c08756.png) no-repeat;
	background-size: contain;
}
.alllive_number_qun {
	color: #f70;
}
.alllive_shot {
	width: 100%;
	padding-left: 0.1rem;
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
}
.alllive_module {
	width: 50%;
}
.alllive_reco {
	width: 100%;
	padding: 0 0.1rem 0.1rem 0;
	position: relative;
}
.alllive_reco_shot > img {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 0.1rem;
}
.alllive_heat {
	position: absolute;
	top: 0;
	width: calc(100% - 0.1rem);
	right: 0.1rem;
	color: #fff;
	font-size: 0.2rem;
	line-height: 0.36rem;
	text-align: right;
	background: url(../../assets/img/bg-shadow_e60f214.png);
	background-size: cover;
}
.icon_flame {
	display: inline-block;
	width: 0.22rem;
	height: 0.22rem;
	margin-right: 0.06rem;
	background: url(../../assets/img/hotnum_6b05e5d.png) no-repeat;
	background-size: contain;
}
.alllive_title {
	position: absolute;
	bottom: 0.14rem;
	width: calc(100% - 0.1rem);
	padding: 0 0.1rem;
	font-size: 0.2rem;
	color: #fff;
	text-align: left;
}
.icon_use {
	width: 0.22rem;
	height: 0.24rem;
	margin-right: 0.06rem;
	display: inline-block;
	background: url(../../assets/img/iconfont-wo_fdcada2.png) no-repeat;
	background-size: contain;
}
.alllive_intro {
	width: 100%;
	height: 0.54rem;
	line-height: 0.54rem;
	font-size: 0.24rem;
	color: #333;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.index_buttom{
	width: 100%;
	overflow: hidden;
	text-align: center;
	font-size: .26rem;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-bottom: 1.4rem;
	}
.return_top{
	color: #666;
	width: 100%;
	height:1.12rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
}
.top{
	display: block;
	width: .3rem;
	height: .32rem;
	background: url(../../assets/img/icon-v2_ed53f03.png) -3.8rem 0 no-repeat;
	margin-right: .1rem;
	background-size: 4.9rem .4rem;
}
.download{
	width: 6.38rem;
	background: #FF7700;
	height: .9rem;
	line-height: .9rem;
	color: #fff;
	margin:0  .56rem  .4rem;
	border-radius: .08rem;
	}
	.hot_anchor{
		width: 100%;
		font-size: .24rem;
		color: #999;
	}
	.hot_anchor span{
		color:#ff6600;
		margin-left: .1rem;
		line-height: .34rem;
	}
	.service{
		width: 100%;
		font-size: .24rem;
		line-height: .34rem;
		color: #999;
	}
	
</style>
