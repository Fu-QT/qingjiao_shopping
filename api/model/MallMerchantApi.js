import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/mall_merchant" + url, data)
}
const _api = {};
// 搜索商户
_api.search = (data) => {
	return _ajax("/search", data)
}

_api.searchBill = (data) => {
	return _ajax("/searchBill", data)
}

//添加订单
_api.addBill = (data) => {
	return _ajax("/addBill", data)
}

export default _api;
