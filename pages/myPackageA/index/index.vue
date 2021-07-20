<template>
	<view class="nb-container">
		<view class="nb-header">
			订不到含量
		</view>
		<view class="nb-body" style="width: 94%;margin: 0 auto;">
			<view>
				横向布局
				<view style="display: flex;height: 100px;">
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
				<view style="display: flex;flex-direction: column;">
					<view style="height: 100px;background-color: #0066CC;">

					</view>
					<view style="height: 100px;background-color: #ff5500;">

					</view>
					<view style="height: 100px;background-color: #55ff00;">

					</view>
				</view>
			</view>
			<view style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
				<view style="width: 100%;text-align: center;">
					纵向布局-自动宽度
				</view>
			</view>
			<view
				style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 50%;">
				<view style="width: 100%;text-align: center;">
					纵向布局-固定宽度
				</view>
			</view>
			<view style="display: flex;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view style="display: flex;justify-content: center;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view style="display: flex;justify-content: flex-end;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-自动宽度
					</view>
				</view>
			</view>
			<view style="display: flex;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;flex: 1;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;flex: 1;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
			</view>
			<view style="display: flex;justify-content: space-between;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;">
					<view style="width: 100%;text-align: center;">
						纵向布局-平均分布
					</view>
				</view>
			</view>
			<view style="display: flex;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;flex: 1;">
					<view style="width: 100%;text-align: center;">
						自动沾满剩余部分
					</view>
				</view>
			</view>
			<view style="display: flex;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;flex: 1;">
					<view style="width: 100%;text-align: center;">
						自动沾满剩余部分
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 20%;">
					<view style="width: 100%;text-align: center;">
						固定宽度
					</view>
				</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
				<view
					style="display: flex;align-items: center;background-color: #e3e3e3;height: 50px;margin: 10px 5px;width: 40%;">
					<view style="width: 100%;text-align: center;">
						一行显示不全，wrap折行
					</view>
				</view>
			</view>
			<view style="display: flex;">
				<view
					style="display: flex; background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;flex-direction: column;">
					垂直居顶
				</view>
				<view
					style="display: flex;background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;flex-direction: column;justify-content: center;">
					垂直居中
				</view>
				<view
					style="display: flex;background-color: #e3e3e3;height: 100px;text-align: center;margin: 10px 5px;width: 30%;flex-direction: column;justify-content: flex-end;">
					垂直居底
				</view>
			</view>
			<view style="display: flex;">
				<view style="width: 30%;background-color: #0066CC;height: 100px;">

				</view>
				<view
					style="display: flex;flex-direction: column;flex: 1;justify-content: space-between;margin-left: 10px;">
					<view style="height: 50px;background-color: #acacac;">

					</view>
					<view style="height: 30px;display: flex;text-align: center;justify-content: space-between;">
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
