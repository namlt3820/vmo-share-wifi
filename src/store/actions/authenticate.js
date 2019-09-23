import Authenticate from '../../services/authenticate.service';
import { getCurrentUser } from './user';
import httpStatus from '../../config/httpStatus';

const authen = new Authenticate();

export const login = (data, history) => dispatch =>
  new Promise(resolve => {
    authen
      .login(data)
      .then(res => {
        if (res.status === httpStatus.StatusOK) {
          const token = res.data.data.access_token;
          localStorage.setItem('access_token', token);
          dispatch(getCurrentUser());
          history.push('/');
        } else if (res.status === httpStatus.StatusUnauthorized) {
          resolve(res.data);
        }
      })
      .catch(error => {
        throw error;
      });
  });

export const logout = () => {
  localStorage.removeItem('access_token');
  window.location.reload('/');
};
