import styled from "styled-components";

const CarsListStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;

  .cars__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5.5rem;
    padding: 0;
  }

  .list__heading--empty {
    color: ${(props) => props.theme.primaryColor};
  }

  @media (min-width: 900px) {
    .cars__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .cars__car {
      width: 30rem;
    }
  }
`;

export default CarsListStyled;
