<template>
	<view style="background-color: #f1f1f1;">
		<view class="container-box">
			<view class="shadow-box" style="border-radius: 20rpx;padding: 10rpx 0;">
				<u-swiper :list="swiperList"></u-swiper>
			</view>

			<view class="nb-wrap-flex-box shadow-box middle-box">
				<view v-for="item in commodityList" style="width: 20%;padding: 10rpx;">
					<view class="nb-center">
						<u-icon :name="item.image" color="#f37b1d" size="60"></u-icon>
					</view>
					<view class="nb-center">{{item.name}}</view>
				</view>
			</view>

			<view class="fs-medium" style="padding: 10rpx 0;">猜你喜欢</view>
			<view class="distance-bottom">
				<view class="nb-flex-box business-box" v-for="(item,index) in business" @click="navToshopping(item)">
					<view class="nb-center" style="width: 30%;">
						<image style="width: 200rpx;height: 200rpx;" :src="item.ICON" mode=""></image>
					</view>
					<view class="nb-column-space-between" style="margin-left: 20rpx;width: 70%;">
						<view class="fs-medium beyond-hidden">{{item.NAME}}</view>
						<view class="nb-flex-box">
							<view style="color: #FA3534;">4.5分</view>
							<view class="c-gray" style="margin-left: 10rpx;">月售275</view>
							<view class="c-gray" style="margin-left: 10rpx;">人均￥17</view>
						</view>

						<view class="nb-flex-box fs-mini">
							<view style="padding: 2px;border: 1px solid #d55328;color: #d5613a;">20减5</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				business: [],

				curNow: 0,
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				commodityList: [{
						image: 'gift',
						name: '面包蛋糕'
					},
					{
						image: 'gift',
						name: '美食'
					},
					{
						image: 'gift',
						name: '水果'
					},
					{
						image: 'gift',
						name: '美食'
					},
					{
						image: 'gift',
						name: '水果'
					},
					{
						image: 'gift',
						name: '美食'
					},
					{
						image: 'gift',
						name: '水果'
					}
				]

			}
		},
		methods: {
			navToshopping(item) {
				uni.navigateTo({
					url: "myPackageA/shopping/shopping"
				})
			},
			sectionChange(index) {
				this.curNow = index;
			},

			// 搜索商家
			query() {
				let cnt = {
					STATUS: "ON",
					offset: 0,
					count: 10
				}
				this.$api.MallMerchantApi.search(cnt).then(data => {
					console.log("data", data)
					this.business = data
				})
			}
		},
		onLoad() {
			this.query()
		}
	}
</script>

<style>
	.beyond-hidden {
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	.business-box {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		box-shadow: 3px 3px 5px 1px #dadada;
	}

	.shadow-box {
		box-shadow: 3px 3px 5px 1px #dadada;
	}

	.middle-box {
		background-color: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}

	.distance-bottom {
		padding-bottom: 20px;
	}
</style>
