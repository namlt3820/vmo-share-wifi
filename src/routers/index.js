import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import ChangePwd from '../pages/ChangePwd';
import UpdatePwdBycode from '../pages/UpdatePwdBycode';

export const routesDashboard = [
  {
    id: 1,
    path: '/',
    component: Home
  }
];
export const routersAuth = [
  {
    id: 1,
    path: '/signup',
    component: SignUp
  },
  {
    id: 2,
    path: '/login',
    component: Login
  },
  {
    id: 3,
    path: '/forgotPwd',
    component: Forgot
  },
  {
    id: 4,
    path: '/changePwd',
    component: ChangePwd
  },
  {
    id: 5,
    path: '/updatePwdBycode',
    component: UpdatePwdBycode
  }
];
