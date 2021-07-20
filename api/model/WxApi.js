import api from "../Ajax";

function _ajax(url, data) {
	return api.ajax("/WX" + url, data)
}


export default {

	wxLogin: (data) => {
		return _ajax("/wxLogin", data)
	},

	JSSDKSignature: (url) => {
		return _ajax("/JSSDKSignature", {
			url: url
		})
	},





};
