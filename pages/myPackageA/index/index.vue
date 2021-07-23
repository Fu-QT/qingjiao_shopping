<template>
	<view class="nb-container">
		<view class="nb-header">
			订不到含量
		</view>
		<view class="nb-body container-box">
			<view>
				横向布局
				<view class="nb-flex-box" style="height: 100px;">
					<view style="width: 33.3%;background-color: #0066CC;">

					</view>
					<view style="width: 33.3%;background-color: #ff5500;">

					</view>
					<view style="width: 33.3%;background-color: #55ff00;">

					</view>
				</view>
			</view>
			<view>
				纵向布局
				<view class="nb-column">
					<view style="height: 100px;background-color: #0066CC;">

					</view>
					<view style="height: 100px;background-color: #ff5500;">

					</view>
					<view style="height: 100px;background-color: #55ff00;">

					</view>
				</view>
			</view>
			<view class="nb-align-center" style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
				<view style="width: 100%;text-align: center;">
					纵向布局-自动宽度
				</view>
			</view>
			<view class="nb-align-center"
				style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 50%;">
				<view style="width: 100%;text-align: center;">
					纵向布局-固定宽度
				</view>
			</view>
			<view class="nb-flex-box">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view class="nb-align-center nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view class="nb-center">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view class="nb-flex-end">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view style="display: flex;">
				<view class="nb-align-center nb-self-adaption"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
				<view class="nb-align-center nb-self-adaption"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
			</view>
			<view class="nb-space-between">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
			</view>
			<view class="nb-flex-box">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
				<view class="nb-align-center nb-self-adaption"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						自动沾满剩余部分
					</view>
				</view>
			</view>
			<view class="nb-flex-box">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
				<view class="nb-align-center nb-self-adaption"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						自动沾满剩余部分
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
			</view>
			<view class="nb-wrap-flex-box">
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
				<view class="nb-align-center"
					style="background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
			</view>
			<view class="nb-flex-box">
				<view class="nb-column"
					style="background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;">
					垂直居顶
				</view>
				<view class="nb-column-center"
					style="background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;">
					垂直居中
				</view>
				<view class="nb-column-end"
					style="background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;">
					垂直居底
				</view>
			</view>
			<view class="nb-flex-box">
				<view style="width: 30%;background-color: #0066CC;height: 100px;">

				</view>
				<view class="nb-column-space-between nb-self-adaption"
					style="margin-left: 10px;">
					<view style="height: 50px;background-color: #acacac;">

					</view>
					<view class="nb-space-between" style="height: 30px;text-align: center;">
						<view style="background-color: #e1e1e1;width: 40%;">
							剩余数量
						</view>
						<view style="background-color: #e1e1e1;width: 40%;">
							立即购买
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="nb-footer">
			<button type="default">底部按钮</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.nb-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	
	

	.nb-body {
		flex: 1 1 100%;
		overflow-x: scroll;
	}

	.nb-footer {
		align-items: center;
		display: flex;
		height: 80px;
	}
</style>
