const tversion = process.env.TVERSION;
const domain = Number(process.env.DOMAIN) !== 0 ? process.env.DOMAIN : 'saas-dev.rmall.qq.com';
const apihost = `//mapi.${domain}`;
const publicPath = Number(tversion) === 0 ? `//cdn.${domain}/` : `//cdn.${domain}/${tversion}/`;
export default {
  define: {
    'process.env.env': 'dev',
    'process.env.local': 0,
    'process.env.apihost': apihost,
    'process.env.mockmenu': false,
  },
  hash: true,
  publicPath,
};
