import axios from "axios"
import { ElMessage } from "element-plus"

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
    if (config.method === 'get') {
      // console.log(config)
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
    if (data.code === 1) {
      return data.data;
    } else {
      ElMessage.error(data.data.msg);
      return
    }
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
  },
  error  => {
    const { data } = error.response;

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
    if (data.code === 500) {
      ElMessage.error(data.msg);
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