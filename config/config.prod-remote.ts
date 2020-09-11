export default {
  define: {
    'process.env.env': 'prod',
    'process.env.local': 0,
    'process.env.mockmenu': false,
    'process.env.apihost': '//mapi.ym.tencent.com',
    'process.env.sentry': 'https://8e91e676abd940c6aff20f7a71741f87@report.url.cn/sentry/2449',
    'process.env.tversion': 0,
  },
  hash: true,
  publicPath: '//cdn.ym.tencent.com/',
};
