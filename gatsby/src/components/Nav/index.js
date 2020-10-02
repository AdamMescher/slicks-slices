import React from 'react';
import { Link, navigate } from 'gatsby';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizzas</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slicemasters</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
