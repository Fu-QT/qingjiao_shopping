<script>
	// import VConsole from 'vconsole'
	// const vConsole = new VConsole();
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易'
		},
		onLaunch() {
			//#ifdef H5
			if (this.$WxServer.WxLogin.isWxBrowser()) {
				if (this.$store.state.user.token) {
					this.getUserInfo()
				} else {
					this.login()
				}
			} else {
				this.$store.commit("setToken",
					
					// 没有猫
					'eyJhbGciOiJIUzI1NiJ9.eyJlaWQiOjQxNTAzNjQ3MDk5Mjc3OSwic3ViIjoiNDE2MzY0NDkwMjIyNzEzIiwiU0lURV9JRCI6NDE0MjE3MjgzNDM4NTM0LCJUSU1FX0NSRUFURSI6MTYyNjQyMzc5MDAwMCwibmlja05hbWUiOiLnjovmn5AiLCJTRVgiOjAsIlVTRVJfSUQiOjQxNjM2NDQ5MDIyMjcxMywicGlkIjoxLCJMRVZFTCI6MCwidXNlcklkIjo0MTYzNjQ0OTAyMjI3MTMsIkhFQURFUl9JTUciOiJodHRwOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vSG1WUWxYOVdrQnN0OVNweGxZNmZKYktnYzJ0a2ZxSmp3Q0NpYklldzBHemlhMWljU0hIYmJPU3I5UVZsZ09RMG5XR3RNMGgya3JnRnRBdjRZcTZBQk1pY0x3LzEzMiIsInNpZCI6NDE0MjE3MjgzNDM4NTM0LCJOSUNLTkFNRSI6IueOi-afkCIsInVzZXJUeXBlIjoiU0lURSIsImV4cCI6MTYyNjgzNjUzOSwiaWF0IjoxNjI2NTc3MzM5LCJqdGkiOiIzMWVjZjhlOC01ZmViLTRhMmUtODM2NS05MzBhNmJiYWE5NzAiLCJjaWQiOm51bGx9.nPaoz7IBmKBAKhDHQ4AJBT2CIIzftKmD6Qy2ElW5suo'
					// 刘刘	
					// 'eyJhbGciOiJIUzI1NiJ9.eyJlaWQiOjQxNTAzNjQ3MDk5Mjc3OSwic3ViIjoiNDE2MzU5MDQ5MjY2OTQzIiwiU0lURV9JRCI6NDE0MjE3MjgzNDM4NTM0LCJUSU1FX0NSRUFURSI6MTYyNjQwMjUzNjAwMCwibmlja05hbWUiOiLliJjliJgiLCJTRVgiOjAsIlVTRVJfSUQiOjQxNjM1OTA0OTI2Njk0MywicGlkIjoxLCJMRVZFTCI6MCwidXNlcklkIjo0MTYzNTkwNDkyNjY5NDMsIkhFQURFUl9JTUciOiJodHRwOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vOG1DU2dOa0pmTDZMSFp3cEJVWU1idEZGWWx2bFh1VUVGcjBKQUpmeXM2SXlxanZwbUFpY3MyUnMzZWdva0pPd0RadlVtNTNHYTFEejZRV0w4ajZPZkFkOXlKYXZPRFA1NC8xMzIiLCJzaWQiOjQxNDIxNzI4MzQzODUzNCwiTklDS05BTUUiOiLliJjliJgiLCJ1c2VyVHlwZSI6IlNJVEUiLCJleHAiOjE2MjY4MzY1MzksImlhdCI6MTYyNjU3NzMzOSwianRpIjoiYTM2NmQzOGMtYzE4ZC00NjRjLThlZWItYjdiOTQ1Nzk1MTk1IiwiY2lkIjpudWxsfQ.Q_1HBuT1SpdlQmQO6kwUtUu2F1HM4XffqW-g6w3I1UY'
					//未命名
					// 'eyJhbGciOiJIUzI1NiJ9.eyJlaWQiOjQxNTAzNjQ3MDk5Mjc3OSwic3ViIjoiNDE2MzY0NTE3OTY5Nzg2IiwiU0lURV9JRCI6NDE0MjE3MjgzNDM4NTM0LCJUSU1FX0NSRUFURSI6MTYyNjQyMzg5ODAwMCwibmlja05hbWUiOiLmnKrlkb3lkI0iLCJTRVgiOjAsIlVTRVJfSUQiOjQxNjM2NDUxNzk2OTc4NiwicGlkIjoxLCJMRVZFTCI6MCwidXNlcklkIjo0MTYzNjQ1MTc5Njk3ODYsInNpZCI6NDE0MjE3MjgzNDM4NTM0LCJOSUNLTkFNRSI6IuacquWRveWQjSIsInVzZXJUeXBlIjoiU0lURSIsImV4cCI6MTYyNjgzNjUzOSwiaWF0IjoxNjI2NTc3MzM5LCJqdGkiOiI5OTZkNzkxNC00ZDViLTRlZjAtOWRiZi0wZjY0YjI5ZmRlYWUiLCJjaWQiOm51bGx9.Qyrwdzyrc3HqRZQxyr4Gi7ykK86xT7nMSGfX1AgIgW0'
				)
				this.getUserInfo()
			}
			//#endif

			//#ifdef MP-WEIXIN
			this.appLetLogin()
			//#endif
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
			// process.env.VUE_APP_PLATFORM 为通过js判断平台名称的方法，结果分别如下：
			/**
			 * h5，app-plus(nvue下也为app-plus)，mp-weixin，mp-alipay......
			 */

		},
		methods: {
			//微信浏览器登录
			login() {
				var urlParam = this.$WxServer.WxLogin.urlParam();
				if (urlParam.code) {
					uni.showToast({
						title: '获取到code ',
						duration: 2000
					});
					//访问后台获取 用户信息
					this.$api.WxApi.wxLogin({
						code: urlParam.code
					}).then((data) => {
						uni.showToast({
							title: '登录成功',
							duration: 2000
						});

						this.$store.commit("setToken", data.token)
						this.$store.commit("setUserInfo", data.userInfo)
					}).catch((e) => {
						try {
							e = JSON.stringify(e)
						} catch (er) {

						}
						uni.showToast({
							title: 'error = ' + e,
							duration: 2000
						});
					})
				} else if (this.$store.state.user.token) {
					this.getUserInfo()
				} else {
					this.$WxServer.WxLogin.publicAccount.getCode()
				}
			},
			//微信小程序登录
			appLetLogin() {
				console.log("appLetLogin")
				uni.login({
					success: (data) => {
						console.log("Unilogin", data)
						this.$api.WxApi.wxLogin({
							code: data.code,
						}).then(data => {
							console.log(data, "userInfo")
							this.$store.commit("setUserInfo", data.userInfo)
							this.$store.commit("setToken", data.token)
							uni.getUserInfo({
								success(succ) {
									console.log("jspgjdgp", succ)
								},
								fail(error) {
									console.log("vmevnowg", error)
								}
							})
							uni.showToast({
								title: '微信小程序登录成功',
								duration: 2000
							});
						})
					},
					fail(error) {
						console.log("登陆失败", error)
					}
				})
			},
			getUserInfo() {
				this.$api.UserApi.getUserInfo().then((userInfo) => {
					this.$store.commit("setUserInfo", userInfo)
					uni.showToast({
						title: 'token 验证成功',
						duration: 2000
					});
				}).catch((e) => {
					uni.showToast({
						title: 'token 验证失败' + e,
						duration: 2000
					});
					if (this.$WxServer.WxLogin.isWxBrowser()) {
						this.$WxServer.WxLogin.publicAccount.getCode()
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	@import "common/global.scss";
	@import "common/cssConst.css";
</style>
