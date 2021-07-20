import api from "../Ajax";


function _ajax(url, data) {
	return api.ajax("/sns" + url, data)
}
const _api = {};
_api.myTrendCreate = (data) => {
	return _ajax("/myTrendCreate", data)
}
_api.myTrendList = (data) => {
	return _ajax("/myTrendList", data)
}
// 获取动态
_api.trendById = (data) => {
	return _ajax("/trendById", data)
}
_api.likeTrend = (data) => {
	return _ajax("/likeTrend", data)
}
_api.trendCommentList = (data) => {
	return _ajax("/trendCommentList", data)
}
_api.trendAddComment = (data) => {
	return _ajax("/trendAddComment", data)
}
_api.trendListByUser = (data) => {
	return _ajax("/trendListByUser", data)
}
_api.count = (data) => {
	return _ajax("/count", data)
}
_api.fansList = (data) => {
	return _ajax("/fansList", data)
}
_api.idolList = (data) => {
	return _ajax("/idolList", data)
}
_api.subscribe = (data) => {
	return _ajax("/subscribe", data)
}
_api.isSubscribe = (data) => {
	return _ajax("/isSubscribe", data)
}
export default _api;
