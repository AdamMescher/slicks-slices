import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Img from 'gatsby-image';
import StyledMenuItem from './styled';
import calculatePizzaPrice from '../../utils/calculatePizzaPrice';
import formatMoney from '../../utils/formatMoney';

const MenuItem = ({ pizza, sizes, addToOrder }) => (
  <StyledMenuItem>
    <Img
      fluid={pizza.image.asset.fluid}
      alt={pizza.name}
      width="50"
      height="50"
    />
    <h2>{pizza.name}</h2>
    <div>
      {sizes.map((size) => (
        <button
          type="button"
          key={uuidv4()}
          onClick={() => addToOrder({ id: pizza.id, size })}
        >
          {`${size} ${formatMoney(calculatePizzaPrice(pizza.price, size))}`}
        </button>
      ))}
    </div>
  </StyledMenuItem>
);

export default MenuItem;
