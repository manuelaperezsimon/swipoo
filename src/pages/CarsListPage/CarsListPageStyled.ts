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

  .cars__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }
`;

export default CarsListPageStyle;
