const tversion = process.env.TVERSION;
const domain = Number(process.env.DOMAIN) !== 0 ? process.env.DOMAIN : 'saas-qa.rmall.qq.com';
const apihost = `//mapi.${domain}`;
const publicPath = Number(tversion) === 0 ? `//cdn.${domain}/` : `//cdn.${domain}/${tversion}/`;
export default {
  define: {
    'process.env.env': 'qa',
    'process.env.local': 0,
    'process.env.apihost': apihost,
    'process.env.mockmenu': false,
    'process.env.tversion': tversion,
  },
  hash: true,
  publicPath,
};
