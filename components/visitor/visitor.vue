<template>
	<view class="head-box" @click="onclick">
		<image v-if="imgSrc" :src="imgSrc" mode=""></image>
		<image v-else src="https://3ch.oss-cn-hangzhou.aliyuncs.com/qj/static/const/notouxiang.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		name:"visitor",
		props:{
			img:String,
      src:String
		},
		data() {
			return {
				imgSrc:""
			};
		},
    mounted(){
      if (this.img) {
        this.imgSrc = this.img
      }
      if (this.src) {
        this.imgSrc = this.src
      }

    },
    methods:{
      onclick(){
      this.$emit("click")
      }
    },
    watch:{
		  img(v) {
        if (v) {
          this.imgSrc = v
        }
      },
      src(v) {
        if (v) {
          this.imgSrc = v
        }
      }
    }
		
		
	}
</script>

<style>
.head-box {
	width: 160rpx;
	height: 160rpx;
}
.head-box image {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
</style>
