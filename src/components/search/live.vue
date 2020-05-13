<template>
	<div id="live">
		<div class="search_live">
			<div class="allLive_single" v-for="item in searchLive" :key="item.roomId">
				<div class="allLive_single_menu">
					<div class="allLive_singleImg">
						<img :src="item.roomSrc">
					</div>
					<div class="anchor_state" v-if="item.isLive"></div>
					<div class="allLive_hot">
						<span class="icon_flam"></span>
						<span class="allLive_hot_number">{{item.hn}}</span>
					</div>
					<div class="allLive_liveName">
						<span class="allLive_icon_use"></span>
						<span class="allLive_liveTitle">{{item.nickname}}</span>
					</div>
				</div>
				<p class="allLive_title">{{item.roomName}}</p>
			</div>
		</div>
		<div class="loadMore">
			<div class="loadMore_tap" @click="liveMore">加载更多</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'searchLive',
		props: ['searchLive'],
		methods: {
			liveMore() {
				this.$emit('liveMoreTouch')
			}
		}
	}
</script>

<style scoped>
	#live {
		margin-top: 1.68rem;
	}

	.search_live {
		padding: .2rem 0 0 .1rem;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.allLive_single {
		width: 50%;
		padding: 0 .1rem .1rem 0;
	}

	.allLive_single_menu {
		width: 100%;
		position: relative;
	}

	.allLive_singleImg {
		width: 100%;
		height: 100%;
	}

	.allLive_singleImg img {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: .08rem;
	}

	.allLive_hot {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		height: .36rem;
		line-height: .36rem;
		font-size: 0;
		width: 100%;
		padding-right: .1rem;
		text-align: right;
		background: url(../../assets/img/bg-shadow_e60f214.png) no-repeat;
	}

	.icon_flam {
		display: inline-block;
		width: .22rem;
		height: .22rem;
		margin-right: .06rem;
		background: url(../../assets/img/hotnum_6b05e5d.png) no-repeat;
		background-size: cover;
	}

	.allLive_hot_number {
		font-size: .24rem;
		color: #fff;
	}

	.allLive_liveName {
		width: 100%;
		font-size: 0;
		position: absolute;
		bottom: 0;
		padding: 0 .1rem;
	}

	.allLive_icon_use {
		display: inline-block;
		background: url(../../assets/img/iconfont-wo_fdcada2.png) no-repeat;
		width: .22rem;
		height: .24rem;
		margin-right: .06rem;
		background-size: cover;
	}

	.allLive_liveTitle {
		bottom: .3rem;
		left: 0;
		font-size: .2rem;
		color: #fff;
		height: .36rem;
		line-height: .36rem;
	}

	.allLive_title {
		width: 100%;
		font-size: .12rem;
		height: .54rem;
		line-height: .54rem;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.anchor_state {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.12rem;
		height: .32rem;
		background: url(../../assets/img/playing_9f3b01a.png) no-repeat;
		background-size: cover;
	}

	.loadMore {
		width: 100%;
		height: 1.02rem;
		padding: .1rem .05rem;
	}

	.loadMore_tap {
		font-size: .28rem;
		color: #7a7a7a;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: .8rem;
		border: .02rem solid #ddd;
		border-radius: .1rem;
	}
</style>
