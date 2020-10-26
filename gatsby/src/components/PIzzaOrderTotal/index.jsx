import React from 'react';
import calculateOrderTotal from '../../utils/calculateOrderTotal';
import formatMoney from '../../utils/formatMoney';

const PizzaOrderTotal = ({ order, pizzas }) => (
  <>
    <h3>Your Total is {formatMoney(calculateOrderTotal(order, pizzas))}</h3>
    <button type="submit" input="button">
      Order Ahead
    </button>
  </>
);

export default PizzaOrderTotal;
