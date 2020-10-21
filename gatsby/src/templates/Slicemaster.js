import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const StyledSlicemasterPage = styled.div``;

const SlicemasterPage = ({ data: { slicemaster } }) => (
  <StyledSlicemasterPage className="center">
    <img src={slicemaster.image.asset.fluid.src} alt={slicemaster.name} />
    <h2 className="mark">{slicemaster.name}</h2>
    <p>{slicemaster.description}</p>
  </StyledSlicemasterPage>
);

export default SlicemasterPage;

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      id
      name
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
