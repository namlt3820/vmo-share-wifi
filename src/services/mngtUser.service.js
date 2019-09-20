import Base from './base.service';

export default class UserManager extends Base {
  constructor() {
    super('mngt/user');
  }

  getListUser(params) {
    return this.get(params);
  }

  addUser(params) {
    return this.post(params);
  }

  editUser(id, params) {
    return this.patch(id, params);
  }

  getUserInfo(id) {
    return this.getUser(id);
  }

  deleteUser(id) {
    return this.delete(id);
  }
}
