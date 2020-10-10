import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import ToppingList from '../ToppingList';

const SinglePizze = ({ pizza }) => (
  <div>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <ToppingList toppings={pizza.toppings} />
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </Link>
  </div>
);

export default SinglePizze;
