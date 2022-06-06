/*
 * @Author: your name
 * @Date: 2022-01-25 17:44:37
 * @LastEditTime: 2022-02-16 10:24:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hang-zhou-east-railway-station-h5/src/utils/axios/request.js
 */
import axios from "axios";
import { getToken, removeToken } from "./until";





axios.defaults.timeout = 60000;

axios.interceptors.request.use(config => {
  if (process.env.NODE_ENV === 'production') {
    config.url = '' + config.url
  }
  const token = getToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: token
    }
  }
  if (config.method === 'delete') {
    config.headers = {
      ...config.headers,
      'X-HTTP-Method-Override': 'DELETE'
    }
    config.method = 'POST'
  }
  if (config.method === 'put') {
    config.headers = {
      ...config.headers,
      'X-HTTP-Method-Override': 'PUT'
    }
    config.method = 'POST'
  }
  if (config.url === '/api/v1/file/upload') {
    config.headers = {
      ...config.headers,
      'Content-Type': 'multipart/form-data'
    }
  }
  return config
}, (error) => {
  console.log(error)
})


axios.interceptors.response.use(res => {

  if (res.data.code !== 200 && res.data.code !== 304) {
    if (res.data.code === 401) {
      removeToken()
      window.location.href = '#/login'
    }
    return res.data
  }
  return res.data
})

export { axios as fetch }


