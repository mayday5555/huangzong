import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
console.log(process.env.VUE_APP_BASE_API);
console.log(process.env.NODE_ENV);
const requests = axios.create({
  baseURL: '/api',
  timeout: 100000,
});
requests.interceptors.request.use((config) => config);
requests.interceptors.response.use((res) => res.data);

export function getAction(url: string, params: Record<string, unknown> = {}) {
  let paramsStr = '';
  Object.keys(params).forEach((key) => {
    paramsStr += `${key}=${params[key]}&`;
  });
  if (paramsStr !== '') {
    paramsStr = paramsStr.substring(0, paramsStr.lastIndexOf('&'));
    url = `${url}?${paramsStr}`;
  }
  return requests.get(url);
}

export function postAction(url: string, params = {}) {
  return requests.post(url, params);
}
