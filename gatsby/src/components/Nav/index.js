import React from 'react';
import { Link, navigate } from 'gatsby';
import StyledNav from './styled';
import Logo from '../Logo';

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link to="/orders">Order Ahead</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slicemasters</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
