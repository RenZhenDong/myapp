import { main } from './routes/main';

export interface Route {
  path?: string;
  component?: string;
  redirect?: string;
  routes?: Route[];
}

// 默认首页
const homePage = { path: '/main', component: './main/index' };

const basic = {
  path: '/main',
  component: '../layout/index',
  routes: [
    homePage,
    main,
    { component: './404' },
  ],
};

const dev = {
  path: '/permission-codes',
  component: '../layout/index',
};

const routes: Route[] = [
  basic,
  { component: './404' },
];

// 只有在开发环境
if (process.env.UMI_ENV === 'dev') {
  routes.splice(0, 0, dev);
}

export default routes;
