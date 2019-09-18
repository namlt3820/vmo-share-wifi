import Base from './base.service';

export default class ChangePwd extends Base {
  constructor() {
    super('users/changePwd');
  }

  changePwd(params) {
    return this.patch('', params);
  }
}
