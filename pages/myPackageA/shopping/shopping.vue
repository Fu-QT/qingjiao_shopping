<template>
	<view>
		<!-- 今日推荐 -->
		<view class="container-box">
			<view class="flex-box">
				<u-icon name="thumb-up-fill" color="#065c8b" size="48"></u-icon>
				<view class="mar-left-10 title-box">
					今日推荐
				</view>
			</view>
			<view class="scroll-box">
				<view v-for="item in recommendList" class="item-box">
					<u-image width="100%" height="100px" :src="item.img" shape="square" borderRadius="10px">
					</u-image>
					<view class="item-box-label column-flex-box">
						{{item.label}}
					</view>
				</view>
			</view>
		</view>
		<view class="nb-container">
			<u-notice-bar mode="horizontal" :volume-icon="false" :list="noticeList"></u-notice-bar>
			<!-- 商品橱窗 -->
			<view class="nb-body flex-box">
				<!-- 左边盒子 -->
				<view class="commodity-left-box">
					<view v-for="(item,index) in tagList" class="tags-box" :class="{currbox:item.flag}"
						@click="choice(index)">
						{{item.label}}
					</view>
				</view>
				<!-- 右边盒子 -->
				<view class="commodity-right-box">
					<view class="flex-box" style="padding: 10px;" v-for="i in 25" @click="navToDetails">
						<u-image shape="square" borderRadius="10px" width="100px" height="80px"
							src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"></u-image>
						<view class="mar-left-small flex-box commodity-content-box">
							<view>
								黑椒牛排{{i}}
							</view>
							<view class="flex-box" style="justify-content: space-between;">
								<view class="price-box" style="color: red">
									￥15
								</view>
								<view>
									<u-button v-if="specificFlag" size="mini" @click="specificShow = true">
										选规格
									</u-button>
									<view v-else @click.stop="toCart">
										<u-icon name="plus-circle-fill" color="#065c8b" size="40">
										</u-icon>
									</view>

								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="footer flex-box" style="touch-action: none;">
				<view class="flex-box bottom-left-box" @click="cartShow = !cartShow">
					<u-badge count="5" :offset="[20, 20]"></u-badge>
					<u-icon name="shopping-cart-fill" color="#065c8b" size="80"></u-icon>
				</view>
				<view class="flex-box bottom-rirht-box">
					<view style="color: red">
						￥15
					</view>
					<view style="margin-right: 10px;">
						<u-button size="mini" :disabled="checkAccountFlag ? false:true"
							:type="checkAccountFlag? 'primary':''" @click="checkAccount"
							:custom-style="checkAccountFlag ? customStyle:''">
							{{checkAccountFlag ? "去结算":"请选择"}}
						</u-button>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<view>
			<!-- 规格弹出层 -->
			<view>
				<u-popup v-model="specificShow" mode="center" border-radius="10" width="80%">
					<view style="min-height: 200px;" class="container-box">
						<!-- 商品名称 -->
						<view style="font-size: 16px;text-align: center;line-height: 40px;">
							旺仔牛奶
						</view>
						<view class="flex-box" style="justify-content: space-between;align-items: center;height: 40px;">
							数量
							<view>
								<u-number-box></u-number-box>
							</view>
						</view>
						<view>
							规格
							<view class="flex-box" style="flex-wrap: wrap;margin: 0 -10px;">
								<view v-for="(item,index) in specificList" @click="choiceSpacific(index)"
									style="width: 33.3%;padding: 10px;">
									<view :class="{specificcurrbox:item.flag}"
										style="text-align: center;padding: 5px 0px;border-radius: 5px;background-color: #f0f0f0;border:1px solid transparent;">
										fnasof
									</view>
								</view>
							</view>
						</view>
					</view>
					<view style="width: 100%;background-color: #f0f0f0;">
						<view class="container-box flex-box"
							style="justify-content: space-between;align-items: center;height: 60px;">
							<view style="color: red;">
								￥15
							</view>
							<view>
								<u-button size="mini" type="warning" @click="toCacheCart">
									加入购物车
								</u-button>

							</view>
						</view>
					</view>
				</u-popup>
			</view>


			<!-- 购物车弹出层 -->
			<view>
				<u-popup v-model="cartShow" mode="bottom" border-radius="20" z-index="888">
					<view class="container-box" style="min-height: 200px;padding-bottom: 80px;touch-action: none;">
						<view class="flex-box" style="justify-content: space-between;height: 40px;align-items: center;">
							<view>
								已选商品
							</view>
							<view class="flex-box" style="align-items: center;" @click="clearCart">
								<u-icon name="trash" size="40"></u-icon>
								清空
							</view>
						</view>
						<view class="flex-box" style="height: 80px;margin: 10px auto;" v-for="i in 2">
							<u-image height="80px" width="80px" shape="square" borderRadius="5px"
								src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj_task/img/1%20(4).jpg"></u-image>
							<view style="flex: 1; flex-direction: column;justify-content: space-between;"
								class="flex-box mar-left-small">
								<view>
									旺仔牛奶
								</view>
								<view>
									规格[常温]
								</view>
								<view class="flex-box" style="justify-content: space-between;">
									<view style="color: red;">
										￥5
									</view>
									<view>
										<u-number-box></u-number-box>
									</view>
								</view>
							</view>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
				tagList: [{
						label: "item1",
						flag: true
					},
					{
						label: "item1greggsgs",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
				],
				commodityList: [],
				customStyle: {
					backgroundColor: '#065c8b'
				},
				specificList: [{
						label: "item1",
						flag: true
					},
					{
						label: "item1greggsgs",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
					{
						label: "item1",
						flag: false
					},
				],
				specificFlag: true,

				specificShow: false,
				cartShow: false,
				checkAccountFlag: true
			}
		},
		methods: {
			choice(index) {
				for (var i = 0; i < this.tagList.length; i++) {
					if (i == index) {
						this.tagList[i].flag = true
					} else {
						this.tagList[i].flag = false
					}
				}
			},
			choiceSpacific(index) {
				console.log(index)
				for (var i = 0; i < this.specificList.length; i++) {
					if (i == index) {
						this.specificList[i].flag = true
					} else {
						this.specificList[i].flag = false
					}
				}
			},
			navToDetails() {
				console.log("navToDetails")
			},
			toCart() {
				console.log("toCart")
			},
			// toSpecific() {
			// 	console.log("toSpecific")
			// 	this.specificShow = true;
			// },
			// showCart() {
			// 	console.log("showCart")
			// },
			checkAccount() {
				console.log("checkAccount")
			},
			toCacheCart() {
				console.log("toCacheCart")
			},
			clearCart() {
				console.log("clearCart")
			},


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

	.specificcurrbox {
		border: 1px solid #065C8B !important;
		color: #065c8b;
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
