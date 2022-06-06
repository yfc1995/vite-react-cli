/*
	文件下载的axios
*/
import axios from 'axios'
import { getToken, removeToken } from "./until";

const downAxios = axios.create({
	baseURL: process.env.BASE_API || '',
	timeout: 60000,
	responseType: 'arraybuffer'
})

downAxios.interceptors.request.use(
	config => {
		if (process.env.NODE_ENV === 'production') {
			config.url = '' + config.url
			// 地图数据不需要加/WXB前缀
			/* if (config.url.indexOf('map/json/province') > -1) {
				config.url = config.url.substr(4)
			} */
		}
		const token = getToken()
		if (token) {
			config.headers.Authorization = token
		}
		/* if (!config.headers.hasOwnProperty('AppCode')) {
			config.headers.AppCode = 'YWWEB';
		} */
		return config
	},
	error => {
		Promise.reject(error)
	}
)

downAxios.interceptors.response.use(
	response => {
		if (response.status === 200) {
			const disposition = response.headers['content-disposition']
			let fileName = decodeURIComponent(
				disposition.substring(disposition.indexOf('filename=') + 9, disposition.length)
      )
      console.log(fileName)
			// let nameArr = fileName.match(/\"[\S\s]+\"/)
			// fileName = nameArr ? nameArr[0].replace(/\"/g, '') : '文件名'
			const blob = new Blob([response.data])
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.download = fileName
			a.href = url
      // a.setAttribute('download', `${fileName}.xls`);
      console.log(fileName)
			a.setAttribute('download', `${fileName}`)
			a.click()
			URL.revokeObjectURL(a)
			a.remove()
			return url
		} else {
			removeToken()
			window.location = window.location.href.split('#')[0] + '#/login'
			return false
		}
	},
	error => {
		// Message({
		// 	message: error.message,
		// 	type: 'error',
		// 	duration: 5 * 1000
		// })
		return Promise.reject(error)
	}
)

export default downAxios
