import styled from "styled-components";

const FormPageStyled = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &__heading {
      display: flex;
      color: ${(props) => props.theme.primaryColor};
      padding: 2rem;
      justify-content: center;
    }

    &__group {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
  }

  .options__group {
    display: flex;
    flex-direction: column;
    font-family: inherit;
    width: 100%;
    height: 2rem;
  }

  .choose__group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export default FormPageStyled;
