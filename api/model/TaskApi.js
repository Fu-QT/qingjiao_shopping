import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/task" + url, data)
}
const _api = {};
// 创建任务
_api.create = (data) => {
	return _ajax("/create", data)
}
// 接受任务 - 申请人
_api.acceptTask = (data) => {
	return _ajax("/acceptTask", data)
}
// 查询任务
_api.search = (data) => {
	return _ajax("/search", data)
}
// 通过Id 获取 任务信息
_api.getTaskById = (data) => {
	return _ajax("/getTaskById", data)
}
// 查看我的任务
_api.myTask = (data) => {
	return _ajax("/myTask", data)
}

_api.createPayment = (data) => {
	return _ajax("/createPayment", data)
}
// 查询 该任务是否进行中
_api.isApply = (data) => {
	return _ajax("/isApply", data)
}

_api.getTaskApply = (data) => {
	return _ajax("/getTaskApply", data)
}
//审核任务申请  -申请 / 完成任务
_api.auditTaskApply = (data) => {
	return _ajax("/auditTaskApply", data)
}
//申请完成任务 - 申请人
_api.succTask = (data) => {
	return _ajax("/succTask", data)
}
//通过Id获取 任务动态
_api.getTaskTrendById = (data) => {
	return _ajax("/getTaskTrendById", data)
}
// 申请放弃任务
_api.failTask = (data) => {
	return _ajax("/failTask", data)
}
//获取任务动态评论
_api.getTaskTrendComment = (data) => {
	return _ajax("/getTaskTrendComment", data)
}
// 发送动态任务评论
_api.sendTaskTrend = (data) => {
	return _ajax("/sendTaskTrend", data)
}

// 查询 任务申请
_api.searchApply = (data) => {
	return _ajax("/searchApply", data)
}

// 获取任务申请 - 通过ID
_api.getTaskApplyById = (data) => {
	return _ajax("/getTaskApplyById", data)
}
export default _api;
