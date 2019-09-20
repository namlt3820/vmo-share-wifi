import axios from '../config/axios';

export default class Base {
  constructor(path) {
    this.path = path;
  }

  get(params) {
    return axios.get(this.path, { params });
  }

  post(body) {
    return axios.post(this.path, body);
  }

  put(id) {
    return axios.put(`${this.path}/${id}`);
  }

  patch(id, param) {
    return axios.patch(`${this.path}/${id}`, param);
  }

  delete(id) {
    return axios.delete(`${this.path}/${id}`);
  }
}
