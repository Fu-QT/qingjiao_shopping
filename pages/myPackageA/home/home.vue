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
								<view class="price-box" style="color: #ba1a32;">
									￥15
								</view>
								<view>
									<u-icon v-if="specificFlag" name="plus-circle-fill" color="#065c8b" size="40"
										@click="toCart"></u-icon>
									<u-button v-else size="mini" :custom-style="customStyle" @click="toSpecific">选规格</u-button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="footer flex-box">
				<view class="flex-box bottom-rirht-box">
					<u-badge count="5" :offset="[20, 20]"></u-badge>
					<u-icon name="shopping-cart-fill" color="#065c8b" size="80"></u-icon>
				</view>
				<view style="flex: 1;justify-content: space-between;align-items: center;" class="flex-box">
					<view>
						总价
					</view>
					<view>
						结算按钮
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
					color: '#065c8b'
				},
				specificFlag: false
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
			navToDetails() {
				console.log("navToDetails")
			},
			toCart() {
				console.log("toCart")
			},
			toSpecific() {
				console.log("toSpecific")
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
		height: 80px;
		padding-bottom: 20px;
	}

	.bottom-rirht-box {
		width: 20%;
		align-items: center;
		justify-content: center;
		position: relative;
	}
</style>
