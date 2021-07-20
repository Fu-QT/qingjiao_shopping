import wxJdk from "jweixin-module"
import Api from "../api/Api";
import WxLogin from "./model/WxLogin"
import PathUtiles from "../utiles/PathUtiles";
import Base from "../api/Base";
import WxJsSdk from "./model/WxJsSdk";

export default function(appId = Base.appId) {

	wxJdk.ready((e) => {
		console.log('wxjdk ok');
	})

	wxJdk.error((e) => {
		console.log('wxjdk error', e);
	})

	//jsApiList  接口名  https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
	this.jsSdkV2 = (jsApiList) => {
		console.log('jsSdkV2');
		return new WxJsSdk(appId, jsApiList)
	}


	// this.jsSdk = (
	//     jsApiList,
	//     url = PathUtiles.getLocalUrl(true)
	// ) => {
	//     if (jsApiList instanceof Array) {
	//         jsApiList = [jsApiList]
	//     }

	//     console.log('jsSdk');
	//     Api.WxApi.JSSDKSignature(url).then((signature) => {
	//         console.log('signature', signature);
	//         wxJdk.config({
	//             debug: true,
	//             appId: appId,
	//             timestamp: signature.timestamp,
	//             nonceStr: signature.nonceStr,
	//             signature: signature.signature,
	//             jsApiList: jsApiList
	//         })
	//     }).catch((e) => {
	//         console.log('jsSdk e', e);
	//     })
	//     return wxJdk
	// }

	this.WxLogin = new WxLogin(appId)


}
