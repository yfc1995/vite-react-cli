


<% if (needAntd) {%>import { ConfigProvider } from 'antd'<%}%>
<% if (needAntd) {%>import zhCN from 'antd/lib/locale/zh_CN'<%}%>
<% if (needRouter) {%>import RouteWithSubRoutes from './router/RouteWithSubRoutes'<%}%>
import 'moment/locale/zh-cn'

<% if (needRouter) {%>import routes from './router/routerConfig'<%}%>
<% if (needRedux) {%>import { Link } from 'react-router-dom'<%}%>





  function App() {

    // const debounce = (func, delay, immediate) => {
    //   // result表示返回值
    //   let timeout, result

    //   let debounced = function () {
    //     // 存储触发当前事件的this
    //     let _this = this
    //     // 存储event对象
    //     let args = arguments
    //     clearTimeout(timeout)
    //     // 判断是否立即执行，如果不传默认不立即执行
    //     if (immediate) {
    //       // 立即执行
    //       let callNow = !timeout
    //       timeout = setTimeout(() => {
    //         timeout = null
    //       }, delay)
    //       if (callNow) result = func.apply(_this, args)
    //     } else {
    //       timeout = setTimeout(function () {
    //         func.apply(_this, args)
    //       }, delay)
    //     }
    //     return result
    //   }
    //   debounced.cancel = function () {
    //     clearTimeout(timeout)
    //     timeout = null
    //   }
    //   return debounced
    // }

    // const setHtmlSize = () => {
    //   let width = window.innerWidth > 2770 ? 2770 : window.innerWidth
    //   // let width = window.innerWidth 
    //   document.documentElement.style.fontSize = `${width / 192}px`
    // }

    // useEffect(() => {
    //   setHtmlSize()
    //   window.addEventListener('resize', debounce(setHtmlSize, 600, false))
    // }, [])

    return (
      <%if (needAntd) {%> <ConfigProvider locale={zhCN}> <%} else {%> <> <%}%>

        <div className="App">
        <% if(needRouter) { %>

        {
          routes && routes.length ? <RouteWithSubRoutes routes={routes}>
              <Link to="/routerDom/list">RouterDemoList</Link>
              <br/>
              <Link to="/routerDom/add">RouterDemoAdd</Link> 
              <br/>
              <% if(needRedux){%>
                <Link to="/redux">ReduxDemo</Link>
                <%}%>
              
          </RouteWithSubRoutes> : null
        }
        <%} else {%> app <% }%>


      </div>
      <%if(needAntd) {%> </ConfigProvider> <%} else {%> </> <%}%>
      

    );
  }

export default App;
