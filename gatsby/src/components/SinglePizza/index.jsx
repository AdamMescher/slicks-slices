import React from 'react';
import { Link } from 'gatsby';
import ToppingList from '../ToppingList';

const SinglePizze = ({ pizza }) => (
  <div>
    <Link to={`/pizza/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
      <ToppingList toppings={pizza.toppings} />
    </Link>
  </div>
);

export default SinglePizze;
