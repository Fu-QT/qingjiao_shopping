import axios from 'axios'
import CryptoJS from 'crypto-js'

function ajax(config) {

    let isUni = typeof uni !== 'undefined'

    this.call = (url, data) => {
        return new Promise((succ, fail) => {


            let configData = {}
            if (typeof config == 'function') {
                configData = config()
            } else if (typeof config == 'object') {
                configData = config
            }

            //如果Data 中包含了 config 的值 会取值替换
            for (let key in configData) {
                if (data[key]) {
                    configData[key] = data[key]
                }
            }


            let req = {
                c: data,
                ...configData
            };

            if (config.sid != undefined && config.cid != undefined && config.uid != undefined && config.token != undefined) {
                //连接字符串，然后再使用HmacSHA1(verifyByHmacSHA1ToID64)和密钥进行签名得到v
                req.v = CryptoJS.HmacSHA1((config.sid + config.cid + config.uid + data), token).toString(CryptoJS.enc.Hex);
            }
            //将请求转换成字符再传，如果是对象，可能axios会自动设置content-type，导致出现options包
            //将来有问题，也可以强制指定content-type为text/plain这样的简单请求类型
            let strData = JSON.stringify(req);


            if (isUni) {
                uni.request({
                    url: url,
                    data: strData,
                    header: {
                        "Content-Type": "text/plain"
                    },
                    method: "POST",
                    success: (json) => {
                        let data = {};
                        try {
                            data = JSON.parse(json.data.c);
                        } catch (e) {
                            data = json.data.c
                        }
                        let rc = json.data.rc;
							// console.log("访问的接口>>>>>>>>>>",url,"\n","返回的数据>>>>>>>>>>",data)
                        if (rc == 1) {//success
                            succ(data)
                        } else {
                            let msg = false;
                            if (rc == 3) {
                                msg = true
                            }
                            fail(fialData(data))
                        }
                    },
                    fail: (data) => {
                        fail(fialData(data))
                    }
                })
            } else {
                // 没这句，微信android会发OPTIONS请求
                axios.defaults.headers = {"Content-Type": "text/plain"}
                axios.post(url, strData)
                    .then((json) => {

                        console.log('json',json.data);

                        // console.error("axios result>" + json.data);



                        let data = {};
                        try {
                            data = JSON.parse(json.data.c);
                        } catch (e) {
                            data = json.data.c
                        }

                        let rc = json.data.rc;
                        if (rc == 1) {//success
                            succ(data)
                        } else {//error
                            fail(fialData(data))
                        }
                    })
                    .catch((data) => {//包装ajax错误
                        console.info(data);
                        fail(fialData(data))
                    })
            }
        })


    }

}

function parseJSON(str){
    (json.data.c.indexOf("{")==0&&json.data.c.lastIndexOf("}")==json.data.c.length-1) ||     (json.data.c.indexOf("{")==0&&json.data.c.lastIndexOf("}")==json.data.c.length-1)


}


/*
* 统一处理成 系统错误
* */
function fialData(data) {
    let msg = "系统错误"
    if (data.code > 400) {
        msg = data.msg;
    }
    return {
        ...data,
        msg: msg
    }
}


function isBlank(str) {
    if (str == null || typeof str == "undefined" ||
        str == "" || str.trim() == "") {
        return true;
    }
    return false;
}

/**
 *@tryParseJson json转换容错
 *
 * @param data      需要json.parse的数据
 * @param dataType  异常后期望返回的类型（{} []）
 * @param isCompel  是否强制转换
 */
function tryParseJson(data, dataType = [], isCompel = true) {
    let resData = null
    try {
        resData = JSON.parse(data)
    } catch (e) {
        console.log('数据异常' + e)
        resData = isCompel ? dataType : data
    }
    return resData
}


export default {
    ajax,
    isBlank,
    tryParseJson,
}
