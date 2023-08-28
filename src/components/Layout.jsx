import React from 'react';
import { Outlet } from 'react-router';
import NavLink from './NavLink';
import './styles/layout.css';

const Layout = () => (
  <div className="container">
    <NavLink />
    <Outlet />
  </div>
);

export default Layout;
