<template>
	<view v-if="isShow" class="pop-box">
		<view class="pop-close flex-box" @click="closePop()" style="justify-content: center; align-items: center;">
			<slot>
				 
			</slot>
		</view>
		<view class="pop-item">
			<slot name="button" v-bind:isShow="isShow">
				<button @click="closePop" type="primary" style="width: 100%;">确定</button>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.isShow = this.show;
		},
		data() {
			return {
				isShow: false,
			}
		},
		methods: {
			closePop() {
				this.isShow = false
				this.$emit("close");
			},
		},
		watch: {
			show(v) {
				this.isShow = v;

			},
			isShow(v) {
				this.$emit("update:show", v)
			}

		}
	}
</script>

<style lang="scss">
	.pop-box {
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 0px;
		z-index: 999;
		height: 100vh;

		.pop-close {
			background-color: rgba(0, 0, 0, 0.8);
			height: 100vh;
		}

		.pop-item {
			position: fixed;
			bottom: 0px;
			width: 100%;
			height: auto;
			background-color: #FFFFFF;

			.pop-item-content {
				display: flex;
				flex-direction: row;
				padding: 20px;
				justify-content: space-between;
				align-items: center;
			}

		}
	}
</style>
