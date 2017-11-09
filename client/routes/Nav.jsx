import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="nav">
    <li>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/create">
        Create A Site
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/profile">
        My Account
      </NavLink>
    </li>
  </ul>
);

export default Nav;
