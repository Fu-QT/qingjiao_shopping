import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/seat" + url, data)
}
const _api = {};

// 查询座号
_api.list = (data) => {
	return _ajax("/list", data)
}
// 添加座号
_api.creatSeat= (data) => {
	return _ajax("/creatSeat", data)
}

//删除
_api.deleteSeat= (data) => {
	return _ajax("/deleteSeat", data)
}

// 修改状态
_api.updateStus= (data) => {
	return _ajax("/updateStus", data)
}

export default _api;
