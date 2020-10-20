import styled from 'styled-components';

const StyledWineList = styled.ul`
  list-style: none;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default StyledWineList;
