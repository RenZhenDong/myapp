export default {
  define: {
    'process.env.env': 'prod',
    'process.env.local': 0,
    'process.env.mockmenu': false,
    'process.env.apihost': '//mapi.ym.tencent.com',
    'process.env.tversion': process.env.TVERSION,
  },
  hash: true,
  publicPath: '//cdn.ym.tencent.com/',
};
