export default {
  define: {
    'process.env.env': 'qa',
    'process.env.local': 1,
    'process.env.apihost': 'https://mapi.saas-qa.rmall.qq.com',
    'process.env.mockmenu': false,
  },
  proxy: {
    '/proxy': {
      target: 'https://mapi.saas-qa.rmall.qq.com', // 使用对应config/config.dev.ts配置
      changeOrigin: true,
      pathRewrite: { '^/proxy': '' },
    },
  },
};
