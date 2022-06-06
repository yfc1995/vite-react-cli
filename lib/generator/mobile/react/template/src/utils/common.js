
// 过滤请求数据
export function filterPostData(data) {
  let finallObj = {}
  if (typeof data !== "object") return data
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      if (element && !Array.isArray(data[key])) {
        finallObj[key] = element
      }
      if (Array.isArray(data[key]) && element.length) {
        finallObj[key] = element
      }
    }
  }
  return JSON.parse(JSON.stringify(finallObj))
}

// 清楚对象undefined
export const clearUndefined = data => {
  const params = {};
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (value !== undefined) {
        params[key] = value
      }
    }
  }
  return params
}
