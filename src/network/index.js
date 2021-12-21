import axios from "axios";

const service = axios.create({
  // 请求服务器地址
  baseURL: 'https://product.chuncongcong.com/api',
  timeout: 15000
});

service.interceptors.request.use(
  config => {
    // 设置请求头
    config.headers['content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['access-control-allow-credentials'] = true;
    if (localStorage.getItem('token')) {
      config.headers['token'] = localStorage.getItem('token');
    }    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { data } = response;
    if (data.code === 302) {
      // 用户未登录...
      return;
    }
    if (data.code === 400) {
      // 参数信息有误...
      return;
    }
    if (data.code === 404) {
      // 连接失败...
      return;
    }
    if (data.code === 500) {
      // 服务器内部错误
      return;
    }
    if (data.code === 506) {
      // 数据库异常
      return;
    }
    return data.data;
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