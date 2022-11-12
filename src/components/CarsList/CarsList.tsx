import { useEffect, useState } from "react";
import { CompleteCarInfo } from "../../interfaces/interfaceCar";
import CarCard from "../Car/Car";
import CarsListStyled from "./CarsListStyled";

const CarsList = (): JSX.Element => {
  const initialCarsListState: CompleteCarInfo[] = [];
  const [carsList, setCarsList] = useState(initialCarsListState);

  useEffect(() => {
    const cars = localStorage.getItem("carsCreated");

    if (cars) {
      setCarsList(JSON.parse(cars));
    }
  }, []);

  return (
    <>
      <CarsListStyled>
        {carsList.length > 0 ? (
          <ul className="cars__list">
            {carsList.map((car) => (
              <li key={car.value} className="cars__car">
                <CarCard car={car} />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h2 className="list__heading--empty">
              There are no models saved here!
            </h2>
          </>
        )}
      </CarsListStyled>
    </>
  );
};

export default CarsList;
