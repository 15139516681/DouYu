<template>
	<div id="anchor">
		<div class="anchor_box">
			<div class="search_anchor_single" v-for="item in  searchAnchor" :key="item.ownerUID">
				<div class="anchor_img">
					<img :src="item.avatar">
				</div>
				<div class="anchor_title">
					<p class="anchor_title_name">{{item.nickname}}</p>
					<div class="anchor_hot">
						<span class="anchor_hot_title">热度 : </span>
						<span class="anchor_hot_number">{{item.hn}}</span>
					</div>
				</div>
				<div class="anchor_live" v-if="item.isLive"></div>
			</div>
		</div>
		<div class="loadMore">
			<div class="loadMore_tap" @click="anchorMore">加载更多</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'searchAnchor',
		props: ['searchAnchor'],
		methods: {
			anchorMore() {
				this.$emit('anchorMoreTouch')
			}
		}
	}
</script>

<style>
	#anchor {
		margin-top: 1.68rem;
	}

	.anchor_box {
		width: 100%;
		height: 100%;
	}

	.search_anchor_single {
		padding: 0 .2rem;
		height: 1.4rem;
		border: .02rem solid #eee;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: nowrap;
		font-size: 0;
		align-items: center;
	}

	.anchor_img {
		width: 1rem;
		height: 1rem;
		margin-right: .2rem;
	}

	.anchor_img img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.anchor_title {
		font-size: .28rem;
	}

	.anchor_hot {
		color: #999;
		font-size: .26rem;
		margin-top: .1rem;
	}

	.anchor_live {
		position: absolute;
		right: .2rem;
		top: calc(50% - .12rem);
		width: 1.18rem;
		height: .24rem;
		background: url(../../assets/img/belive_7e2b0eb.png) no-repeat;
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
