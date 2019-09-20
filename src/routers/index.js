import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import ChangePwd from '../pages/ChangePwd';
import UpdatePwdBycode from '../pages/UpdatePwdBycode';
import AllUser from '../pages/Dashboard/User/AllUser';
import AddUser from '../pages/Dashboard/User/AddUser';
import UserInfomation from '../pages/Dashboard/User/UserInfomation';
import UpdateUserInfo from '../pages/Dashboard/User/UpdateUserInfo';

export const routesDashboard = [
  {
    id: 1,
    path: '/',
    component: Home
  },
  {
    id: 2,
    path: '/allUser',
    component: AllUser
  },
  {
    id: 3,
    path: '/addUser',
    component: AddUser
  },
  {
    id: 4,
    path: '/userInfomation',
    component: UserInfomation
  },
  {
    id: 4,
    path: '/updateUserInfo',
    component: UpdateUserInfo
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
