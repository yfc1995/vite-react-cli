import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<% if (needRedux) { %>import store from './store';
import { Provider } from 'react-redux';<% } %>
<% if (projectType === 'PC') { %>import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
<% } %>


ReactDOM.render(
  <>
    <% if (needRedux) { %>
    <Provider store={store}>
      <% if (projectType === 'PC') { %>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
      <%} else {%> 
        <App /> 
      <%} %>
    </Provider>
    <%} else if (projectType === 'PC') { %>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
        <%} else {%> 
      <App /> 
      <%} %>
    <%} %>
  </>,
  document.getElementById('root')
);
