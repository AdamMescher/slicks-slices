import React from 'react';
import { graphql } from 'gatsby';
import ToppingsFilter from '../components/ToppingsFilter';
import PizzaList from '../components/PizzaList';

const PizzasPage = ({ data: { pizzas } }) => (
  <>
    <ToppingsFilter />
    <PizzaList pizzas={pizzas.nodes} />
  </>
);

export default PizzasPage;

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
