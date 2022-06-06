
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


