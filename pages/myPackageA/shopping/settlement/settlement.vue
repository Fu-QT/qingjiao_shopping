<template>
	<view class="nb-container" style="background-color: #f1f1f1">
		<u-navbar back-text="返回" title="提交订单"></u-navbar>
		<view class="nb-body">
			<view class="nb-container-box" style="margin-top: 20rpx;">
				<view class="nb-between-center" v-for="(item,index) in commodity"
					style="margin-bottom: 20rpx;background-color: #FFFFFF;border-radius: 20rpx;padding: 20rpx;">
					<view class="nb-flex-box">
						<view>
							<!-- <image style="width: 120rpx;height: 120rpx;" src="../../../../static/fshan.jpg_.webp"
								mode="">
							</image> -->
							<u-image height="80px" width="100px" shape="square" borderRadius="5px"
								src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"></u-image>
						</view>
						<view class="nb-column-space-between" style="margin-left: 20rpx;">
							<view class="fs-mini">{{item.data.NAME}}</view>
							<view class="c-gray fs-mini">{{item.format}}</view>
							<view class="fs-small" style="color: red;">￥{{item.data.FORMAT_VALUE[item.format].PRICE}}
							</view>
						</view>
					</view>
					<view class="fs-small" style="">
						x{{item.count}}
					</view>
				</view>
				<view>
					<view class="fs-medium nb-padding-medium">总价：<text style="color: #FA3534;">￥{{grossAmount}}元</text>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 150rpx;">
			<u-button type="primary" @click="payment">提交订单</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				commodity: [{
					data: {
						FORMAT_VALUE: []
					}
				}],
				grossAmount: 0, //总价
			}
		},
		methods: {
			payment() {
				let order = [];
				for (let key of Object.keys(this.commodity)) {
					let data = {
						ID: this.commodity[key].data.ID,
						FORMAT: this.commodity[key].format,
						SIZE: this.commodity[key].count
					}
					order.push(data)
				}
				console.log("fgsge", order)
				let cnt = {
					BILL_ID: 123,
					data: order
				}
				this.$api.MallMerchantApi.addBill(cnt).then(data => {
					console.log("提交订单", data)
				})
			},
			cartCalculate() {
				this.grossAmount = 0;
				for (let key in this.commodity) {
					let item = this.commodity[key]
					this.grossAmount += (item.data.FORMAT_VALUE[item.format].PRICE * item.count)
				}
			},

		},
		onLoad() {
			this.commodity = this.$store.state.mall.cacheCart
			console.log("da", this.commodity)
			this.cartCalculate()
		}
	}
</script>

<style>

</style>
