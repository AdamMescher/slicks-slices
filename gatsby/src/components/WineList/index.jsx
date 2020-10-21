import React from 'react';
import StyledWineList from './styled';
import SingleWine from '../SingleWine';
import Pagination from '../Pagination';

const WineList = ({ wines }) => {
  const types = Object.keys(wines);
  return (
    <StyledWineList>
      {types.map((type) =>
        wines[type].nodes.map((wine) => (
          <SingleWine key={wine.id} wine={wine} />
        ))
      )}
    </StyledWineList>
  );
};

export default WineList;
