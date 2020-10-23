import React, { component } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import OrderForm from '../components/OrderForm';
import SEO from '../components/SEO';

const StyledOrder = styled.div``;

const Order = ({ data }) => (
  <StyledOrder>
    <SEO title="Order a pizza!" />
    <OrderForm pizzas={data.pizzas.nodes} sizes={['S', 'M', 'L', 'XL']} />
  </StyledOrder>
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
