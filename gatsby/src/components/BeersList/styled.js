import styled from 'styled-components';

const StyledBeerList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default StyledBeerList;
