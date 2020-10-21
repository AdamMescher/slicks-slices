import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import WineList from '../components/WineList';
import Pagination from '../components/Pagination';

const StyledWinePage = styled.div``;
const WinePage = ({
  data: { reds, whites, sparkling, rose, port },
  pageContext,
}) => {
  const wines = { reds, whites, sparkling, rose, port };
  return (
    <StyledWinePage>
      <Pagination
        pageSize={pageContext.pageSize || process.env.GATSBY_WINE_PAGE_SIZE}
        totalCount={
          reds.totalCount +
          whites.totalCount +
          sparkling.totalCount +
          rose.totalCount +
          port.totalCount
        }
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/wines"
      />
      <WineList wines={wines} />
    </StyledWinePage>
  );
};

export default WinePage;

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 10) {
    reds: allRedWine(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        image
        rating {
          average
          reviews
        }
        wine
        winery
      }
    }
    whites: allWhiteWine(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        image
        rating {
          average
          reviews
        }
        wine
        winery
      }
    }
    sparkling: allSparklingWine(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        image
        rating {
          average
          reviews
        }
        wine
        winery
      }
    }
    rose: allRoseWine(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        image
        rating {
          average
          reviews
        }
        wine
        winery
      }
    }
    port: allPortWine(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        image
        rating {
          average
          reviews
        }
        wine
        winery
      }
    }
  }
`;
