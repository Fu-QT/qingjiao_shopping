import PathUtiles from "../../utiles/PathUtiles";

function wxLogin(appId) {

    // //公众号
    // this.publicLogin = (callBackUrl) => {
    //     let url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    //     let scope = 'snsapi_userinfo';
    //     run(url, callBackUrl, scope)
    // }




    this.publicAccount = {
        getCode: (callBackUrl = window.location.href) => {
            let url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
            let scope = 'snsapi_userinfo';

            callBackUrl = PathUtiles.removeUrlParam(callBackUrl)
            callBackUrl = encodeURIComponent(callBackUrl);
            let href = `${url}?appid=${appId}&redirect_uri=${callBackUrl}&response_type=code&scope=${scope}&state=123&connect_redirect=1#wechat_redirect`;
            location.href = href

        },


    }

    //判断是否是微信浏览器
    this.isWxBrowser = () => {
		try{

        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";

		}catch(e){
			return false
		}
    }


    //获取地址栏中的参数
    this.urlParam = () => {
        var name, value;
        var str = window.location.href; //取得整个地址栏bai
        var num = str.indexOf('?');
        str = str.substr(num + 1); //取得所有参du数   stringvar.substr(start [, length ]
        var arr = str.split('&'); //各个参数放到数组zhi里

        let data = {};
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf('=');
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                data[name] = value;
            }
        }
        return data;
    }

}


export default wxLogin
