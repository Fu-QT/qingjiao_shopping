import axios from "axios/index";

let oss = {}
oss.upload = (config, file) => {
	let type = file.name.substring(file.name.lastIndexOf('.', file.name.length - 1))
	console.log(type)

	var formData = new FormData()
	formData.append('key', config.dir + config.fileName + type) //存储在oss的文件路径
	formData.append('OSSAccessKeyId', config.accessid) //accessKeyId
	formData.append('policy', config.policy) //policy
	formData.append('Signature', config.signature) //签名
	//如果是base64文件，那么直接把base64字符串转成blob对象进行上传就可以了
	formData.append('file', file)
	formData.append('success_action_status', 200) //成功后返回的操作码

	let service = axios.create()

	let returnData = {
		url: config.host + '/' + config.dir + config.fileName + type,
		name: config.fileName + type
	}


	service.interceptors.response.use((res) => {
		if (res.status == 200) {
			return returnData
		} else {
			return Promise.reject('error')
		}
	}, res => {})

	return service({
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		url: config.host,
		method: 'post',
		data: formData
	})

}
oss.uniUpload = (config,filePath, succ, fail) => {
console.log("file",filePath)
	let type = filePath.substring(filePath.lastIndexOf('.', filePath.length - 1))
	console.log(type)
	let returnData = {
		url: config.host + '/' + config.dir + config.fileName + type,
		name: config.fileName + type
	}
	uni.uploadFile({
		url: config.host, //仅为示例，非真实的接口地址
		filePath: filePath,
		name: 'file',
		formData: {
			'key': config.dir + config.fileName + type,
			'OSSAccessKeyId': config.accessid,
			'policy': config.policy,
			'Signature': config.signature,
			'success_action_status': 200
		},
		success: ()=>{
			succ(returnData)
		},
		fail: fail
	});

}


export default oss
