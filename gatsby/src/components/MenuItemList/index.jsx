import React from 'react';
import MenuItem from '../MenuItem';

const MenuItemList = ({ pizzas, sizes, addToOrder }) => (
  <>
    {pizzas.map((pizza) => (
      <MenuItem
        key={`${pizza.id}-${Date.now()}`}
        pizza={pizza}
        sizes={sizes}
        addToOrder={addToOrder}
      />
    ))}
  </>
);

export default MenuItemList;
