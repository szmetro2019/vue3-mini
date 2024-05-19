import { message } from 'ant-design-vue';
import axios from 'axios';

const service = axios.create({
  baseURL: '',
  timeout: 10000,
});
// request
service.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
// response
service.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(new Error(res || 'Error'));
    } else {
      return res;
    }
  },
  function (error) {
    console.log('err' + error);
    message.info('This is a normal message');
    return Promise.reject(error);
  },
);
export default service;
