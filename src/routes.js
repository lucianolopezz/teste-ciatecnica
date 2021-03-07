import React from 'react';

const Users = React.lazy(() => import('./views/users'));
const UserEdit = React.lazy(() => import('./views/users/edit'));
const UserAdd = React.lazy(() => import('./views/users/add'));

const routes = [
  { path: '/', exact: true,  name: 'Users', component: Users },
  { path: '/users/edit/:id', exact: true, name: 'Edit', component: UserEdit },
  { path: '/users/add', exact: true, name: 'Create', component: UserAdd },
];

export default routes;
