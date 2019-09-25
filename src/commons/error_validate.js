export const ERROR_REQUIRE = 'is required';
export const ERROR_INVALID = 'is invalid';
class Errors {
  static handleValidate(validate, isLength, type) {
    if (!validate) {
      if (isLength.length === 0) {
        return `${type}\n${ERROR_REQUIRE}`;
      }
      return `${type}\n${ERROR_INVALID}`;
    }
    return '';
  }
}
export default Errors;
