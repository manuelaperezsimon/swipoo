import styled from "styled-components";

const MarketValueStyle = styled.section`
  box-shadow: ${(props) => props.theme.gradientBoxesColor};

  table {
    width: 100%;
  }

  thead {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    font-size: 1.2rem;
  }

  th,
  td {
    width: 25%;
    padding: 0.5rem;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }

  tr:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }

  .table__heading {
    text-align: center;
  }
`;

export default MarketValueStyle;
