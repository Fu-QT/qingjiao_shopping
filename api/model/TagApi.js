import api from "../Ajax";

function _ajax(url,data) {
    return api.ajax("/sysTag"+url,data)
}


const _api = {};
//获取标签分组列表
_api.tagGroupList = (data)=> {
    return _ajax("/tagGroupList",data)
}
//获取标签列表
_api.tagList = (data) => {
    return _ajax("/tagList", data);
}


export default _api;
