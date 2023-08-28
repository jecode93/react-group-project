import React from 'react';
import { Outlet } from 'react-router';
import NavLink from './NavLink';

const Layout = () => (
  <div>
    <NavLink />
    <Outlet />
  </div>
);

export default Layout;
