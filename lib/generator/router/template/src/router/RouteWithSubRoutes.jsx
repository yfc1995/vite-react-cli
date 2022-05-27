
import { <% if(routerMode === 'history'){ %>BrowserRouter as Router<% } else{ %>HashRouter as Router<% } %>, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './Auth'


function isAuth(route) {

  if (route.meta && route.meta.auth) {
    return <RequireAuth><route.component /></RequireAuth>
  }
  return <route.component />
}


const RouteWithSubRoutes = ({ routes, children }) => {
  const fun = (routes) => {
    let list = []
    routes.forEach((route) => {
      if (route) {
        if (route.children && route.children.length) {
          list.push(<Route key={route.name} path={route.path} element={isAuth(route)}>
            {fun(route.children)}
          </Route>)
        }
        else {
          list.push(route.index ? <Route key={route.name} index element={isAuth(route)} /> : <Route key={route.name} path={route.path} element={isAuth(route)} />)
        }
      }
    })
    return list
  }
  let arr = fun(routes)
  return <Router>
    {
      children ? children : null
    }
    <Routes>
      {arr}
    </Routes>

  </Router>
}

export default RouteWithSubRoutes