import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/mallMerchant" + url, data)
}
const _api = {};
// 创建任务
_api.create = (data) => {
	return _ajax("/create", data)
}


export default _api;
