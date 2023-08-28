import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const NavLink = () => (
  <nav>
    <div className="logo">
      <img src={planet} width={50} alt="planet" className="logo-img" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul className="nav-links">
      <li className="nav-link">
        <Link to="/">Rockets</Link>
      </li>
      <li className="nav-link">
        <Link to="missions">Missions</Link>
      </li>
      <li className="nav-link">
        <Link to="my-profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default NavLink;
