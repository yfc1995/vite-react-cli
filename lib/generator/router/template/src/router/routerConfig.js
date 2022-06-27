import { lazy } from 'react';
import Layout from 'pages/Layout';
import Login from 'pages/Login';
import Demo from 'pages/Demo';
import Index from 'pages/Index';
import ReduxDemo from 'pages/ReduxDemo';

const getComponent = name => {
  return lazy(() => import(`pages/${name}`));
};

const RouterDemoList = getComponent('RouterDemo');
const RouterDemoDetail = getComponent('RouterDemo/detail');

const routes = [
  {
    name: 'Index',
    component: Index,
    path: '/'
  },
  {
    name: 'Login',
    component: Login,
    path: '/login'
  },
  {
    name: 'Demo',
    component: Demo,
    path: '/demo',
    layout: Layout
  },
  {
    name: 'ReduxDemo',
    component: ReduxDemo,
    path: '/reduxDemo',
    layout: Layout
  },
  {
    name: 'routerDemo',
    component: Layout,
    path: '/routerDemo',
    children: [
      {
        name: 'routerDemoList',
        component: RouterDemoList,
        path: 'list',
        meta: { auth: true }
      },
      {
        name: 'routerDemoDetail',
        component: RouterDemoDetail,
        path: 'detail',
        meta: { auth: true }
      }
    ]
  }
];

export default routes;