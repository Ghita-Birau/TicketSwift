import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  font-family: "Poppins";
  background-color: var(--color-gray-50);
  color: var(--color-gray-700);

  border-radius: 10px;
  overflow: hidden;
  max-width: 90rem;

  margin: auto;
  margin-top: 6rem;

  display: grid;
  grid-template-columns: ${(props) =>
    props.contentposition === "right" ? "1.8fr 1.5fr" : "1.5fr 1.8fr"};
  column-gap: 2.8rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ImageContainer = styled.div`
  display: flex;

  justify-content: ${(props) =>
    props.contentposition === "right" ? "flex-end" : "flex-start"};

  & > div {
    width: 90%;
    background-color: var(--color-gray-200);
  }

  & > img {
    align-content: flex-end;
    height: 100%;
    width: 80%;
  }
`;

const FormContainer = styled.div`
  padding: 1.5rem 2.4rem;
  letter-spacing: -0.5px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function AuthWrapper({ imageContent, children, contentPosition }) {
  return (
    <StyledDiv contentposition={contentPosition}>
      {contentPosition === "right" && (
        <>
          <ImageContainer contentposition={contentPosition}>
            {imageContent}
          </ImageContainer>
          <FormContainer>{children}</FormContainer>
        </>
      )}

      {contentPosition === "left" && (
        <>
          <FormContainer>{children}</FormContainer>
          <ImageContainer contentposition={contentPosition}>
            {imageContent}
          </ImageContainer>
        </>
      )}
    </StyledDiv>
  );
}

AuthWrapper.propTypes = {
  imageContent: PropTypes.node,
  children: PropTypes.node,
  contentPosition: PropTypes.string,
};

export default AuthWrapper;
