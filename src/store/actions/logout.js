import { LOGOUT } from '../contants/index';

// eslint-disable-next-line import/prefer-default-export
export const logout = dispatch => {
  window.location.replace('/login');
  localStorage.removeItem('access_token');
  dispatch({
    type: LOGOUT
  });
};
