<template>
	<div id="allSearch">
		
		<!-- 判断显示的是直播间，还是分类 -->
		<div class="searchResultAllRoom" v-if="allResult.recom">
			<div class="SearchResultAllRoom-show">
				<div class="SearchResultAllRoom-showCover">
					<img :src="allResult.recom.roomSrc">
				</div>
				<div class="SearchResultAllRoom-showHot">
					<i class="SearchResultAllRoom-showHotIcon"></i>
					<span class="SearchResultAllRoom-showHotNum">{{allResult.recom.hn}}</span>
				</div>
				<div class="SearchResultAllRoom-showAnchor">
					<i class="SearchResultAllRoom-showAnchorIcon"></i>
					<span class="SearchResultAllRoom-showAnchorName">{{allResult.recom.nickName}}</span>
				</div>
			</div>
			<div class="SearchResultAllRoom-des">
				<span class="SearchResultAllRoom-desRoom">{{allResult.recom.roomName}}</span>
				<span class="SearchResultAllRoom-desCate">分类 :
					<span class="SearchResultAllRoom-desCateName">{{allResult.recom.cateName}}</span>
				</span>
			</div>
			<div class="SearchResultAllRoom-room">
				房间靓号 : {{allResult.recom.vipId}}
			</div>
		</div>

		<!-- 分类板块 -->
		<div class="all_search_classBox" v-if="allResult.cate && allResult.cate.length">
			<h2 class="all_search_classTitle">
				<span class="all_search_classTitleIcon"></span>
				<span class="all_search_classTitleName">分类</span>
			</h2>
			<div class="all_search_classGame">
				<div class="allWrap" v-for=" (item , index) in allResult.cate" :key="item.tagID">
					<div class="all_search_classGameOne">
						<div class="all_search_classImg">
							<img :src="item.squareIconUrlm">
						</div>
						<div class="all_search_className">{{item.tagName}}</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 这个是主播板块 -->
		<div class="all_search_nachorBox" v-if="allResult.anchor && allResult.anchor.length">
			<h2 class="all_search_classTitle">
				<span class="all_search_classTitleIcon"></span>
				<span class="all_search_classTitleName">主播</span>
				<div class="all_search_classTitleMore" @click="toAnchorMore(1)">更多</div>
			</h2>
			<div class="anchor_box">
				<div class="anchor_single" v-for="item in allResult.anchor" :key="item.roomId">
					<div class="anchor_showitemicon">
						<img :src="item.avatar">
						<div class="anchor_state" v-if="item.isLive"></div>
					</div>
					<div class="anchor_title">{{item.nickname}}</div>
				</div>
			</div>
		</div>

		<!-- 这个是直播板块 -->
		<div class="allLive_search_box" v-if="allResult.room && allResult.room.length">
			<h2 class="all_search_classTitle">
				<span class="all_search_classTitleIcon"></span>
				<span class="all_search_classTitleName">直播</span>
				<div class="all_search_classTitleMore" @click="toAnchorMore(2)">更多</div>
			</h2>
			<div class="allLive_content">
				<div class="allLive_single" v-for="item in allResult.room" :key="item.roomId">
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
		</div>

		<!-- 这个是视频板块 -->
		<div class="allLive_search_box" v-if="allResult.video && allResult.video.length">
			<h2 class="all_search_classTitle">
				<span class="all_search_classTitleIcon"></span>
				<span class="all_search_classTitleName">视频</span>
				<div class="all_search_classTitleMore" @click="toAnchorMore(3)">更多</div>
			</h2>
			<div class="allLive_content">
				<div class="allLive_single" v-for="item in allResult.video" :key="item.hashID">
					<div class="allLive_single_menu">
						<div class="allLive_singleImg">
							<img :src="item.videoPic">
						</div>
						<div class="allLive_liveName">
							<span class="allLive_liveTitle">{{item.nickname}}</span>
						</div>
						<div class="allLive_Time">{{item.videoDuration |dateFrm}}</div>
					</div>
					<p class="allLive_title">{{item.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'allSearch',
		props: ['allResult'],
		methods: {
			// 右边更多
			toAnchorMore(data) {
				this.$emit('allMoreTouch', data)
			}
		},
		filters: {
			dateFrm(time) {
				let h = parseInt(time / 3600)
				let m = parseInt(time / 60) % 60
				let s = Math.ceil(time % 60)
				let hh = h > 10 ? h : ('0' + h)
				let mm = m > 10 ? m : ('0' + m)
				let ss = s > 10 ? s : ('0' + s)
				if (h === 0) {
					return mm + ':' + ss
				} else {
					return hh + ':' + mm + ':' + ss
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#allSearch {
		width: 100%;
		height: 100%;
		margin-top: 1.68rem;
	}

	.all_search_classBox,
	.all_search_nachorBox {
		width: 100%;
		margin-top: .2rem;
		background-color: #fff;
	}

	.all_search_classTitle {
		width: 100%;
		padding-left: .1rem;
		height: .88rem;
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.all_search_classTitleIcon {
		display: block;
		width: .1rem;
		height: .36rem;
		background-color: #ff6d00;
		border-radius: 0.05rem;
		margin-right: .2rem;
	}

	.all_search_classTitleName {
		font-size: .32rem;
		color: #333;
		font-weight: 400;
	}

	.all_search_classTitleMore {
		position: absolute;
		right: .1rem;
		font-size: .26rem;
		padding-right: .36rem;
		line-height: .88rem;
		color: #999;
		background: url(../../assets/img/icon-more_6c08756.png) no-repeat;
		background-size: .26rem .26rem;
		background-position: 100%;
	}

	.all_search_classGame {
		height: 2rem;
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.allWrap {
		display: inline-block;
	}

	.all_search_classGameOne {
		width: 2rem;
		height: 100%;
		display: inline-block;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.all_search_classImg {
		width: .96rem;
		height: .96rem;
	}

	.all_search_classImg img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.all_search_className {
		width: 100%;
		margin-top: .16rem;
		padding: 0 .1rem;
		text-align: center;
		line-height: 1.15;
		font-size: .24rem;
		color: #666;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.anchor_box {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.anchor_single {
		width: 25%;
		height: 2.2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.anchor_showitemicon {
		width: 1.4rem;
		height: 1.4rem;
		position: relative;
	}

	.anchor_showitemicon img {
		display: block;
		width: 1.4rem;
		height: 1.4rem;
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

	.anchor_title {
		width: 100%;
		font-size: .24rem;
		color: #333;
		margin-top: .16rem;
		line-height: 1.15;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
	}

	.allLive_content {
		width: 100%;
		padding-left: .1rem;
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
		background-size: cover;
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
		background-image: linear-gradient(transparent,rgba(0,0,0,0.8));
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

	.allLive_Time {
		position: absolute;
		bottom: 0;
		right: .1rem;
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		color: #fff;
	}

	.searchResultAllRoom {
		padding: .1rem;
		width: 100%;
		background: #fff;
		font-size: 0;
	}

	.SearchResultAllRoom-show {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 4.14rem;
		border-radius: .08rem;
		overflow: hidden;
	}

	.SearchResultAllRoom-showCover {
		width: 100%;
		height: 100%;
		border-radius: .08rem;
	}

	.SearchResultAllRoom-showCover img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.SearchResultAllRoom-showHot {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 .1rem 0 1.22rem;
		width: 100%;
		height: .4rem;
		background: url(../../assets/img/bg-shadow_e60f214.png) no-repeat;
		background-size: cover;
	}

	.SearchResultAllRoom-showHotIcon,
	.SearchResultAllRoom-showAnchorIcon {
		display: block;
		width: .22rem;
		height: .22rem;
		background: url(../../assets/img/hotnum_6b05e5d.png) no-repeat;
		background-size: cover;
		margin-right: .06rem;
	}

	.SearchResultAllRoom-showHotNum {
		display: block;
		line-height: 1.12;
		font-size: .2rem;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.SearchResultAllRoom-showAnchor {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		padding: 0 .1rem;
		width: 100%;
		height: .36rem;
		border-radius: 0 0 .08rem .08rem;
	}

	.SearchResultAllRoom-showAnchorIcon {
		background: url(../../assets/img/iconfont-wo_fdcada2.png) no-repeat;
		background-size: cover;
	}

	.SearchResultAllRoom-showAnchorName {
		display: block;
		flex: 1;
		line-height: 1.15;
		font-size: .2rem;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.SearchResultAllRoom-des {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .14rem 0;
		width: 100%;
		line-height: 1.15;
		font-size: .28rem;
		color: #333;
		overflow: hidden
	}

	.SearchResultAllRoom-desRoom {
		margin-right: .1rem;
		width: 50%;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.SearchResultAllRoom-desCateName {
		color: #f70
	}

	.SearchResultAllRoom-room {
		width: 100%;
		line-height: 1.15;
		font-size: 12px;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
