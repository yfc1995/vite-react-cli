import { createSlice } from "@reduxjs/toolkit";
let codeMap = {}

const state = {
  codeMap: null,
  backRoutes: [],
  firstPath: '',
  token: null
}

const routerPromiseSlice = createSlice({
  name: 'routerPromise',
  initialState: state,
  reducers: {
    addRoutes(state, { payload }) {
      state.backRoutes = payload.backRoutes
    },
    addCodeMap(state, { payload }) {
      codeMap = {}
      deepRoutes(payload.backRoutes, '')
      state.codeMap = JSON.parse(JSON.stringify(codeMap))
    },
    addFirstPath(state, { payload }) {
      state.firstPath = payload.firstPath
    },
    addToken(state, { payload }) {
      state.token = payload.token
    }
  }
})

const deepRoutes = (routes, url) => {
  routes.forEach(item => {
    if (item.type === "MENU" && item.url) {
      const resUrl = item.url.split('/').slice(0, 2).join('/')
      if (!codeMap[resUrl]) {
        codeMap[resUrl] = {
          code: []
        }
      }
    }
    if (item.type === "FUNCTION") {
      if (url) {
        const resUrl = url.split('/').slice(0, 2).join('/')
        let obj = codeMap[resUrl]
        obj.code.push(item.code)
        codeMap[resUrl] = { ...obj }
      }

    }
    if (item.childrenList && item.childrenList.length) {
      deepRoutes(item.childrenList, item.url)
    }
  })
}

export const deepFinallRoutes = (backRoutes, routes, codeMap) => {
  let arr = []
  backRoutes.forEach(backRoute => {
    const final = routes.find(route => backRoute.url === route.meta.fullPath)
    if (final && final.meta.isOne) {
      let obj = { ...final, children: [] }
      final.children.forEach(item => {
        if (item.meta && item.meta.code &&  codeMap[backRoute.url] && codeMap[backRoute.url].code.indexOf(item.meta.code) >= 0) {
          obj.children.push(item)
        }
        if (!item.meta.code) {
          obj.children.push(item)
        }
      })
      arr.push(obj)
    } else if (final) {
      let obj = { ...final, children: [] }
      if (final.children && final.children.length && backRoute && backRoute.childrenList) {
        backRoute.childrenList.forEach(bc => {
          const result = final.children.find(item => bc.url === item.meta.fullPath)
          if (result) {
            obj.children.push(result)
          }
        })
        final.children.forEach(two => {
          if (!two.meta.menu) {
            if (two.meta.code && codeMap[two.pathArr[0]].code.indexOf(two.meta.code) >= 0) {
              obj.children.push(two)
            }
            if (!two.meta.code) {
              obj.children.push(two)
            }
          }
      
        })
      }
      // final.children.forEach(two => {
      //   obj.children.push(two)
    
      // })
      arr.push(obj)
    }
  })
  return arr
}


export const { addRoutes, addCodeMap, addFirstPath, addToken } = routerPromiseSlice.actions;


export default routerPromiseSlice.reducer;