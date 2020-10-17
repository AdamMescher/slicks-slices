import React from 'react';
import StyledSingleBeer from './styled.js';

const SingleBeer = ({ beer }) => {
  const rating = Math.round(beer.rating.average);

  return (
    <StyledSingleBeer>
      <img src={beer.image} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.price}</p>
      <p title={`${rating} out of 5 stars`}>
        {`⭐`.repeat(rating)}
        <span style={{ filter: `grayscale(100%)` }}>
          {`⭐`.repeat(5 - rating)}
        </span>
        <span>{`(${beer.rating.reviews})`}</span>
      </p>
    </StyledSingleBeer>
  );
};

export default SingleBeer;
