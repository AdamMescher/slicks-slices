import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';

const PizzasPage = ({ data: { pizzas } }) => (
  <>
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
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
