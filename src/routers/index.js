import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import ChangePwd from '../pages/ChangePwd';
import UpdatePwdBycode from '../pages/UpdatePwdBycode';

const routers = [
  {
    id: 1,
    path: '/',
    component: Home
  },
  {
    id: 2,
    path: '/signup',
    component: SignUp
  },
  {
    id: 3,
    path: '/login',
    component: Login
  },
  {
    id: 4,
    path: '/forgotPwd',
    component: Forgot
  },
  {
    id: 5,
    path: '/changePwd',
    component: ChangePwd
  },
  {
    id: 6,
    path: '/updatePwdBycode',
    component: UpdatePwdBycode
  }
];

export default routers;
