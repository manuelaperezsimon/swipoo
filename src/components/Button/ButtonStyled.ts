import styled from "styled-components";

const ButtonStyled = styled.div`
  .button {
    background-color: ${(props) => props.theme.primaryColor};
    color: rgb(255, 255, 255);
    border: 1px solid transparent;
    border-radius: 0.2rem;
    padding: 0.7rem 1.6rem;
    width: 100%;
    display: inline-block;
    font-family: inherit;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default ButtonStyled;
