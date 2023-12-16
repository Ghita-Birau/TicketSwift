import styled from "styled-components";

const HeaderRow = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > span > svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    & > span > svg {
      color: var(--color-brand-500);
    }
  }
`;

export default HeaderRow;
