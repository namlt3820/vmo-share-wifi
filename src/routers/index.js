import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import ChangePwd from '../pages/ChangePwd';
import UpdatePwdBycode from '../pages/UpdatePwdBycode';
import AllUser from '../pages/Dashboard/User/AllUser';
import AddUser from '../pages/Dashboard/User/AddUser';
import UserInfomation from '../pages/Dashboard/User/UserInfomation';
import UpdateUserInfo from '../pages/Dashboard/User/UpdateUserInfo';
import AddRouter from '../pages/Dashboard/AddRouter';
import ListRouter from '../pages/Dashboard/ListRouter';
import UserData from '../pages/Dashboard/Data/UserData';
import WifiData from '../pages/Dashboard/Data/WifiData';
import Dashboard from '../pages/Dashboard/Dashboard';

export const routesDashboard = [
  {
    id: 1,
    path: '/allUser',
    component: AllUser
  },
  {
    id: 2,
    path: '/addUser',
    component: AddUser
  },
  {
    id: 3,
    path: '/userInfomation',
    component: UserInfomation
  },
  {
    id: 4,
    path: '/updateUserInfo',
    component: UpdateUserInfo
  },
  {
    id: 5,
    path: '/addRouter',
    component: AddRouter
  },
  {
    id: 6,
    path: '/routers',
    component: ListRouter
  },
  {
    id: 7,
    path: '/userData',
    component: UserData
  },
  {
    id: 8,
    path: '/wifiData',
    component: WifiData
  },
  {
    id: 9,
    path: '/dashboard',
    component: Dashboard
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
export const routesLanding = [
  {
    id: 1,
    path: '/',
    component: Landing
  }
];
