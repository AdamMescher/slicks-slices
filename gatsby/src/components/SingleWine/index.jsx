import React from 'react';
import StyledSingleWine from './styled';

const SingleWine = ({ wine }) => (
  <StyledSingleWine>
    <img src={wine.image} alt={wine.wine} />
    <p>{wine.wine}</p>
    <p>Winery: {wine.winery}</p>
    <p>
      {wine.rating.average} (<span>{wine.rating.reviews}</span>)
    </p>
  </StyledSingleWine>
);

export default SingleWine;
