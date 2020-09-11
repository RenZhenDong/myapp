
import { extend } from 'umi-request';


const codeMessage: Record<string, string> = {
  400: '请求错误。(400)',
  401: '未授权的访问。(401)',
  403: '访问被禁止。(403)',
  404: '资源不存在。(404)',
  500: '服务器繁忙，请稍后再试。(500)',
  502: '服务器繁忙，请稍后再试。(502)',
  503: '服务器繁忙，请稍后再试。(503)',
  504: '请求超时，请稍后再试。（504）',
};

/** 异常处理程序 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const { status, url, statusText } = response;

    const errorText = `${codeMessage[status] || statusText}`;

  } else if (!response) {
  }
  return response;
};

/** 配置request请求时的默认参数 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  prefix: process.env.apihost,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

interface ResponseType {
  traceId: string;
  rt: number;
  code: string;
  data: any;
  clientIp: string;
}

request.interceptors.request.use(
  (url, options) => {
    const _options: any = {};
    const methods = options.method || 'GET';

    const commonData: any = {};


    // const storeId = getStoreId();
    // storeId && (commonData.storeId = storeId);

    if (methods.toUpperCase() === 'POST') {
      _options.data = {
        ...commonData,
        ...options.data,
      };
    } else {
      _options.params = {
        ...options.params,
        ...commonData,
      };
    }

    return {
      url,
      options: {
        ...options,
        ..._options,
      },
    };
  },
  { global: false },
);

request.use(async (ctx, next) => {
  if (typeof process.env.tversion !== 'undefined' && Number(process.env.tversion) !== 0) {
    //@ts-ignore
    ctx.req.options.headers['tversion'] = process.env.tversion;
  }
  await next();


});

export { request };
