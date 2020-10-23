import React from 'react';
import Img from 'gatsby-image';
import StyledOrderForm from './styled';
import useForm from '../../utils/useForm';
import calculatePizzaPrice from '../../utils/calculatePizzaPrice';
import formatMoney from '../../utils/formatMoney';

const OrderForm = ({ pizzas, sizes }) => {
  const { values, updateValue } = useForm({ name: '', email: '' });
  return (
    <StyledOrderForm>
      <fieldset>
        <legend>Your Info</legend>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={updateValue}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={updateValue}
        />
      </fieldset>
      <fieldset className="menu">
        <legend>Menu</legend>
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <Img
              fluid={pizza.image.asset.fluid}
              alt={pizza.name}
              width="50"
              height="50"
            />
            <h2>{pizza.name}</h2>
            <div>
              {sizes.map((size) => (
                <button type="button" key={`${size}-${pizza.name}`}>
                  {`${size} ${formatMoney(
                    calculatePizzaPrice(pizza.price, size)
                  )}
                      `}
                </button>
              ))}
            </div>
          </div>
        ))}
      </fieldset>
      <fieldset className="order">
        <legend>Order</legend>
      </fieldset>
    </StyledOrderForm>
  );
};

export default OrderForm;
