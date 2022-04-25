import { getAction, postAction } from './request';

const getBindUserApi = (search: string, params = {}) => getAction(`/gzh/getBindUser${search}`, params);
const bindUserApi = (params = {}) => postAction('gzh/bindUser', params);
const unBindUserApi = (params = {}) => postAction('gzh/unBindUser', params);

export {
  getBindUserApi,
  bindUserApi,
  unBindUserApi,
};
