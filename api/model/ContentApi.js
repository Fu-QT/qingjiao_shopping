import api from '../Ajax'


function _ajax(url, data) {
	return api.ajax("/contentService" + url, data)
}

const _api = {};
//获取内容列表
_api.getContentList = (data) => {
	return _ajax("/contentSearch", data)
}
//通过内容Id获取内容
_api.getContentById = (data) => {
	return _ajax("/contentGet", data)
}
//处理内容中data的数据
_api.contentUtil = (array, cardId) => {
	let nArray = []
	for (let oItem of array) {
		try {
			let data = {};

			//解除内存关联
			let nCardId = cardId + '';
			let item = {
				...oItem
			}

			if (!cardId) {
				//为空赋予初始值
				nCardId = item.DATA.cardId
			}
			//卡片对象为空则选择最后一次修改的
			if (item.DATA.card[nCardId]) {
				data = item.DATA.card[nCardId];
			} else {
				data = item.DATA.card[item.DATA.cardId];
			}


			item.DATA = {
				...item.DATA,
				...data
			}

			nArray.push(item)
		} catch (e) {}
	}
	return nArray;
}

export default _api;
