import styled from "styled-components";

const CarsListPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  gap: 2rem;

  .section__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    .section__heading {
      font-size: 2rem;
    }
  }
`;

export default CarsListPageStyle;
