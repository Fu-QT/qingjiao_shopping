<template>
	<view style="background-color: #f1f1f1;height: calc(100vh - 50px);">
		<view class="nb-container-box">
			<view class="nb-flex-box shadow-box" style="padding: 20rpx 20rpx;background-color: #f1f1f1;border-radius: 20rpx;">
				<view>
					<visitor :src="userInfo.HEADER_IMG"></visitor>
				</view>
				<view class="fs-medium nb-align-center" style="margin-left: 20rpx;">{{userInfo.NICKNAME}}</view>
			</view>
			
			<!-- <view class="nb-wrap-flex-box  radius-box u-margin-top" style="padding: 40rpx 0;">
				<view style="width: 25%;">
					<view class="nb-center">10</view>
					<view class="nb-center">收藏夹</view>
				</view>
			</view> -->
			
			<view class="radius-box  u-margin-top shadow-box">
				<view class=" nb-space-between" v-for="item in collectList" @click="collect(item)"
					style="height: 90rpx;padding: 20rpx;border-bottom: #f1f1f1 1rpx solid;">
					<view class="nb-flex-center">
						<view>
							<image style="width: 40rpx;height: 40rpx;" :src="item.icon" mode=""></image>
						</view>
						<view class="fs-small" style="margin-left: 20rpx;">{{item.name}}</view>
					</view>
					<view class="c-gray nb-align-center">
						<u-icon name="arrow-right" size="28"></u-icon>
					</view>
				</view>
			</view>
			
			<view class=" radius-box u-margin-top shadow-box">
				<view class="nb-space-between" style="padding: 30rpx 10px;border-bottom: #f1f1f1 1rpx solid;">
					<view class="fs-mini">我的订单</view>
					<view class="nb-flex-box fs-mini c-gray">
						<view class="fs-mini" @click="navToOrder">查看全部订单</view>
						<u-icon name="arrow-right" color="#9ca3af" size="24"></u-icon>
					</view>
				</view>
			
				<view class="nb-wrap-flex-box" style="padding: 30rpx 10rpx;">
					<view class="fs-mini u-margin-top" v-for="item in orderList" @click="order(item)" style="width: 25%;">
						<view class="nb-center">
							<u-icon :name="item.icon" color="#f37b1d" size="60"></u-icon>
						</view>
						<view class="nb-center" style="margin-top: 10rpx;">{{item.name}}</view>
					</view>
				</view>
			</view>
			
			<view class=" radius-box u-margin-top nb-space-between shadow-box" @click="address" style="height: 90rpx;padding: 20rpx;">
				<view class="nb-flex-center">
					<view>
						<image style="width: 40rpx;height: 40rpx;" :src="myImg" mode=""></image>
					</view>
					<view class="fs-small" style="margin-left: 20rpx;">收货地址</view>
				</view>
				<view class="c-gray nb-align-center">
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			
			<view class="radius-box u-margin-top nb-space-between shadow-box" style="height: 90rpx;padding: 20rpx;">
				<view class="nb-flex-center">
					<view>
						<image style="width: 40rpx;height: 40rpx;" :src="myImg" mode=""></image>
					</view>
					<view class="fs-small" style="margin-left: 20rpx;">关于我们</view>
				</view>
				<view class="c-gray nb-align-center">
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			
		</view>

	</view>
</template>

<script>
	import Visitor from '../components/visitor/visitor.vue';
	export default {
		components: {
			Visitor
		},
		data() {
			return {
				userInfo:{},
				collectList: [
					// {
					// 	icon: 'http://3ch.oss-cn-hangzhou.aliyuncs.com/qjTest/static/myImg/workplace.png',
					// 	name: '收藏夹',
					// 	url: ''
					// },
					{
						icon: 'http://3ch.oss-cn-hangzhou.aliyuncs.com/qjTest/static/myImg/workplace.png',
						name: '关注店铺',
						url: ''
					},
					{
						icon: 'http://3ch.oss-cn-hangzhou.aliyuncs.com/qjTest/static/myImg/workplace.png',
						name: '浏览记录',
						url: ''
					},
					{
						icon: 'http://3ch.oss-cn-hangzhou.aliyuncs.com/qjTest/static/myImg/workplace.png',
						name: '优惠券',
						url: ''
					},
				],
				orderList: [{
						icon: 'gift',
						name: '待付款',
						url: ''
					},
					{
						icon: 'gift',
						name: '待使用',
						url: ''
					},
					// {
					// 	icon: 'gift',
					// 	name: '待收货',
					// 	url: ''
					// },
					{
						icon: 'gift',
						name: '待评价',
						url: ''
					},
					{
						icon: 'gift',
						name: '退款/售后',
						url: ''
					}
				],
				myImg: 'http://3ch.oss-cn-hangzhou.aliyuncs.com/qjTest/static/myImg/workplace.png'


			}
		},
		methods: {
			collect(item){
				console.log(item.name)
			},
			order(item){
				console.log(item.name)
			},
			address(){
				uni.navigateTo({
					url:'myPackageA/mine/address/address'
				})
			},
			navToOrder(){
				uni.navigateTo({
					url:'myPackageA/orders/orders'
				})
			}

		},
		onLoad() {
			this.userInfo = this.$store.state.user.userInfo
			console.log("user",this.userInfo)
		}
	}
</script>

<style>
	.radius-box {
		background-color: #FFFFFF;
		border-radius: 20rpx;
	}

	.u-margin-top {
		margin-top: 20rpx
	}
	.shadow-box {
		box-shadow: 3px 3px 5px 1px #dadada;
	}
</style>
