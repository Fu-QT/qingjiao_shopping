<template>
	<view>
		<u-popup v-model="cartShow" mode="bottom" border-radius="20" z-index="5">
			<view class="nb-container" style="height: 400px;">
				<view class="flex-box"
					style="justify-content: space-between;height: 40px;align-items: center;margin: 0px 3%;">
					<view>
						已选商品
					</view>
					<view class="flex-box" style="align-items: center;" @click="clearCart">
						<u-icon name="trash" size="40"></u-icon>
						清空
					</view>
				</view>
				<scroll-view scroll-y="true" class="nb-body">
					<view class="flex-box" style="height: 80px;margin: 10px 5%;" v-for="(item,key) in cacheCartList"
						:key="item">
						<u-image height="80px" width="100px" shape="square" borderRadius="5px"
							src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"></u-image>
						<view style="flex: 1; flex-direction: column;justify-content: space-between;"
							class="flex-box mar-left-small">
							<view>
								{{item.data.NAME}}
							</view>
							<view>
								{{item.format}}
							</view>
							<view class="flex-box" style="justify-content: space-between;">
								<view style="color: red;">
									￥{{item.data.FORMAT_VALUE[item.format].PRICE * item.count}}
								</view>
								<view class="flex-box">
									<view class="flex-box" v-if="item.count > 0">
										<view @click.stop="updateCount(item,-1)">
											<u-icon name="minus-circle-fill" color="#065c8b" size="40">
											</u-icon>
										</view>
										<view style="padding: 0px 5px;">
											{{item.count}}
										</view>
									</view>
									<view @click.stop="updateCount(item,1)">
										<u-icon name="plus-circle-fill" color="#065c8b" size="40">
										</u-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view style="height: 100px;background-color: #fff;">

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

</style>
