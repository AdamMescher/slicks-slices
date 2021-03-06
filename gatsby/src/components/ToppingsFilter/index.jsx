import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import StyledToppingsFilter from './styled';

const countPizzasInToppings = (pizzas) => {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((accum, topping) => {
      if (!accum[topping.id]) {
        accum[topping.id] = {
          id: topping.id,
          name: topping.name,
          slug: topping.slug.current,
          count: 0,
        };
      }
      accum[topping.id].count += 1;
      return accum;
    }, {});
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
};

const ToppingsFilter = () => {
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

  return (
    <StyledToppingsFilter>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.slug}`} key={topping.name}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </StyledToppingsFilter>
  );
};

export default ToppingsFilter;
