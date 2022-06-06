import { useEffect } from 'react'

<% if (needRouter) {%>import routes from './router/routerConfig'<%}%>
<% if (needRouter) {%>import RouteWithSubRoutes from './router/RouteWithSubRoutes'<%}%>

function App() {
  const debounce = (func, delay, immediate) => {
    // result表示返回值
    let timeout, result
    let debounced = function () {
      // 存储触发当前事件的this
      let _this = this
      // 存储event对象
      let args = arguments
      clearTimeout(timeout)
      // 判断是否立即执行，如果不传默认不立即执行
      if (immediate) {
        // 立即执行
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, delay)
        if (callNow) result = func.apply(_this, args)
      } else {
        timeout = setTimeout(function () {
          func.apply(_this, args)
        }, delay)
      }
      return result
    }
    debounced.cancel = function () {
      clearTimeout(timeout)
      timeout = null
    }
    return debounced
  }

  const setHtmlSize = () => {
    let width = window.innerWidth > 2770 ? 2770 : window.innerWidth
    document.documentElement.style.fontSize = `${(width * 100 / 375).toFixed(4)}px`
  }

  useEffect(() => {
    const resize = debounce(setHtmlSize, 600, false)
    setHtmlSize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="App">
      <% if (needRouter) {%>
        {
          <RouteWithSubRoutes routes={routes}/>
        }
      <%} else {%> app <% }%>
      
    </div>

  );
}

export default App;
