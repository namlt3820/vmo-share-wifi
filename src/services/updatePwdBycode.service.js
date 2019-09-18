import Base from './base.service';

export default class UpdatePwdBycode extends Base {
  constructor() {
    super('users/forgotPwd/updatePwdBycode');
  }

  updatePwdBycode(params) {
    return this.patch('', params);
  }
}
