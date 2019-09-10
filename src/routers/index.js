import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

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
  }
];

export default routers;
