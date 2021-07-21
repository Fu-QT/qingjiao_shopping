<template>
	<view>
		<button type="default" @click="navToshopping">grthr</button>
	</view>
</template>

<script>
	export default {
		methods:{
			navToshopping() {
				uni.navigateTo({
					url:"../shopping/shopping"
				})
			}
		}
	}
</script>

<style>
	
</style>