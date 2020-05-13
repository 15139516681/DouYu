<template>
	<div class="liveSingle">
		<!-- 每个推荐的直播模块 -->
		<div class="alllive_module" v-for="(item,index) in details.list" :key="index">
			<div class="alllive_reco">
				<div class="alllive_reco_shot"><img :src="item.roomSrc"/></div>
				<div class="alllive_heat">
					<span class="icon_flame"></span>
					<span>{{item.hn}}</span>
				</div>
				<div class="alllive_title">
					<span class="icon_use"></span>
					<span class="alllive_title_text">{{item.nickname}}</span>
				</div>
			</div>
			<div class="alllive_intro">{{item.roomName}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'liveSingle',
	props: ['details'],
	
};
</script>

<style>
	.liveSingle{
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
		padding-left: .1rem;
	}
	
</style>
