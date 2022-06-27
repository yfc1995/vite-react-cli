import { useEffect } from 'react';
<% if (needRouter) {%>import routes from 'router/routerConfig'<%}%>
<% if (needRouter) {%>import RouteWithSubRoutes from 'router/RouteWithSubRoutes'<%}%>

import { <% if(projectType === 'Mobile'){ %>setMobileHtmlSize as setHtmlSize<% } else{ %>setPCHtmlSize as setHtmlSize<% } %>, debounce } from 'react-router-dom';

function App() {

  useEffect(() => {
    const resize = debounce(setHtmlSize, 600, false);
    setHtmlSize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

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
