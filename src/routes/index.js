import LoginPage from '../components/layouts/LoginPage';
import CallBackPage from '../components/layouts/Callback';

const routes = [
  {
    pattern: '//',
    name: 'LoginRedirect',
    component: LoginPage
  },
  {
    pattern: '/callback',
    name: 'CallBackPage',
    component: CallBackPage
  },
  {
    pattern: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

export default routes;
