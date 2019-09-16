import Base from './base.service';

export default class User extends Base {
  constructor() {
    super('authentication');
  }

  login(params) {
    return this.post(params);
  }
}
