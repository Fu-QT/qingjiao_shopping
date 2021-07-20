import cache from "../Cache"
export default {
    state:{
        token:cache.getToken(),
        userInfo:cache.getUserInfo()
    },
    mutations:{
        setToken(state,token){
            cache.setToken(token)
            state.token = token
        },
        setUserInfo(state,data){
            cache.setUserInfo(data)
            state.userInfo = data
        }

    },
    getters:{
        // getToken(state){
        //     return state.token
        // }
    }
}
