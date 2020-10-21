import React, { component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

const StyledOrderPage = styled.div``;

const OrdersPage = ({ data }) => {
  const pizzas = data.pizzas.nodes;
  const sizes = ['S', 'M', 'L', 'XL'];
  const { values, updateValue } = useForm({ name: '', email: '' });
  return (
    <>
      <SEO title="Order a pizza!" />
      <StyledOrderPage>
        <form>
          <fieldset>
            <legend>Your Info</legend>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={updateValue}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={updateValue}
            />
          </fieldset>
          <fieldset>
            <legend>Menu</legend>
            {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <Img
                  fluid={pizza.image.asset.fluid}
                  alt={pizza.name}
                  width="50"
                  height="50"
                />
                <h2>{pizza.name}</h2>
                <div>
                  {sizes.map((size) => (
                    <button type="button" key={`${size}-${pizza.name}`}>
                      {`${size} ${formatMoney(
                        calculatePizzaPrice(pizza.price, size)
                      )}
                      `}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>Order</legend>
          </fieldset>
        </form>
      </StyledOrderPage>
    </>
  );
};

export default OrdersPage;

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
