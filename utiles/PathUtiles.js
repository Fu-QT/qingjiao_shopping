export default {
	getLocalUrl(removeParam) {
		let url = window.location.href
		if (removeParam) {
			url = this.removeUrlParam(url)
		}
		return url
	},

	removeUrlParam(url) {
		let left = url.indexOf("?");
		if (left != -1) {
			return url.substring(0, left - 1)
		}
		return url;
	},


	routerPath(path) {
		let url = this.getLocalUrl(true);
		let r = url.lastIndexOf("/#/")
		if (path.indexOf("/") == 0) {
			r--;
		}
		return url.substring(0, r + 3) + path
	},

	paramMerge(url, data) {
		if (Object.keys(data).length > 0) {
			url += "?";
			for (let key in data) {
				let value = data[key];
				url += (key + "=" + value + "&");
			}
			return url.substring(0, url.length - 1);
		}
		return url;
	}

}
