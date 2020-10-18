import styled from 'styled-components';

const StyledSingleSlicemaster = styled.div`
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    height: 400px;
    margin-top: -2rem;
  }

  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 4rem;
    position: relative;
    z-index: 2;
    background: none;
  }

  .slicemaster-name {
    background: var(--yellow);
    display: inline-block;
    transform: rotate(-2deg);
  }

  .description {
    position: relative;
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -4rem;
    transform: rotate(1deg);
    z-index: 2;
    text-align: center;
  }
`;

export default StyledSingleSlicemaster;
