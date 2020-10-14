import React from 'react';
import PizzaGrid from '../PizzaGrid';
import SinglePizza from '../SinglePizza';

const PizzaList = ({ pizzas }) => (
  <PizzaGrid>
    {pizzas.map((pizza) => (
      <SinglePizza key={pizza.id} pizza={pizza} />
    ))}
  </PizzaGrid>
);

export default PizzaList;
