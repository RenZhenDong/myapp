// js 接入的属性
export interface SubappConfig {
  src: string;
  css: string;
  id: string;
}

export interface IframeConfig {
  title?: string;
  url: string;
}

export interface IframeApp {
  [key: string]: IframeConfig;
}

export interface SubApp {
  [key: string]: SubappConfig;
}

export interface Config {
  allowOrigin: string[];
  subApp: SubApp;
  iframeApp: IframeApp;
}

export const defaultConfig: Config = {
  allowOrigin: [
    'http://9.138.238.173',
    'https://9.138.238.173',
    'https://test.finance.cloud.hahhahah.com',
  ],
  subApp: {
    market: {
      src: 'https://r.gtimg.cn/open/qcloud/activity/1.0.8/index.js',
      css: 'https://r.gtimg.cn/open/qcloud/activity/1.0.8/index.css',
      id: 'marketing-app',
    },
  },
  iframeApp: {
    '/trade/account-manage': {
      title: '',
      url: '//9.138.238.173/cmall/trade/account-manage',
    },
    '/trade/invoice-record': {
      title: '',
      url: '//9.138.238.173/cmall/invoice/record',
    },
    '/trade/finance': {
      title: '',
      url: '//9.138.238.173/cmall/trade/finance',
    },
    '/trade/invoice-account': {
      title: '',
      url: '//9.138.238.173/cmall/trade/invoice-account',
    },

    '/data': {
      title: '有数',
      url:
        'https://wechat.sparta.html5.qq.com//dc/api/user/loginBaoLong?refer=baolong',
    },

    '/youshu': {
      title: '有数',
      url:
        'https://wechat.sparta.html5.qq.com//dc/api/user/loginBaoLong?refer=baolong',
    },
  },
};
