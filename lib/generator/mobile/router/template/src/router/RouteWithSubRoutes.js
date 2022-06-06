import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider, { RequireAuth } from './AuthProvider'



function isAuth(route) {
  if (route.meta && route.meta.auth) {
    return <RequireAuth>
      <route.component></route.component>
    </RequireAuth>
  }
  return <route.component></route.component>
}
const RouteWithSubRoutes = ({ routes }) => {
  const recursiveRouters = (routes) => {
    let list = []
    routes.forEach(route => {
      if (route.children && route.children.length) {
        list.push(<Route key={route.name} path={route.path} element={isAuth(route)}>
          {
            recursiveRouters(route.children)
          }
        </Route>)
      } else if (route.layout) {
        list.push(<Route key={route.name} path={route.path} element={<route.layout />}>
          <Route index element={isAuth(route)} />
        </Route>)
      }
      else {
        list.push(route.index ? <Route key={route.name} index element={isAuth(route)} /> : <Route key={route.name} path={route.path} element={isAuth(route)} />)
      }
    })
    return list
  }

  const list = recursiveRouters(routes)

  return <Router>
    <AuthProvider>
      <Routes>
        {
          list
        }
      </Routes>
    </AuthProvider>

  </Router>

}


export default RouteWithSubRoutes