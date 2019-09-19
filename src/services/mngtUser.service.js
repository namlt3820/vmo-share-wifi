import Base from './base.service';

export default class UserManager extends Base {
  constructor() {
    super('mngt/user');
  }

  addUser(params) {
    return this.post(params);
  }
}
