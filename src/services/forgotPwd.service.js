import Base from './base.service';

export default class ForgotPwd extends Base {
  constructor() {
    super('users/forgotPwd');
  }

  forgotPwd(params) {
    return this.post(params);
  }
}
