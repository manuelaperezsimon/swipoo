import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CarsList from "../../components/CarsList/CarsList";
import Header from "../../components/Header/Header";
import CarsListPageStyle from "./CarsListPageStyled";

const CarsListPage = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateToCheckModels = () => {
    navigate("/search-models");
  };
  return (
    <>
      <Header />
      <CarsListPageStyle>
        <h2 className="section__heading">
          Take a look to the list of saved cars:
        </h2>
        <CarsList />
        <Button
          text="Come back to check models"
          type="button"
          action={navigateToCheckModels}
        />
      </CarsListPageStyle>
    </>
  );
};

export default CarsListPage;
