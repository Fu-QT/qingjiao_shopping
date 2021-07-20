<template>
		<u-tabbar v-model="current" :list="list" :mid-button="true" :before-switch="beforeSwitch"></u-tabbar>
</template>

<script>
	export default {
		name: "myTabbar",
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布任务',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0
			};
		},

		methods: {
			init() {
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				let arr = ["home", "createTask", "mine"]
				for (var i = 0; i < arr.length; i++) {

					if (
						page.route.indexOf(arr[i]) != -1
					) {
						this.current = i
						return
					}
				}
			},
			async beforeSwitch(index) {
				// if(this.current == index) {
					
				// }
				if (index == 0) {
					uni.switchTab({
						url: "home",
					})
					// return true; // 或者根据逻辑返回false
				} else if (index == 1) {
					uni.switchTab({
						url:"createTask"
					})
				} else {
					uni.switchTab({
						url: "mine",
					})
				}
			}
		}
	}
</script>

<style>

</style>
