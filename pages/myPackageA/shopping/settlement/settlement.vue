<template>
	<view class="nb-container" style="background-color: #f1f1f1">
		<u-navbar back-text="返回" title="提交订单"></u-navbar>
		<view class="nb-body">
			<view class="container-box" style="margin-top: 20rpx;">
				<!-- <view class="fs-mini" style="border-bottom: 1rpx #f1f1f1 solid;padding-bottom: 30rpx;">杨二妹炒洋芋</view> -->
				<view class="nb-between-center" v-for="(item,index) in 10" style="margin-bottom: 20rpx;background-color: #FFFFFF;border-radius: 20rpx;padding: 20rpx;">
					<view class="nb-flex-box">
						<view>
							<image style="width: 120rpx;height: 120rpx;" src="../../../../static/fshan.jpg_.webp" mode="">
							</image>
						</view>
						<view style="margin-left: 20rpx;">
							<view class="fs-mini">鸡排</view>
							<view class="c-gray fs-mini" style="margin-top: 6rpx;">微辣</view>
							<view class="c-gray fs-mini" style="margin-top: 6rpx;">x1</view>
						</view>
			
					</view>
					<view class="fs-mini" style="color: red;">￥5.8</view>
				</view>
				
			</view>
		</view>
		<view style="height: 150rpx;">
			<u-button type="primary">提交订单</u-button>
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

</style>
