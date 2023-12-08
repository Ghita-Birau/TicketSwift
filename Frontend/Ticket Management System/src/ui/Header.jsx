import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-50);
  padding: 1rem 4rem;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
