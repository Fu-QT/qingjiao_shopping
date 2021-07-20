const cache = {}
// 是否是uniapp环境
let isUni = typeof uni !== 'undefined'
cache.getStorage = (key) => {
    let data;
    if (isUni) {
        //微信小程序不支持SessionStorage
        try {
            data = uni.getStorageSync(key) || {};
        } catch (e) {
            data = {};
        }
    } else {
        //H5等web环境下，采用SessionStorage
        data = sessionStorage.getItem(key) || {};
    }
    return data;
}
cache.setStorage = (key, data) => {
    if (isUni) {
        //微信小程序不支持SessionStorage
        uni.setStorageSync(key, data)
    } else {
        //H5等web环境下，采用SessionStorage
        sessionStorage.setItem(key, data);
    }
}


cache.setUserInfo = (data) => {
    return cache.setStorage("USER_INFO", data)
}

cache.getUserInfo = () => {
    return cache.getStorage("USER_INFO")
}


cache.getToken = () => {
    let token = cache.getStorage("USER_TOKEN");
    if (typeof token != 'string') {
        token = undefined;
    }
    return token;
}

cache.setToken = (token) => {
    cache.setStorage("USER_TOKEN", token)
}

cache.getSiteConfig = () => {
    return cache.getStorage("SITE_CONFIG");
}

cache.setSiteConfig = (config) => {
    cache.setStorage("SITE_CONFIG", config)
}


export default cache;

