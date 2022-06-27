import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<% if (needRedux) { %>import store from './store'; 
import { Provider } from 'react-redux';<% } %>

ReactDOM.render(
  <>
    <% if (needRedux) { %>
      <Provider store={store}>
        <App />
      </Provider>
    <%} else {%> <App /> <%} %>
  </>,
  document.getElementById('root')
);
