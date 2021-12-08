import axios from "axios";

const service = axios.create({
  // 请求服务器地址
  baseURL: 'https://product.chuncongcong.com/api/product',
  timeout: 15000
});

service.interceptors.request.use(
  config => {
    // 设置请求头
    config.headers['content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['access-control-allow-credentials'] = true;

    // 格式化Get请求
    // if (config.method === 'get' && config.data) {
    //   config.url = `${config.url}?${qs.stringify(config.data), { indices: false }}`;
    //   config.headers['content-Type'] = 'qpplication/x-www-from-urlencode';
    // }
    // // 让每个请求携带自定义token
    // if (store.getters.token) {
    //   // 请求头添加toeken
    //   config.headers['Authorization'] = store.getters.token;
    // }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 一般不作处理
    return response.data;
  },
  error  => {
    if (error.response.status === 302) {
      // 用户未登录...
      return;
    }
    if (error.response.status === 400) {
      // 参数信息有误...
      return;
    }
    if (error.response.status === 404) {
      // 连接失败...
      return;
    }
    if (error.response.status === 500) {
      // 服务器内部错误
      return;
    }
    if (error.response.status === 506) {
      // 数据库异常
      return;
    }
    // 其他异常报错
    return Promise.reject(error);
  }
);

export default service;