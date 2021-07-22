<template>
	<view>
		<!-- 导航栏 -->
		<view>
			<view v-if="edit == 'true'">
				<u-navbar back-text="返回" title="编辑收货地址"></u-navbar>
			</view>
			<view v-else>
				<u-navbar back-text="返回" title="添加收货地址"></u-navbar>
			</view>
		</view>

		<view class="edit-box flex-box">
			<view style="width: 20%;">收货人</view>
			<view style="width: 60%;">
				<input type="text" value="" v-model="list.name" placeholder="请输入姓名" />
			</view>
			<view style="width: 20%;display: flex;flex-direction: row-reverse;">+通讯录</view>
		</view>

		<view class="edit-box flex-box">
			<view style="width: 20%;">手机号码</view>
			<view style="width: 60%;">
				<input type="text" v-model="list.telephone" placeholder="请输入手机号码" />
			</view>
			<view style="width: 20%;display: flex;flex-direction: row-reverse;">+86</view>
		</view>

		<view class="edit-box flex-box">
			<view style="width: 20%;">选择地区</view>
			<!-- 获取地址 -->
			<view style="width: 60%;" @click="addressShow = true">
 				address
				<!--<pickerAddress v-model="addressShow" @confirm="addresspick" /> -->
			</view>
			<view style="width: 20%;display: flex;flex-direction: row-reverse;" @click="addressShow = true">
				
			</view>
		</view>

		<view class="edit-box flex-box">
			<view style="width: 20%;">详细地址</view>
			<view style="width: 60%;">
				<input type="text" v-model="list.detailedAddress" value="" placeholder="小区楼栋/乡村名称" />
			</view>
			<view style="width: 20%;display: flex;flex-direction: row-reverse;">
				<view>
					<view>定位</view>
				</view>
			</view>
		</view>

		<view style="width: 95%;margin: 0 auto;margin-top: 50rpx;">
			<view class="flex-center">
				<view>设为默认地址</view>
				<view>
					<switch v-model="list.delivery" />
				</view>
			</view>
			<view style="margin: 100rpx 0rpx;" @click="preservation">
				<button class="seckill-box">保存</button>
			</view>
		</view>

	</view>
</template>

<script>
	// import pickerAddress from '../../../components/liudx-pickerAddress/index.vue';
	export default {
		data() {
			return {
				edit: false,
				addressShow: false,
				form: {
					province: '',
					city: '',
					area: '',
				},
				address: '',
				list: {
					name: '',
					delivery: false,
					telephone: null,
					detailedAddress:'',
					address: '',
				}

			}
		},
		methods: {
			
			// 选择地址
			// addresspick(obj) {
			// 	let arr = ['province', 'city', 'area'];
			// 	let place = '';
			// 	arr.map(key => {
			// 		this.form[key] = obj[key].AreaId
			// 		place += obj[key].AreaName
			// 	})
			// 	this.address = place
			// },

			// 保存
			preservation() {
				this.list.address = this.address
				console.log('sdsds', this.list)
					
				if(this.list.name == ''){
					uni.showToast({
						title: "请输入姓名",
					})	
				}else if(this.list.detailedAddress == ''){
					uni.showToast({
						title: "请输入详细地址",
					})	
				}else if(this.list.telephone === null){
					uni.showToast({
						title:"请输入手机号"
					})	
				}else if(this.list.address == ''){
					uni.showToast({
						title:"请选择地址"
					})
				}else if(!(/^1[3456789]\d{9}$/.test(this.list.telephone))){
					uni.showToast({
						title:"请输入正确的手机号"
					})
				}else{
					uni.showToast({
						title: "保存成功",
						duration: 1000
					})
				}

			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
			

		},
		// 省市区
		// components: {
		// 	pickerAddress
		// },
		// 接收状态
		onLoad(b) {
			console.log(b.state)
			this.edit = b.state
		}
	}
</script>

<style>
	.edit-box {
		width: 95%;
		margin: 0 auto;
		border-bottom: 2rpx #d1d1d1 solid;
		padding: 20rpx 0;
	}

	.input-box {
		height: 40px;
		border: 1px #e1e1e1 solid;
		align-items: center;
		border-radius: 7px;

	}

	.seckill-box {
		width: 100%;
		color: #FFFFFF;
		border-radius: 40rpx;
		background-color: #ffaa00;
	}
</style>
