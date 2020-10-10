import React from 'react';

const SingleTopping = ({ topping, index }) =>
  index === 0 ? (
    <span>{topping.name}</span>
  ) : (
    <span>{`, ${topping.name}`}</span>
  );

export default SingleTopping;
