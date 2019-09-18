import Base from './base.service';

export default class User extends Base {
  constructor() {
    super('authenticate');
  }

  login(params) {
    return this.post(params);
  }
}
