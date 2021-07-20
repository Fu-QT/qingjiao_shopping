<template>
	<view>
		<view>
			<view v-if="imgList.length == 1">
				<image style="width: 60%;height: auto;" :src="imgList[0]" mode="widthFix" @click="amEvent(imgList[0])">
				</image>
			</view>
			<view v-if="imgList.length == 2" class="flex-box" style="justify-content: space-between;">
				<view v-for="item in imgList" style="width: 50%;">
					<image style="width: 96%;height: 100px;" :src="item" mode="aspectFill" @click="amEvent(item)">
					</image>
				</view>
			</view>
			<view v-if="imgList.length >= 3" class="flex-box" style="flex-wrap: wrap;">
				<view v-for="item in imgList" style="width: 33.3%; height: 89px;">
					<image :src="item" style="width: 96%;height: 85px;" mode="aspectFill" @click="amEvent(item)">
					</image>
				</view>
			</view>
		</view>
		<!-- 图片的弹出层 -->
		<!-- <view v-if="isShow"
			style="width: 100vw; height: 100vh;background-color: rgba(0,0,0,0.9);position: fixed;top: 0;left: 0;z-index: 999; border: 1px #ff0000 solid;"
			@dblclick="readImg()">
			<movable-area scale-area class="movable-area" >
				<movable-view class="movable-view" direction="all" @scale="onScale" scale="true" scale-min="1"
					out-of-bounds="false" scale-max="4" :scale-value="scale" @dblclick="dblclick"
					style="display: flex;flex-direction: column;justify-content: center;height: 100vh;">
					<view style="width: 100vw; display: flex;justify-content: center;" >
						<image :src="imgSrc" mode="aspectFit" style="width: 100%;height: 400px;" ></image>
					</view>
				</movable-view>
			</movable-area>

		</view> -->
	</view>
</template>

<script>
	import myPopup from '../myPopup/myPopup.vue'
	export default {
		components: {
			myPopup
		},
		name: "multipleImg",
		props: {
			imgList: {
				type: Array,
				default: ()=>{
					return []
				},
			}
		},
		data() {
			return {
				isShow: false, //点击放大图片
				imgSrc: '',
				scale: 1
			};
		},
		methods: {
			dblclick() {
				if (this.scale == 10) {
					this.scale = 1;
				} else {
					this.scale = 10;
				}
			},
			amEvent(src) {
				this.imgSrc = src
				// this.isShow = !this.isShow
				uni.previewImage({
					current: src,
					urls: this.imgList,
					indicator: 'none', //图片指示器样式
					loop: true, //图片循环预览
					longPressActions: { //长按保存图片
						itemList: ["保存到手机", '取消'],
						success(data) {
							console.log(data)
						}
					}
				})
			},
			readImg() {
				this.isShow = !this.isShow

			}
		}
	}
</script>

<style>
	.movable-area {
		height: 100%;
		width: 100%;
		position: fixed;
		overflow: hidden;
	}

	.movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		text-align: center;
	}
</style>
