import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';

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
    id: 3,
    path: '/forgot-password',
    component: Forgot
  }
];

export default routers;