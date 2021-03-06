import React from 'react';
import { graphql } from 'gatsby';
import SlicemasterList from '../components/SlicemastersList';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SlicemastersPage = ({ data, pageContext }) => (
  <>
    <SEO title={`Slicemasters - Page ${pageContext.currentPage || 1}`} />
    <Pagination
      pageSize={
        pageContext.pageSize || process.env.GATSBY_SLICEMASTER_PAGE_SIZE
      }
      totalCount={data.slicemasters.totalCount}
      currentPage={pageContext.currentPage || 1}
      skip={pageContext.skip}
      base="/slicemasters"
    />
    <SlicemasterList slicemasters={data.slicemasters.nodes} />
  </>
);

export default SlicemastersPage;

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
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
