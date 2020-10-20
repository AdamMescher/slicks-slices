import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import WineList from '../components/WineList';

const StyledWinePage = styled.div``;

const WinePage = ({ data: { reds, whites, sparkling, rose, port } }) => {
  const wines = { reds, whites, sparkling, rose, port };
  return (
    <StyledWinePage>
      <WineList wines={wines} />
    </StyledWinePage>
  );
};

export default WinePage;

export const query = graphql`
  query {
    reds: allRedWine {
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
    whites: allWhiteWine {
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
    sparkling: allSparklingWine {
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
    rose: allRoseWine {
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
    port: allPortWine {
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
