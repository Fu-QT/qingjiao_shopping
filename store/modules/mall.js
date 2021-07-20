import cache from "../Cache";

export default {
	state: {
		shoppingCart: cache.getStorage("shoppingCart") ? cache.getStorage("shoppingCart") : {},
		order: cache.getStorage("order") ? cache.getStorage("order") : {},
	},
	mutations: {
		//修改购物车
		setShoppingCart(state, {
			data,
			count
		}) {
			console.log('setShoppingCart', data, count);

			if (count > 0) {
				state.shoppingCart[data.ID] = {
					count,
					data
				}
			} else {
				delete state.shoppingCart[data.ID]
			}

			cache.setStorage("shoppingCart", state.shoppingCart)
		},
		//删除购物车中的商品
		deleteShoppingCart(state, data) {
			delete state.shoppingCart[data.ID]
			cache.setStorage("shoppingCart", state.shoppingCart)
		},
		//清空购物车
		emptyShoppingCart(state) {
			state.shoppingCart = {}
			cache.setStorage("shoppingCart", state.shoppingCart)
		},
		setOrder(state, obj) {
			state.order = obj
			cache.setStorage("order", state.order)

		}

	},
	getters: {
		//通过Id获取购物车中的的商品数量

		getShoppingCartCountById: (state) => (id) => {
			if (state.shoppingCart[id]) {
				return state.shoppingCart[id].count
			} else {
				return 0
			}
		},
		//获取购物车
		getShoppingCart: (state) => () => {
			return state.shoppingCart
		},
		//获取购物车数据（用于与Api交互）
		getShoppingCartData(state) {
			let data = {};
			for (let key in state.order) {
				let item = state.order[key];
				data[key] = item.count
			}
			return data;
		}


	}
}
