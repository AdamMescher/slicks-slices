import React from 'react';
import StyledSlicemastersList from './styled';
import SingleSlicemaster from '../SingleSlicemaster';

const SlicemastersList = ({ slicemasters }) => (
  <StyledSlicemastersList>
    {slicemasters.map((slicemaster) => (
      <SingleSlicemaster key={slicemaster.id} slicemaster={slicemaster} />
    ))}
  </StyledSlicemastersList>
);

export default SlicemastersList;
