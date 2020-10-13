import styled from 'styled-components';

const StyledPizzaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  grid-auto-rows: auto auto 500px;
`;

export default StyledPizzaGrid;
