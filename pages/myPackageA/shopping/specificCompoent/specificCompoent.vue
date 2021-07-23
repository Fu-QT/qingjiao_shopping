<template>
	<view>
		<u-popup v-model="show" mode="center" border-radius="10" width="80%">
			<view>
				<view style="min-height: 200px;" class="nb-container-box">
					<!-- 商品名称 -->
					<view class="nb-flex-center" style="height: 40px;">
						{{ commodity.NAME }}
					</view>
					<view class="nb-flex-box nb-between-center" style="height: 40px;">
						数量
						<view>
							<u-number-box v-model="count"></u-number-box>
						</view>
					</view>
					<view v-for="types in commodity.FORMAT_TYPE">
						{{ types }}
						<view class="nb-wrap-flex-box" style="margin: 0 -10px;">
							<view v-for="(item,index) in specific[types]" @click="onClick(types,item.label)"
								class="nb-padding-medium" style="width: 33.3%;">
								<view class="btn-box" :class="{specificcurrbox:form[types] == item.label}">
									{{ item.label }}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view style="width: 100%;background-color: #f0f0f0;">
					<view class="nb-container-box nb-between-center"
						style="height: 60px;">
						<view style="color: red;">
							￥ {{ calculatePrice() }}
						</view>
						<view>
							<u-button size="mini" type="warning" @click="savaCache">
								加入购物车
							</u-button>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				show: false,
				commodity: {},
				specific: {},
				form: {},
				count: 0,
				format: undefined,
				key: undefined,

			}
		},
		methods: {

			open(data) {
				this.show = true
				this.commodity = data
				this.init()
				this.calculateCount()
			},

			getFormatKey(index) {
				let array = [];
				let strArray = [];
				let fv = this.commodity.FORMAT_VALUE
				let b = true
				for (let key of Object.keys(fv)) {
					let str = key.split(";")[index]
					if (strArray.indexOf(str) != -1) {
						continue;
					}
					strArray.push(str)
					let item = {
						label: str,
						flag: b
					}
					if (b) {
						this.form[this.commodity.FORMAT_TYPE[index]] = str
					}
					array.push(item)
					b = false;
				}
				return array
			},
			init() {
				let types = this.commodity.FORMAT_TYPE
				for (let index in types) {
					let type = types[index];
					this.specific[type] = this.getFormatKey(index)
				}
				this.calculate()
				this.calculatePrice()
				this.$forceUpdate()
			},

			onClick(key, val) {
				this.form[key] = val
				this.calculate()
				this.calculateCount()
				this.$forceUpdate()
			},
			calculate() {
				let str = "";
				for (let key of this.commodity.FORMAT_TYPE) {
					let val = this.form[key];
					str += val + ";"
				}
				str = str.substring(0, str.length - 1);
				this.format = str;
				this.key = this.commodity.ID + "_" + this.format
			},
			calculateCount() {
				this.count = this.$store.getters.getCacheCartCount({
					id: this.commodity.ID,
					format: this.format
				})
			},
			calculatePrice() {
				if (this.format) {
					let val = this.commodity.FORMAT_VALUE[this.format];
					if (val) {
						return val.PRICE
					}
				}
			},
			savaCache() {
				this.$store.commit("setCacheCart", {
					data: this.commodity,
					count: this.count,
					format: this.format
				})
			},
		},
	}
</script>

<style>
	.specificcurrbox {
		border: 1px solid #065C8B !important;
		color: #065c8b;
	}

	.btn-box {
		text-align: center;
		padding: 5px 0px;
		border-radius: 5px;
		background-color: #f0f0f0;
		border: 1px solid transparent;
	}
</style>
