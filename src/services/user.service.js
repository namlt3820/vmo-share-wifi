import Base from './base.service';

export default class User extends Base {
  constructor() {
    super('users/signUp');
  }

  signUp(params) {
    return this.post(params);
  }
}
