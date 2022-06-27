// import { useEffect } from 'react';
<% if (needRouter) {%>import routes from 'router/routerConfig'<%}%>
<% if (needRouter) {%>import RouteWithSubRoutes from 'router/RouteWithSubRoutes'<%}%>

<% if (projectType === 'Mobile') {%>
//import { setMobileHtmlSize as setHtmlSize, debounce} from 'utils/selfAdaption'
<%}%>

<% if (projectType === 'PC') {%>
//import { setPCHtmlSize as setHtmlSize, debounce} from 'utils/selfAdaption'
<%}%>

function App() {

  // useEffect(() => {
  //   const resize = debounce(setHtmlSize, 600, false);
  //   setHtmlSize();
  //   window.addEventListener('resize', resize);
  //   return () => {
  //     window.removeEventListener('resize', resize);
  //   };
  // }, []);

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
