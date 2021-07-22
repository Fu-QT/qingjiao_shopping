import Vue from "vue"
import Vuex from "vuex";
import mall from './modules/mall'
import user from "./modules/user";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mall,
        user
    }
})

