import requset from "./Request";
import store from "../store";

import base from "./Base";

let _ajax = new requset.ajax(() => {
    return {
        sid: base.sid,
        eid: base.eid,
        token: store.state.user.token,
        pid: base.pid//{1: '微信公众号',2:'微信小程序',3:'手机网站',4:'Web网页'}
    }
})
let api = {};

api.ajax = (url, data, isArray) => {
    return new Promise((succ, fail) => {
        if (isArray) {
            data.offset ? '' : data.offset = 0
            data.count ? '' : data.count = 10
        }
        data = {
            //SITE_ID:123,
            ...data

        }
        return _ajax.call(base.url + url, data).then((data) => {
			console.log(base.url + url,data)
            succ(data)
        }).catch((data) => {
			console.log("fail",base.url + url,data)
            //如果 code = 403(签证过期 + 没有登录) 将清空 token
            if (data.code == 403) {
                store.commit("setToken",undefined)
                console.error("签证异常")
            }
            fail(data)
        })
    })

}

export default api;
