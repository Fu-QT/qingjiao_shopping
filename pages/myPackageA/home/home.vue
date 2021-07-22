<template>
	<view style="background-color: #efefef;">
		<view>
			<u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>
		</view>
		<view class="container-box" style="border-radius: 20rpx;">
			<u-swiper :list="swiperList"></u-swiper>
		</view>

		<view class="nb-wrap-flex-box container-box"
			style="background-color: #FFFFFF;border-radius: 20rpx;margin-top: 20rpx;">
			<view v-for="item in commodityList" style="width: 20%;padding: 10rpx;">
				<view class="nb-center">
					<u-icon :name="item.image" color="#f37b1d" size="60"></u-icon>
				</view>
				<view class="nb-center">{{item.name}}</view>
			</view>
		</view>

		<view class="fs-medium container-box" style="padding: 10rpx 0;">猜你喜欢</view>

		<view>

			<view class="nb-flex-box container-box" v-for="(item,index) in 10" @click="navToshopping"
				style="background-color: #FFFFFF;margin-top: 20rpx;padding: 10rpx;border-radius: 20rpx;">
				<view class="nb-center" style="width: 30%;">
					<image style="width: 200rpx;height: 200rpx;" src="../../../static/home_checked.png" mode="">
					</image>
				</view>
				<view class="nb-column-space-between" style="margin-left: 10rpx;width: 70%;">
					<view class="fs-medium beyond-hidden">张三展示柜张三展示柜张三展示柜张三展示柜</view>
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
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '首页'
					},
					{
						name: '家电'
					},
					{
						name: '电脑办公'
					}
				],
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
			navToshopping() {
				uni.navigateTo({
					url: "../shopping/shopping"
				})
			},
			sectionChange(index) {
				this.curNow = index;
			}
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
</style>
