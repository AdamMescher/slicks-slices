import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BeersList from '../components/BeersList';
import SEO from '../components/SEO';

const StyledBeersPage = styled.div`
  h2 {
    text-align: center;
  }
`;

const BeersPage = ({ data: { beers } }) => (
  <>
    <SEO title={`Beers! We have ${beers.nodes.length} beers`} />
    <StyledBeersPage>
      <h2>We have {beers.length} beers available. Dine in only!</h2>
      <BeersList beers={beers.nodes} />
    </StyledBeersPage>
  </>
);

export default BeersPage;

export const beersQuery = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        image
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;
