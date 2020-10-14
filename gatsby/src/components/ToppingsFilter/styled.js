import styled from 'styled-components';

const StyledToppingsFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;

    .count {
      background: white;
      padding: 2px 5px;
    }

    .active {
      background: var(--yelow);
    }
  }
`;

export default StyledToppingsFilter;
