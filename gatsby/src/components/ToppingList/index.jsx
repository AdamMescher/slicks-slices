import React from 'react';
import SingleTopping from '../SingleTopping';

const ToppingList = ({ toppings }) => (
  <>
    {toppings.map((topping, i) => (
      <SingleTopping topping={topping} index={i} />
    ))}
  </>
);

export default ToppingList;
