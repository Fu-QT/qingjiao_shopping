<template>
	<view style="background-color:#f1f1f1; min-height: 100vh">
		<u-navbar back-text="返回" title="订单"></u-navbar>
		<view class="distance-bottom">
			<view >
				<view class="nb-container-box" v-for="(item,index) in orderList.Bill"
					style="background-color: #FFFFFF;border-radius: 20rpx;">
					<view class="nb-container-box" style="padding: 20rpx 0;margin-top: 30rpx;">
						<view class="fs-mini nb-space-between"
							style="border-bottom: 1rpx #f1f1f1 solid;padding-bottom: 20rpx;">
							<view>订单编号</view>
							<view>{{item.ID}}</view>
						</view>
						<view v-for="(commodity,index) in item.COMMODITY_DATA" style="padding: 20rpx 0;">
							<view class="nb-between-center" v-for="shop in commodity" style="padding: 10rpx 0;">
								<view class="nb-flex-box">
									<view>
										<u-image height="80px" width="100px" shape="square" borderRadius="5px"
											src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg">
										</u-image>
									</view>
									<view class="nb-column-space-between" style="margin-left: 20rpx;">
										<view class="fs-mini">{{shop.NAME}}</view>
										<view class="c-gray fs-mini">{{shop.FORMAT}}</view>
										<view class="fs-small" style="color: #FA3534;">￥{{shop.TOTAL_PRICE}}元</view>
									</view>
								</view>
								<view class="fs-small" style="margin-top: 6rpx;">x{{shop.AMOUNT}}</view>
							</view>
						</view>
						<view class="fs-small nb-flex-end">总价：<text style="color: #FA3534;">{{item.PRICE}}元</text>
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
				orderList: [{
					Bill: [{
						COMMODITY_DATA: [{
							commodityList: []
						}]
					}]

				}]

			}
		},
		methods: {
			query() {
				let cnt = {}
				this.$api.MallMerchantApi.searchBill(cnt).then(data => {
					console.log("data", data)
					this.orderList = data
				})
			}
		},
		onLoad() {
			this.query()
		}
	}
</script>

<style>
	.distance-bottom {
		padding-bottom: 40rpx;
	}
</style>
