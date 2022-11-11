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
`;

export default FormPageStyled;
