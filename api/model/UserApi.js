import api from "../Ajax";

function _ajax(url,data) {
    return api.ajax("/user"+url,data)
}
const _api = {};
_api.getUserInfo = () => {
    return _ajax("/getUserInfo")
}



export default _api;
