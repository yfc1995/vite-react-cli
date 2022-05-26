
import Layout from '@/pages/Layout'

import Demo from '@pages/Demo'
import NotFondPage from '@pages/404Page'

import { lazy } from 'react';
import RouterDemo from '@/pages/RouterDemo';

function getComponent(name) {
  return lazy(() => import(`@/pages/${name}`))
}

const AddRouterDom = getComponent('RouterDemo/add')


const routesConfig = [
  {
    path: '/routerDom',
    component: Layout,
    name: 'routerDom',
    meta: {
      menu: true,
      title: '路由测试',
    },
    children: [
      {
        path: 'list',
        component: RouterDemo,
        name: 'RouterDemo',
        meta: {
          auth: false,
          title: '列表',
          menu: true,
        }
      },
      {
        path: 'add',
        component: AddRouterDom,
        name: 'AddRouterDom',
        meta: {
          auth: false,
          title: '添加',
          activePath: 'list',
          activeTitle: '列表',
        }
      },
      {
        path: 'edit',
        component: AddRouterDom,
        name: 'editRouterDom',
        meta: {
          auth: false,
          title: '编辑',
          activePath: 'list',
          activeTitle: '列表',
        }
      }
    ]
  }
]

export const ImmutableRoutes = [
  {
    path: '/demo',
    component: Demo,
    name: 'Demo',
    meta: {}
  },
  {
    path: '*',
    component: NotFondPage,
    name: 'NotFondPage',
    meta: {}
  }
]

const routes = [...routesConfig, ...ImmutableRoutes ]

export default routes