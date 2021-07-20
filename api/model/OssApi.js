import api from '../Ajax.js'
import oss from './OssUtiles.js'

function _ajax(url, data, sid) {
	let newData = data;
	if (sid) {
		newData = {
			...data,
			sid: sid,
		}
	}
	return api.ajax('/aliOss' + url, newData);
}


const _api = {};

_api.ossConfig = (data, sid) => {
	return _ajax('/signature', data, sid);
}


_api.ossUpload = (data, sid, file) => {
	return new Promise((succ, fail) => {
		_api.ossConfig(data, sid).then(config => {
			/* console.log(config, file);*/
			oss.upload(config, file).then(data => {
				succ(data)
			}).then(e => {
				fail("upload",e)
			})
		}).catch(e => {
			fail("ossConfig",e)
		})
	})
}

_api.uniOssUpload = (data, sid, filePath) => {
	return new Promise((succ, fail) => {
		_api.ossConfig(data, sid,succ,fail).then(config => {
			/* console.log(config, file);*/
			oss.uniUpload(config, filePath,succ,fail) 
		}).catch(e => {
			fail(e)
		})
	})
}


export default _api;
