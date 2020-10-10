import React from 'react';
import SinglePizza from '../SinglePizza';

const PizzaList = ({ pizzas }) => (
  <>
    {pizzas.map((pizza) => (
      <>
        <SinglePizza pizza={pizza} />
      </>
    ))}
  </>
);

export default PizzaList;
