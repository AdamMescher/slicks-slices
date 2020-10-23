import React from 'react';
import Img from 'gatsby-image';
import StyledOrderItem from './styled';
import calculatePizzaPrice from '../../utils/calculatePizzaPrice';
import formatMoney from '../../utils/formatMoney';

const OrderItem = ({ pizza, removeFromOrder, size, index }) => (
  <StyledOrderItem>
    <Img fluid={pizza.image.asset.fluid} />
    <h2>{pizza.name}</h2>
    <p>{formatMoney(calculatePizzaPrice(pizza.price, size))}</p>
    <button
      className="remove"
      type="button"
      title={`Remove ${size} ${pizza.name} from order`}
      onClick={() => removeFromOrder(index)}
    >
      &times;
    </button>
  </StyledOrderItem>
);

export default OrderItem;
