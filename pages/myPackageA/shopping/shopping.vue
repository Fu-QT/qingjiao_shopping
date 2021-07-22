<template>
	<view>
		<view class="nb-container u-skeleton">
			<view class="nb-body">
				<!-- 今日推荐 -->
				<view class="container-box">
					<view class="flex-box">
						<view class="u-skeleton-fillet">
							<u-icon name="thumb-up-fill" color="#065c8b" size="48"></u-icon>
						</view>
						<view class="mar-left-10 title-box u-skeleton-fillet">
							今日推荐
						</view>
					</view>
					<view class="scroll-box">
						<view v-for="item in recommendList" class="item-box u-skeleton-fillet">
							<u-image width="100%" height="100px" :src="item.img" shape="square" borderRadius="10px">
							</u-image>
							<view class="item-box-label column-flex-box">
								{{item.label}}
							</view>
						</view>
					</view>
				</view>
				<view class="nb-container" style="height: calc(100vh - 80px);">
					<view class="u-skeleton-fillet">
						<u-notice-bar mode="horizontal" :volume-icon="false" :list="noticeList"></u-notice-bar>
					</view>
					<!-- 商品橱窗 -->
					<view class="nb-body flex-box">
						<!-- 左边盒子 -->
						<view class="commodity-left-box">
							<view v-for="(item,index) in tagList" class="tags-box" :class="{currbox:item.flag}"
								:key="item.ID" @click="choice(index,item)">
								<view class=" u-skeleton-fillet">
									{{ item.NAME }}
								</view>
								
							</view>
						</view>
						<!-- 右边盒子 -->
						<view class="commodity-right-box">
							<view class="flex-box" style="padding: 10px;" v-for="item in commodityList"
								@click="navToDetails(item)">
								<u-image shape="square" borderRadius="10px" width="100px" height="80px"
									src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"></u-image>
								<view class="mar-left-small flex-box commodity-content-box">
									<view class=" u-skeleton-fillet">
										{{ item.NAME }}
									</view>
									<view class="flex-box" style="justify-content: space-between;">
										<view class="price-box" style="color: red;">
											￥{{ item.MIN_PRICE }}
										</view>
										<view>
											<u-button v-if="item.flag" size="mini" @click="choiceSpacific(item)">
												选规格
											</u-button>
											<view v-else class="flex-box" style="align-items: center;">
												<view class="flex-box" v-if="getCount(item) > 0">
													<view @click.stop="toCacheCart(item,-1)">
														<u-icon name="minus-circle-fill" color="#065c8b" size="40">
														</u-icon>
													</view>
													<view style="padding: 0px 5px;">
														{{getCount(item)}}
													</view>
												</view>
												<view @click.stop="toCacheCart(item,1)">
													<u-icon name="plus-circle-fill" color="#065c8b" size="40">
													</u-icon>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="footer flex-box">
				<view class="flex-box bottom-left-box " @click="$refs.cacheCartShow.open()">
					<u-badge :count="commodityCount" :offset="[20, 20]"></u-badge>
					<view class="u-skeleton-circle">
						<u-icon name="shopping-cart-fill" color="#065c8b" size="80"></u-icon>
					</view>
				</view>
				<view class="flex-box bottom-rirht-box">
					<view style="color: red" class="u-skeleton-fillet">
						￥{{grossAmount}}
					</view>
					<view style="margin-right: 10px;" class="u-skeleton-fillet">
						<u-button size="mini" :disabled="checkAccountFlag ? false:true"
							:type="checkAccountFlag? 'primary':''" @click="checkAccount"
							:custom-style="checkAccountFlag ? customStyle:''">
							{{ checkAccountFlag ? "去结算" : "请选择" }}
						</u-button>
					</view>
				</view>
			</view>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
		<!-- 弹出层 -->
		<view>
			<!-- 规格弹出层 -->
			<specific-compoent ref="specificShow"></specific-compoent>
			<!-- 购物车弹出层 -->
			<cache-cart-compoent ref="cacheCartShow"></cache-cart-compoent>
		</view>

		<view v-if="refresh">

		</view>

	</view>
</template>

<script>
	import specificCompoent from './specificCompoent/specificCompoent.vue';
	import cacheCartCompoent from './cacheCartCompoent/cacheCartCompoent.vue';
	export default {
		components: {
			specificCompoent,
			cacheCartCompoent
		},
		data() {
			return {

				recommendList: [{
						label: "来一杯朗姆酒",
						img: "https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(1).jpg"
					},
					{
						label: "至尊披萨",
						img: "https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(2).jpg"
					},
					{
						label: "番茄牛肉",
						img: "https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(3).jpg"
					},
					{
						label: "黑椒意面",
						img: "https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"
					}
				],
				noticeList: [
					'欢迎光临',
					'您的座号是/19/号',
					'祝您用餐愉快'
				],
				current: 0,
				tagList: [],
				commodityList: [],
				customStyle: {
					backgroundColor: '#065c8b'
				},
				singleCommodity: {},
				cartShow: false,
				checkAccountFlag: true,
				refresh: false,
				commodityCount: 0,
				grossAmount: 0,
				pager: {
					offset: 0,
					count: 10
				},
				loading: true
			}
		},
		methods: {
			choice(index, item) {
				for (var i = 0; i < this.tagList.length; i++) {
					if (i == index) {
						this.tagList[i].flag = true
					} else {
						this.tagList[i].flag = false
					}
				}
				this.refresh = !this.refresh
				this.queryCommodity(item)
			},
			choiceSpacific(item) {
				console.log("item", item)
				this.$refs.specificShow.open(item)
				this.singleCommodity = item
			},

			navToDetails() {
				console.log("navToDetails")
			},
			checkAccount() {
				console.log("checkAccount", this.$store.state.mall.cacheCart)

			},
			toCacheCart(item, count) {
				console.log("toCacheCart", this.cacheCartList)
				count = this.getCount(item) + count
				if (count >= 0) {
					this.$store.commit("setCacheCart", {
						data: item,
						count: count,
						format: Object.keys(item.FORMAT_VALUE)[0]
					})
				}
				this.refresh = !this.refresh
			},

			queryGroup() {
				this.$api.TagApi.tagGroupList({
						CODE: 'STORE_PRD',
						count: 99,
						offset: 0
					})
					.then((data) => {
						this.queryTagList(data.list[0])
					})
					.catch((error) => {
						uni.showToast({
							title: "数据加载失败",
							icon: 'none'
						})
					})
			},
			queryTagList(event) {
				let req = {
					GROUP_SN: event.SN, // String 分组序号
					GROUP_CODE: event.CODE, // String 分组代码
					count: 99,
					offset: 0,
				}
				this.$api.TagApi.tagList(req)
					.then((data) => {
						for (var i = 0; i < data.list.length; i++) {
							if (i == 0) {
								data.list[i].flag = true;
							} else {
								data.list[i].flag = false;
							}
						}
						this.tagList = data.list
						this.queryCommodity(this.tagList[0])
						this.refresh = !this.refresh
					})
					.catch((error) => {
						uni.showToast({
							title: "数据加载失败",
							icon: 'none'
						})
					})
			},
			queryCommodity(event) {
				let cnt = {
					// MERCHANT_ID: "1",
					TAG_ID: [event.ID],
					offset: 0,
					count: 99
				}
				this.$api.CommodityApi.queryCommodity(cnt).then(data => {
					this.commodityList = data;
					this.loading = false;
					for (let item of this.commodityList) {
						item.flag = Object.keys(item.FORMAT_VALUE).length != 1
					}
				})
			},
			getCount(data, format) {
				if (!format) {
					format = Object.keys(data.FORMAT_VALUE)[0]
				}
				return this.$store.getters.getCacheCartCount({
					id: data.ID,
					format: format
				})
			},

			cartCalculate() {
				this.grossAmount = 0;
				this.commodityCount = 0;
				for (let key in this.cacheCartList) {
					let item = this.cacheCartList[key]
					this.grossAmount += (item.data.FORMAT_VALUE[item.format].PRICE * item.count)
					this.commodityCount += item.count
				}
				this.refresh = !this.refresh
			},
			init() {
				for (var i = 0; i < 5; i++) {
					this.tagList.push({})
				}
			}
		},
		onLoad() {
			this.init()
			setTimeout(()=>{
				this.queryGroup()
			},10000)
			
		},
		watch: {
			"$store.state.mall.cacheCart"(v) {
				this.cacheCartList = v
				this.cartCalculate()
			}
		}
	}
</script>

<style scoped>
	.title-box {
		font-size: 16px;
		color: #065c8b;
		line-height: 40px;
	}

	.scroll-box {
		width: 100%;
		display: flex;
		overflow: auto;
	}

	.item-box {
		width: 140px;
		background-color: #f0f0f0;
		min-height: 120px;
		flex-shrink: 0;
		border-radius: 10px;
		margin: 10px;
	}

	.item-box-label {
		text-align: center;
		height: 40px;
		word-break: break-all;
	}

	.currbox {
		background-color: #fff;
		color: #065c8b;
		font-weight: bold;
	}



	.commodity-left-box {
		width: 30%;
		overflow: scroll;
		align-items: center;
		background-color: #f0f0f0;

	}

	.tags-box {
		overflow: hidden;
		width: 100%;
		word-break: break-all;
		padding: 12px 8px;
		text-align: center;

	}

	.commodity-right-box {
		flex: 1 1 100%;
		overflow: scroll;
	}

	.commodity-content-box {
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	.footer {
		background-color: #f8f8f8;
		height: 80px;
		padding-bottom: 20px;
		z-index: 999;
	}

	.bottom-left-box {
		width: 20%;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.bottom-rirht-box {
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
</style>
