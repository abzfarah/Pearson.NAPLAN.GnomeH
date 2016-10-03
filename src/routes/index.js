// We only need to import the modules necessary for initial render
import CoreLayout from '../masterLayouts/CoreLayout/CoreLayoutPage';
import LoginPage from '../components/layouts/LoginPage';

const routes = [
  {
    pattern: '//',
    name: 'LoginRedirect',
    component: LoginPage
  },
  {
    pattern: '/home',
    name: 'CoreLayout',
    component: CoreLayout
  },
  {
    pattern: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

export default routes;
