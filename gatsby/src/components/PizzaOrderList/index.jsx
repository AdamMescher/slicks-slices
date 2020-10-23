import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import OrderItem from '../OrderItem';

const PizzaOrderList = ({ order, pizzas, removeFromOrder }) =>
  order.map((singleOrder, index) => {
    const pizza = pizzas.find((za) => za.id === singleOrder.id);
    return (
      <OrderItem
        key={uuidv4()}
        pizza={pizza}
        size={singleOrder.size}
        removeFromOrder={removeFromOrder}
        index={index}
      />
    );
  });

export default PizzaOrderList;
