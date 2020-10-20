import React from 'react';
import { graphql } from 'gatsby';
import SlicemasterList from '../components/SlicemastersList';
// import SingleSlicemaster from '../components/SingleSlicemaster';

const SlicemastersPage = ({ data }) => (
  <>
    <p>{process.env.GATSBY_PAGE_SIZE}</p>
    <SlicemasterList slicemasters={data.slicemasters.nodes} />
  </>
);

export default SlicemastersPage;

export const query = graphql`
  query {
    slicemasters: allSanityPerson {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        description
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
