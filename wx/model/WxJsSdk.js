import Api from "../../api/Api";
import wxJdk from "jweixin-module";
import PathUtiles from "../../utiles/PathUtiles";

export default function (appId, jsApiList) {

    this.url = PathUtiles.getLocalUrl()
    this.wxJdk = wxJdk;
    this.array = [];
    this.succArray = [];
    this.ok = false;


    if (!jsApiList instanceof Array) {
        jsApiList = [jsApiList]
    }

    Api.WxApi.JSSDKSignature(this.url).then((signature) => {
        console.log('signature', signature);
        this.wxJdk.config({
            debug: true,
            appId: appId,
            timestamp: signature.timestamp,
            nonceStr: signature.nonceStr,
            signature: signature.signature,
            jsApiList: jsApiList
        })
    }).catch((e) => {
        console.log('jsSdk e', e);
    })



    this.ex = () => {
        // jdk 初始化完毕后才可执行
        if (this.ok) {
            //遍历 方法列表
            for (let index in this.array) {
                //通过 列表下标 判断是否执行过
                if (this.succArray.indexOf(index) == -1) {
                    let item = this.array[index]
                    if (typeof item == 'function') {
                        item(this.wxJdk)
                    }
                    //将执行过的下标存储避免重复执行
                    this.succArray.push(index);
                }
            }
        }
    }
    this.wxJdk.ready(() => {
        this.ok = true;
        this.ex();
    })



    //传入方法 以便执行
    this.put = (call) => {
        this.array.push(call)
        this.ex();
    }
}
