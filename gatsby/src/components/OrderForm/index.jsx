import React from 'react';
import StyledOrderForm from './styled';
import MenuItemList from '../MenuItemList';
import PizzaOrder from '../PizzaOrder';
import useForm from '../../utils/useForm';
import usePizza from '../../utils/usePizza';

const OrderForm = ({ pizzas, sizes }) => {
  const { values, updateValue } = useForm({ name: '', email: '' });
  const { order, addToOrder, removeFromOrder } = usePizza({
    pizzas,
    inputs: values,
  });
  return (
    <StyledOrderForm>
      <fieldset>
        <legend>Your Info</legend>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </label>
      </fieldset>
      <fieldset className="menu">
        <legend>Menu</legend>
        <MenuItemList pizzas={pizzas} sizes={sizes} addToOrder={addToOrder} />
      </fieldset>
      <fieldset className="order">
        <legend>Order</legend>
        <PizzaOrder
          order={order}
          pizzas={pizzas}
          removeFromOrder={removeFromOrder}
        />
      </fieldset>
    </StyledOrderForm>
  );
};

export default OrderForm;
