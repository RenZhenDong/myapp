import { IConfig } from 'umi-types';
import routes from './routes';

// ref: https://umijs.org/config/
const __DEV__ = process.env.NODE_ENV === 'development';

const config: IConfig = {
  routes,
  generateCssModulesTypings: __DEV__,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: {
          immer: true,
        },
        dynamicImport: { webpackChunkName: true },
        title: '',
        dll: true,
        locale: {
          enable: true,
          default: 'zh-CN',
        },
      },
    ],
    [
      'umi-plugin-eslint',
      // eslint-loader options:
      {
        ignore: true, // 启用 .eslintignore
        useEslintrc: true, // 启用 .eslintrc
      },
    ],
  ],
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile' }], // `style: true` 会加载 less 文件
  ],
};

export default config;
