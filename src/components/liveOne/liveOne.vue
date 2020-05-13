<template>
	<div id="liveOne">
		<div class="liveOne_text">{{ liveName }}</div>
		<div class="allLive_box">
			<div class="alllive_module" v-for="(item, index) in game" :key="index">
				<div class="alllive_reco">
					<div class="alllive_reco_shot">
						<img :src="item.roomSrc" />
						</div>
					<div class="alllive_heat">
						<span class="icon_flame"></span>
						<span>{{ item.hn }}</span>
					</div>
					<div class="alllive_title">
						<span class="icon_use"></span>
						<span class="alllive_title_text">{{ item.nickname }}</span>
					</div>
				</div>
				<div class="alllive_intro">{{ item.roomName }}</div>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'liveOne',
	props: ['game','liveName'],
}

</script>
<style>  
#liveOne {
	margin-top: 2rem;
	width: 100%;
}
.allLive_box{
	display: flex;
	flex-wrap: wrap;
	padding-left: .1rem;
}
.liveOne_text {
	text-align: left;
	padding-left: 0.5rem;
	line-height: 0.84rem;
	color: #333;
	font-size: 0.24rem;
	background: url(../../assets/img/icon_play_e54a507.png) 0.1rem no-repeat;
	background-size: 0.3rem 0.3rem;
}
</style>
