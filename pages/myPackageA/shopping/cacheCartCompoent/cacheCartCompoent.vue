<template>
	<view>
		<u-popup v-model="cartShow" mode="bottom" border-radius="20" z-index="5">
			<view style="height: 400px;">
				<view class="nb-between-center" style="height: 40px;margin: 0px 3%;">
					<view>
						已选商品
					</view>
					<view class="nb-flex-box" @click="clearCart">
						<u-icon name="trash" size="40"></u-icon>
						清空
					</view>
				</view>
				<view>
					<view style="height: 280px;" v-if="!cacheCartList || Object.keys(cacheCartList).length == 0">
						<u-empty text="还没有添加商品哦...." mode="car"></u-empty>
					</view>
					<view v-else>
						<scroll-view scroll-y="true" style="height: 280px;">
							<view class="nb-flex-box" style="padding: 10px 5%;" :key="item"
								v-for="(item,key) in cacheCartList">
								<u-image height="80px" width="80px" shape="square" borderRadius="5px"
									src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg">
								</u-image>
								<view class="nb-column-space-between nb-mar-left-medium nb-self-adaption">
									<view>
										{{item.data.NAME}}
									</view>
									<view>
										{{item.format}}
									</view>
									<view class="nb-space-between">
										<view style="color: red;">
											￥{{item.data.FORMAT_VALUE[item.format].PRICE * item.count}}
										</view>
										<view class="nb-flex-box">
											<view class="nb-flex-box" v-if="item.count > 0">
												<view @click.stop="updateCount(item,-1)" class="icon-minus">
													<u-icon name="minus" size="26"></u-icon>
												</view>
												<view class="number-input">
													{{item.count}}
												</view>
											</view>
											<view @click.stop="updateCount(item,1)" class="icon-plus">
												<u-icon name="plus" size="26"></u-icon>
											</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view style="height: 80px;background-color: #fff;">

				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cacheCartList: this.$store.state.mall.cacheCart,
				cartShow: false,
			}
		},
		methods: {
			clearCart() {
				this.$store.commit("emptyCacheCart")
				uni.hideLoading()
				this.cartShow = !this.cartShow
				this.$forceUpdate()
			},
			open() {
				this.cartShow = !this.cartShow
			},
			updateCount(item, count) {
				item.count += count
				this.$store.commit("savaCacheCart")
				this.$forceUpdate()
			},
		},
		watch: {
			"$store.state.mall.cacheCart"(v) {
				this.cacheCartList = v;
			}
		}
	}
</script>

<style>
	.icon-minus,
	.icon-plus {
		width: 30px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F2F3F5;

	}

	.icon-plus {
		border-radius: 0 8rpx 8rpx 0;

	}

	.number-input {
		background-color: #F2F3F5;
		text-align: center;
		width: 40px;
		height: 20px;
		margin: 0 6rpx;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.icon-minus {
		border-radius: 8rpx 0 0 8rpx;
	}
</style>
