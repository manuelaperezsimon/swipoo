import styled from "styled-components";

const CarStyled = styled.div`
  margin-top: 2rem;

  .table__container {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: ${(props) => props.theme.primaryColor};
    border-bottom: solid 3px grey;
  }

  th,
  td {
    width: 25%;
    border: solid 1px grey;
    padding: 0.5rem;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }

  tr:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }
`;

export default CarStyled;
