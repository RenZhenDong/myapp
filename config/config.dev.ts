export default {
  define: {
    'process.env.env': 'dev',
    'process.env.local': 1,
    'process.env.apihost': '/proxy',
    'process.env.mockmenu': true,
  },
  proxy: {
    '/proxy': {
      target: 'http://192.168.1.86:3001', // 使用对应config/config.dev.ts配置
      changeOrigin: true,
      pathRewrite: { '^/proxy': '' },
    },
  },
};
