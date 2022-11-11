import { useEffect, useState } from "react";
import carBrands from "../../utils/brands";
import cardFuel from "../../utils/fuelTypes";
import "react-toastify/dist/ReactToastify.css";
import useCars from "../../hooks/cars/useCars";
import { Car, CompleteCarInfo } from "../../interfaces/interfaceCar";
import { errorModal } from "../../utils/modals";
import CarCard from "../Car/Car";
import Button from "../Button/Button";
import saveInLocalStorage from "../../utils/saveInLocalStorage";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const initialCarState: Car = {
    brand: "",
    enrollmentDate: "",
    fuel: "",
    model: "",
    user: "",
  };

  const { getModelsCars } = useCars();

  const [infoCarUser, setInfoCarUser] = useState(initialCarState);
  const [cars, setCars] = useState([] as CompleteCarInfo[]);

  const onChangeInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoCarUser({
      ...infoCarUser,
      [event.target.id]: event.target.value,
    });
  };

  const onSelectInfo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInfoCarUser({ ...infoCarUser, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const onSubmitPartialInfo = async () => {
      const hasEmptyFields =
        infoCarUser.user.length < 1 ||
        infoCarUser.brand.length < 1 ||
        infoCarUser.enrollmentDate.length < 1 ||
        infoCarUser.fuel.length < 1;

      if (hasEmptyFields) return;

      const carsInfoComplete = await getModelsCars(
        infoCarUser.brand,
        infoCarUser.enrollmentDate,
        infoCarUser.fuel
      );

      if (carsInfoComplete.length < 1) {
        errorModal("Oops, there are not models :( ");
      } else {
        setCars(carsInfoComplete);
      }
    };

    onSubmitPartialInfo();
  }, [getModelsCars, infoCarUser]);

  return (
    <>
      <FormStyled>
        <form
          className="form"
          noValidate
          onSubmit={() => {}}
          aria-label="form to check car model"
        >
          <div className="form__group">
            <label htmlFor="user" className="choose__group">
              Write your name:
              <input
                id="user"
                className="options__group"
                type="text"
                placeholder="Enter your name :)"
                value={infoCarUser.user}
                onChange={onChangeInfo}
                autoComplete="off"
              />
            </label>
          </div>
          <div className="form__group">
            <label className="choose__group" htmlFor="brand">
              Choose the car brand:
              <select
                className="options__group"
                id="brand"
                onChange={onSelectInfo}
              >
                {carBrands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form__group">
            <label htmlFor="enrollmentDate" className="choose__group">
              Here is the first registration date:
              <input
                id="enrollmentDate"
                className="options__group"
                type="date"
                placeholder="enrollmentDate"
                value={infoCarUser.enrollmentDate}
                onChange={onChangeInfo}
                autoComplete="off"
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="fuel" className="choose__group">
              Fuel type:
              <select
                id="fuel"
                className="options__group"
                onChange={onSelectInfo}
              >
                {cardFuel.map((fuel) => (
                  <option key={fuel}>{fuel}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form__group">
            <label htmlFor="model" className="choose__group">
              Car model:
              <select
                id="model"
                className="options__group"
                onChange={onSelectInfo}
              >
                {cars.map((car, index) => {
                  return <option key={index}>{car.model}</option>;
                })}
              </select>
            </label>
          </div>
        </form>
        <div className="card__group">
          {infoCarUser.model && (
            <>
              <CarCard
                car={
                  cars.find(
                    (car) => car.model === infoCarUser.model
                  ) as CompleteCarInfo
                }
              />
              <Button
                text="Save"
                type="button"
                action={() =>
                  cars.find((car) =>
                    car.model === infoCarUser.model
                      ? saveInLocalStorage(car)
                      : ""
                  )
                }
              />
            </>
          )}
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
