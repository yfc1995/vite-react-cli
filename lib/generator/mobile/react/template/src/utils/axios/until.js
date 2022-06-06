

export const LOCAL_TOKEN_KEY = 'local_token_key';
export const LOCAL_USER_KEY = 'local_USER_key';
export const LOCAL_USER_PASSWORD = 'local_user_password'
let codeMap = null

export function getToken() {
  return localStorage.getItem(LOCAL_TOKEN_KEY);
}

export function getUserDetail() {
  let userDetail = localStorage.getItem(LOCAL_USER_KEY)
  return userDetail ? JSON.parse(userDetail) : null;
}

export function removeToken() {
  localStorage.removeItem(LOCAL_TOKEN_KEY)
  localStorage.removeItem(LOCAL_USER_KEY)
}

export function setToken(token) {
  localStorage.setItem(LOCAL_TOKEN_KEY, token)
}

export function setUserDetail(user) {
  localStorage.setItem(LOCAL_USER_KEY, user)
}

export function setUserPassword(data) {
  localStorage.setItem(LOCAL_USER_PASSWORD, data)
}

export function removeUserPassword() {
  localStorage.removeItem(LOCAL_USER_PASSWORD)
}
export function getUserPassword() {
  let userPassword = localStorage.getItem(LOCAL_USER_PASSWORD)
  return userPassword ? JSON.parse(userPassword) : null;
}

export function setCodeMap(map) {
  codeMap = map
}

export function getCodeMap() {
  return codeMap
}


