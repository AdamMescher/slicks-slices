import React from 'react';
import { graphql } from 'gatsby';

const SinglePizzaPage = () => (
  <p>all my single pizzas 🍕 💍 now put your dough up.</p>
);

export default SinglePizzaPage;

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          GatsbySanityImageFluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;
