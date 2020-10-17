import React from 'react';
import StyledBeerList from './styled';
import SingleBeer from '../SingleBeer';

const BeersList = ({ beers }) => (
  <StyledBeerList>
    {beers.map((beer) => (
      <SingleBeer key={beer.id} beer={beer} />
    ))}
  </StyledBeerList>
);

export default BeersList;
