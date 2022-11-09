import styled from "styled-components";

const FormStyled = styled.div`
  padding: 1.5rem;
  width: 100%;

  .form {
    &__heading {
      color: ${(props) => props.theme.primaryColor};
      padding: 2rem;
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    &__label {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  .select__group {
    display: flex;
    flex-direction: column;
  }

  .form__select,
  .input {
    font-family: inherit;
    width: 100%;
    height: 2rem;
  }
`;

export default FormStyled;
