// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import UserLayout from './layouts/UserLayout';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserForgetPassword from './pages/UserForgetPassword';
import Page5 from './pages/Page5';
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';

import Page6 from './pages/Page6';

import Page7 from './pages/Page7';

import Code from './pages/Code';

import All from './pages/All';

import Page10 from './pages/Page10';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/page7',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page7,
  },
  {
    path: '/',
    layout: UserLayout,
    component: UserLogin,
  },
  {
    path: '/forgetpassword',
    layout: UserLayout,
    component: UserForgetPassword,
  },
  {
    path: '/page5',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page5,
  },
  {
    path: '/page6',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page6,
  },
  {
    path: '/register',
    layout: UserLayout,
    component: UserRegister,
  },
  {
    path: '/code',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Code,
  },
  {
    path: '/page9',
    layout: HeaderAsideFooterResponsiveLayout,
    component: All,
  },
  {
    path: '/serch',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Page10,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
