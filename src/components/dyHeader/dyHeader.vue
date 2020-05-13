<template>
	<div id="dyHeader">
		<div class="header_box">
			<span class="logo"></span>
		<span class="Home_header_search" @click="search()">搜索</span>
			<span class="Home_header_pay">充值</span>
			<span class="Home_header_open">打开APP</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'dyHeader',
		methods: {
			// 点击搜索 跳转到此页面
			search() {
				this.$router.push({name:'Search'})
			}
		},	
			}
</script>

<style scoped>
	.header_box {
		font-size: .12rem;
		display: flex;
		justify-content: space-between;
		height: 1.08rem;
		align-items: center;
		padding-left: .2rem;
	}
	.logo{
		width: 1.52rem;
		height: .68rem;
		background-image: url('../../assets/img/logo_864f3ef.png');
		background-size: cover;
	}
	.Home_header_search{
		width: 2.5rem;
		height: .56rem;
		border-radius: .28rem;
		background-color:#f2f2f2;
		margin-left: .2rem;
		background-image: url('../../assets/img/search_0f4cda6.png');
		background-size: .32rem .32rem;
		background-position:  .2rem .12rem;
		background-repeat: no-repeat;
		padding-left: .65rem;
		font-size: .28rem;
		color: #bbb;
		line-height: .56rem;
		text-align: left;
	}
	.Home_header_pay{
		background: #fff;
		border: 1px solid #eee;
		border-radius: .28rem;
		color: #666;
		letter-spacing: .02rem;
		margin-left: .2rem;
		width: .98rem;
		height: .56rem;
		text-align: center;
		line-height: .56rem;
		font-size: .24rem;
	}
	.Home_header_open{
		margin-left: .2rem;
		width: 1.48rem;
		height: .56rem;
		text-align: center;
		line-height: .56rem;
		font-size: .24rem;
		background-color: #ff5d23;
		border-radius: .28rem;
		color: #fff;
		margin-right: .2rem;
	}
</style>
