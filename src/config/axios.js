/* eslint-disable func-names */
import axios from 'axios';
// import store from "../store/index";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const config = {
  baseURL: process.env.REACT_APP_API_URL || '',
  validateStatus(status) {
    return status >= 200 && status < 500; // default
  }
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  // eslint-disable-next-line no-shadow
  function(config) {
    if (window.localStorage.access_token)
      // eslint-disable-next-line no-param-reassign
      config.headers['x-access-token'] = window.localStorage.access_token;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    // Do something with request error
    if (error.response && error.response.status === 401) {
      // store.dispatch("logout");
    } else {
      // store.dispatch("common/setStateErrorRequest");
    }
    return Promise.reject(error);
  }
);
export default _axios;
