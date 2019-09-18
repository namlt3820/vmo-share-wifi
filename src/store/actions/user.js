import User from '../../services/profile.service';
import { SET_CURRENT_USER } from '../contants';

const user = new User();
export const setCurrentUser = data => {
  return {
    type: SET_CURRENT_USER,
    payload: data.data
  };
};

export const getCurrentUser = () => dispatch => {
  user
    .getProfile()
    .then(res => {
      dispatch(setCurrentUser(res.data));
    })
    .catch(error => {
      throw error;
    });
};
