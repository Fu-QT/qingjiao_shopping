import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/wallet" + url, data)
}


export default {
	// 获取钱包
	getWallet (data) {
		return _ajax("/getWallet", data)
	},
	// 申请提现
	transferApply (data) {
		return _ajax("/transferApply", data)
	},
	// 查询 提现申请
	searchApply (data) {
		return _ajax("/searchApply", data)
	},

};
