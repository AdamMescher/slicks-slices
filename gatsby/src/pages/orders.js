import React from 'react';
import { graphql } from 'gatsby';
import OrderForm from '../components/OrderForm';
import SEO from '../components/SEO';

const Order = ({ data }) => (
  <>
    <SEO title="Order a pizza!" />
    <OrderForm pizzas={data.pizzas.nodes} sizes={['S', 'M', 'L', 'XL']} />
  </>
);

export default Order;

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
