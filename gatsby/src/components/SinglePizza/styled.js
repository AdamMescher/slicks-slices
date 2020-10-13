import styled from 'styled-components';

const StyledSinglePizza = styled.div`
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  display: grid;
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
`;

export default StyledSinglePizza;
