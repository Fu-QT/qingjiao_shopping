<template>
	<view class="postpone_box fs-big">
		<slot name="postpone_img">
			<image :src="img" mode="widthFix"></image>
		</slot>
		<span>{{label}}</span>
	</view>

</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: "暂无内容"
			},
			img: {
				type: String,
				default: 'https://3ch.oss-cn-hangzhou.aliyuncs.com/qj/static/notContent.png'    
			}
		}
	}
</script>

<style>
	.postpone_box {
		width: 100%;
		text-align: center;
		line-height: 40px;
		margin: 50px 0px;

	}

	.postpone_box span {
		display: block;
		color: #bfbfbf;
		margin-top: -15px;
	}

	.postpone_box image {
		width: 108px;
	}
</style>
