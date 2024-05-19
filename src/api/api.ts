import qs from 'qs';

import request from '@/utils/axios';

// get
export function getWeatherList() {
  return request({
    url: '/api/getWeatherList',
    method: 'get',
  });
}
// post
export function setTableForm(data: Object) {
  return request({
    url: '/mini/setTableForm',
    method: 'post',
    data,
  });
}
// post qs
export function setActivityForm(data: Object) {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    url: '/mini/setActivityForm',
    method: 'post',
    data,
    transformRequest: [
      (data: any) => {
        return qs.stringify(data);
      },
    ],
  });
}
