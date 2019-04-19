import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/', name: 'Home', component: DefaultLayout, exact: true,
  },
  {
    path: '/dashboard', name: 'Dashboard', component: Dashboard,
  },
];

export default routes;
