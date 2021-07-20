import api from "../Ajax";


function _ajax(url, data) {
    return api.ajax("/mall" + url, data)
}


// function chooseWXPay(config) {
//     let wx = WxServer().jsSdk(["chooseWXPay"])
//     wx.ready(() => {
//         wx.chooseWXPay({
//             ...config,
//             success(res) {
//                 console.log(res);
//             },
//         })
//     })
// }
export default {
    //自动创建订单并调用二维码
    QRCodeV2(data) {
        return _ajax('/qRCodeV2', data);
    },
    //通过订单ID调用二维码
    QRCode(data) {
        return _ajax('/qRCode', data);
    },
    //微信支付 (订单Id)
    WxPayment(orderId) {
        return _ajax("/wxPayment", {ID: orderId})
    },
    //微信支付 (自动创建订单)
    WxPaymentV2(data) {
        return _ajax("/wxPaymentV2", data)
    },
    //获取订单
    getOrder(data) {
        return _ajax('/seach', data);
    }


}
