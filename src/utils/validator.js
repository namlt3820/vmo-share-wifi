const USER_NAME_MIN_LENGTH = 4;
const USER_NAME_MAX_LENGTH = 16;

// eslint-disable-next-line no-useless-escape
const USERNAME_REGEX = /^[a-zA-Z0-9\_\.]+$/;

class Validator {
  static isValidUsername(username) {
    const length = username ? username.length : 0;
    return (
      length >= USER_NAME_MIN_LENGTH &&
      length <= USER_NAME_MAX_LENGTH &&
      USERNAME_REGEX.test(username)
    );
  }
}
export default Validator;
