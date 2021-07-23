<template>
	<view style="background-color:#f1f1f1; min-height: 100vh">
		<u-navbar back-text="返回" title="订单"></u-navbar>
		<view class="distance-bottom">
			<view class="nb-container-box" v-for="(item,index) in 5"
				style="background-color: #FFFFFF;border-radius: 20rpx;">
				<view class="nb-container-box" style="padding: 20rpx 0;margin-top: 30rpx;">
					<view class="fs-mini nb-space-between"
						style="border-bottom: 1rpx #f1f1f1 solid;padding-bottom: 20rpx;">
						<view>订单编号</view>
						<view>54685225625831323</view>
					</view>
					<view class="nb-between-center" v-for="(item,index) in 3" style="padding: 20rpx 0;">
						<view class="nb-flex-box">
							<view>
								<image style="width: 120rpx;height: 120rpx;" src="../../../static/fshan.jpg_.webp"
									mode="">
								</image>
							</view>
							<view style="margin-left: 20rpx;">
								<view class="fs-mini">鸡排</view>
								<view class="c-gray fs-mini" style="margin-top: 6rpx;">微辣</view>
								<view class="c-gray fs-mini" style="margin-top: 6rpx;">x1</view>
							</view>
						</view>
						<view class="fs-mini" style="color: #FA3534;">￥5.8</view>
					</view>
					<view style="color: #FA3534;">总价：255元</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.distance-bottom {
		padding-bottom: 40rpx;
	}
</style>
