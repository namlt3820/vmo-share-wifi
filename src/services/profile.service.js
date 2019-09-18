import Base from './base.service';

export default class Profile extends Base {
  constructor() {
    super('users/profile');
  }

  getProfile() {
    return this.get();
  }
}
