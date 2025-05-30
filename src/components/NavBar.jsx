import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/actors"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Actors
        </NavLink>
        <NavLink
          to="/directors"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Directors
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
