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

		<view class="container-box">
			<view>
				<u-form :model="form" ref="uForm">
					<u-form-item label="收货人" prop="name" label-width="20%">
						<u-input v-model="form.name" placeholder="请输入姓名" />
						<view>+通讯录</view>
					</u-form-item>
					<u-form-item label="手机号码" prop="phone" label-width="20%">
						<u-input v-model="form.phone" placeholder="请输入手机号码" />
						<view class="c-gray">+86</view>
						<u-icon name="arrow-right" color="#cacaca" size="28"></u-icon>
					</u-form-item>
					<u-form-item label="选择地区" prop="region" label-width="20%">
						<u-input @tap="showRegionPicker" disabled type="text" v-model="form.region"
							placeholder="省市区县、乡镇等" />
						<u-icon name="arrow-right" color="#cacaca" size="28"></u-icon>
					</u-form-item>
					<u-form-item label="详细地址" prop="address" label-width="20%">
						<u-input v-model="form.address" placeholder="请输入详细地址" />
						<u-icon name="map-fill" color="#ffab4b" size="28"></u-icon>
						定位
					</u-form-item>
				</u-form>
				<u-picker mode="region" ref="uPicker" v-model="show" @confirm="confirm" />
			</view>
			<view class="nb-between-center" style="margin-top: 40rpx;">
				<view class="">
					<view class="">设置默认地址</view>
					<view class="">提醒：每次下单会默认推荐该地址</view>
				</view>
				<view class="">
					<switch color="red" @change="setDefault" />
				</view>
			</view>
			<view style="margin-top: 100rpx;">
				<u-button type="success" @click="submit">保存</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				edit: false,
				form: {
					name: '',
					region: '',
					phone: '',
					address: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请填写姓名',
						// 可以单个或者同时写两个触发验证方式 //change：字段值发生变化时校验// blur： 输入框失去焦点时触发
						trigger: ['change', 'blur'],
					}],
					region: [{
						min: 5,
						message: '省、市、区、街道',
						trigger: 'change'
					}],
					phone: [{
							required: true,
							message: '请输入正确的手机号码',
							trigger: ['change', 'blur']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					address: [{
						min: 5,
						message: '小区楼栋、乡村名称',
						trigger: 'change'
					}]
				}

			}
		},
		methods: {
			confirm(e) {
				console.log(e);
				this.form.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},
			setDefault() {},
			showRegionPicker() {
				this.show = true;
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			//返回
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		// 接收状态
		onLoad(event) {
			console.log("event", event)
			this.edit = event.state
			// console.log(event.upaddress.address)
		},
		//
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style>

</style>
