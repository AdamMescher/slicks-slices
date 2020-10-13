import React from 'react';
import StyledToppingList from './styled';
import SingleTopping from '../SingleTopping';

const ToppingList = ({ toppings }) => (
  <StyledToppingList>
    {toppings.map((topping, i) => (
      <SingleTopping topping={topping} index={i} />
    ))}
  </StyledToppingList>
);

export default ToppingList;
