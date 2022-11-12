import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .form {
    display: flex;
    flex-direction: column;
    padding: 1.8rem;
    border-radius: 0.4rem;
    color: rgb(0, 0, 0);
    gap: 3rem;
    box-shadow: ${(props) => props.theme.gradientBoxesColor};
  }

  .options__group {
    font-family: inherit;
    font-size: 1.1rem;
    padding: 0.7rem 0.7rem 0.7rem 0.8rem;
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 0.4rem;
  }

  .choose__group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1.1rem;
  }

  .card__group {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 4.5rem;
  }

  @media (min-width: 900px) {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: center;

    .form {
      width: 60%;
      max-width: 600px;
      padding: 1.8rem 3rem;
    }
  }
`;

export default FormStyled;
