import styled from "styled-components";

const FormPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

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
    font-size: 1.1rem;
    padding: 0.7rem 0.7rem 0.7rem 0.8rem;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 0.4rem;
  }

  .choose__group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export default FormPageStyled;
