import styled from "styled-components";

const FormPageStyled = styled.div`
  padding: 1.5rem;

  .form {
    &__heading {
      display: flex;
      color: ${(props) => props.theme.primaryColor};
      padding: 2rem;
      justify-content: center;
    }
  }

  @media (min-width: 900px) {
    .form__heading {
      font-size: 2rem;
    }
  }
`;

export default FormPageStyled;
