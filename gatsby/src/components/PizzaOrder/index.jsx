import React from 'react';
import StyledPizzaOrder from './styled';
import PizzaOrderList from '../PizzaOrderList';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => (
  <StyledPizzaOrder>
    <PizzaOrderList
      order={order}
      removeFromOrder={removeFromOrder}
      pizzas={pizzas}
    />
  </StyledPizzaOrder>
);

export default PizzaOrder;
