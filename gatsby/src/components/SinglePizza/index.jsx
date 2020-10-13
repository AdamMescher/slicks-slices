import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import StyledSinglePizza from './styled';
import ToppingList from '../ToppingList';

const SinglePizze = ({ pizza }) => (
  <StyledSinglePizza>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2 className="pizza-title">
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <ToppingList toppings={pizza.toppings} />
    <Img
      className="pizza-img"
      fluid={pizza.image.asset.fluid}
      alt={pizza.name}
    />
  </StyledSinglePizza>
);

export default SinglePizze;
