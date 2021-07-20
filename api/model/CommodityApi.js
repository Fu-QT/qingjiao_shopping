import api from "../Ajax";

function _ajax(url,data) {
    return api.ajax("/commodity"+url,data)
}
const _api = {};
//查询商品
_api.queryCommodity = (data) => {
    return _ajax('/seach', data);
}


//根据ID查询
_api.getCommodityById = (data) => {
    return _ajax('/getById', data);
}

_api.ByIds = (data) => {
    return _ajax('/byIds', data);
}

export default _api
