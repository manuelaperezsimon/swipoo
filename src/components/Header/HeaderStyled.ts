import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  min-height: 5rem;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 1.5rem;
  box-shadow: 0 0 20px rgb(0 0 0 / 5%);
  max-width: 100vw;

  .header__title {
    display: none;
  }
`;

export default HeaderStyled;
