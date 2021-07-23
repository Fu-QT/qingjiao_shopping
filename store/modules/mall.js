import cache from "../Cache";

export default {
	state: {
		cacheCart: cache.getStorage("cacheCart") ? cache.getStorage("cacheCart") : {},
	},
	mutations: {
		setCacheCart(state, {
			data,
			count,
			format
		}) {
			let key = data.ID + "_" + format
			if (count > 0) {
				let item = state.cacheCart[key]

				if (item) {
					item.count = count
				} else {
					item = {
						data,
						count,
						format
					}
				}
				state.cacheCart[key] = item
			} else {
				delete state.cacheCart[key]
			}
			let temp = {
				...state.cacheCart
			}
			state.cacheCart = temp
			cache.setStorage("cacheCart", state.cacheCart)
		},
		savaCacheCart(state) {
			let keys = Object.keys(state.cacheCart)
			for (let key of keys) {
				if (state.cacheCart[key].count == 0) {
					delete state.cacheCart[key]
				}
			}
			let temp = {
				...state.cacheCart
			}
			state.cacheCart = temp
			cache.setStorage("cacheCart", state.cacheCart)
		},
		emptyCacheCart(state) {
			state.cacheCart = {}
			cache.setStorage("cacheCart", state.cacheCart)
		},
	},
	getters: {
		getCacheCartCount: (state) => ({
			id,
			format
		}) => {
			let key = id + "_" + format
			let item = state.cacheCart[key]
			if (item) {
				return item.count
			}
			return 0
		}
	}
}
