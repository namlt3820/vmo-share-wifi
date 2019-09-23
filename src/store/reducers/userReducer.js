import { SET_CURRENT_USER, LOGOUT } from '../contants';

const initState = {
  isAuthenticated: false,
  user: null
};
export default function(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: 2,
        user: null
      };

    default:
      return state;
  }
}
