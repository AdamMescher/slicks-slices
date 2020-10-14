import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import StyledToppingsFilter from './styled';

const countPizzasInToppings = (pizzas) => {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((accum, topping) => {
      console.log('TOPPING: ', topping);
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
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
          vegetarian
          slug {
            current
          }
        }
      }
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
      {toppingsWithCounts.map((topping) => (
        <Link test={topping} to={`/topping/${topping.slug}`}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </StyledToppingsFilter>
  );
};

export default ToppingsFilter;
