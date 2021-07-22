<template>
	<view class="nb-container" style="background-color: #f1f1f1;">
		<u-navbar back-text="返回" title="收货地址"></u-navbar>
		<view class="nb-body container-box" v-if="addressList.length != 0">
			<view class=" card-box shadow-box" v-for="(item,index) in addressList">
				<view class="nb-flex-box" style="padding: 20rpx;border-bottom: 1rpx #f1f1f1 solid;">
					<view class="nb-align-center nb-self-adaption">
						<view class="name-box nb-flex-center fs-mini">
							<!-- 判断名字长度 -->
							<view v-if="item.name.length <= 2">
								{{item.name}}
							</view>
							<view v-else>
								{{item.name.substring(0,1)}}
							</view>
						</view>
						<view class="nb-self-adaption" style="margin-left: 20rpx;">
							<view class="nb-flex-box">
								<view class="fs-small" style="font-weight: bold;">{{item.name}}</view>
								<view class="fs-small c-gray" style="margin-left: 10px;">{{item.telephone}}</view>
							</view>
							<view class="nb-self-adaption" style="margin-top: 10rpx;">{{item.address}}</view>
						</view>
					</view>
					<view class="nb-align-center" @click="edit(item)" style="width: 100rpx;">
						<view class="nb-self-adaption nb-flex-center">
							<u-icon name="edit-pen-fill" color="#cfcfcf" size="38"></u-icon>
						</view>
					</view>
				</view>

				<view class="nb-between-center fs-mini" style="padding: 20rpx;">
					<!-- 默认和单选框 -->
					<view class="nb-align-center">
						<radio style="transform:scale(0.7);" @click="change(index)" :checked="index === current" />
						<view>默认地址</view>
					</view>
					<view @click="deleteAddress">删除</view>
				</view>
			</view>

		</view>
		<view v-else class="nb-flex-center" style="line-height: 200px;">
			<view>暂无收货地址</view>
		</view>
		<view style="background-color: #FFFFFF;height: 130rpx;">
			<u-button type="primary" @click="preservation">+添加收货地址</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: null,
				addressList: [{
						name: '张三',
						address: '贵州省遵义市红花岗区中山路纪念公园',
						telephone: 15508520852
					},
					{
						name: '王麻',
						address: '贵州省遵义市红花岗区中山路纪念公园中关村创业产业园3楼301',
						telephone: 15508520852
					}, {
						name: '王麻子',
						address: '贵州省遵义市红花岗区中山路纪念公园',
						telephone: 15508520852
					},
				],
			}
		},
		methods: {
			change(index) {
				this.current = index
			},
			// 删除
			deleteAddress() {
				uni.showModal({
					content: '确定要删除该地址',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			// 编辑修改
			edit(item) {
				console.log(item)
				uni.navigateTo({
					url: this.$pathUtiles.paramMerge("../editAddress/editAddress", {
						upaddress: item,
						state: true
					})
				})
			},
			// 添加
			preservation() {
				uni.navigateTo({
					url: this.$pathUtiles.paramMerge("../editAddress/editAddress", {
						state: false
					})
				})
			}

		},
		mounted() {

		}

	}
</script>

<style>
	.card-box {
		background-color: #ffffff;
		border-radius: 20rpx;
		margin: 20rpx auto;
	}

	.name-box {
		width: 60rpx;
		height: 60rpx;
		background-color: #F0AD4E;
		border-radius: 100rpx;
	}

	.shadow-box {
		box-shadow: 3px 3px 5px 1px #dadada;
	}
</style>
