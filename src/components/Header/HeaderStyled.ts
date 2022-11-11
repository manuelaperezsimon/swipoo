import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  min-height: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 1.5rem;
  box-shadow: ${(props) => props.theme.gradientBoxesColor};
  max-width: 100vw;

  .header__title {
    display: none;
  }
`;

export default HeaderStyled;
