import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal"
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : null}
  ${(props) =>
    props.type === "vertical"
      ? css`
          flex-direction: column;
          gap: 1.6rem;
        `
      : null}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
