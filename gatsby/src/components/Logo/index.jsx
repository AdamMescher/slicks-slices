import React from 'react';
import StyledLogo from './styled';

const Logo = () => (
  <StyledLogo className="logo">
    <div className="inner">
      <span className="est">EST 1994</span>
      <h1>
        <span className="slicks">
          <span className="letter s1">s</span>
          <span className="letter l">l</span>
          <span className="letter i">i</span>
          <span className="letter c">c</span>
          <span className="letter k">k</span>
          <span className="letter apos">'</span>
          <span className="letter s2">s</span>
        </span>
        <span className="slices">slices</span>
      </h1>
    </div>
  </StyledLogo>
);

export default Logo;
