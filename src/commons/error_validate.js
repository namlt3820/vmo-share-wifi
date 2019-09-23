export const ERROR_REQUIRE = 'Require fill';
export const ERROR_INVALID = 'Invalid';

class Errors {
  static handleValidate(validate, isLength, type) {
    if (!validate) {
      if (isLength.length === 0) {
        return `${ERROR_REQUIRE}\n${type}`;
      }
      return `${ERROR_INVALID}\n${type}`;
    }
    return '';
  }
}
export default Errors;
