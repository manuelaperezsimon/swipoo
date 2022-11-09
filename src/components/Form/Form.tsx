import { useState } from "react";
import Car from "../../interfaces/interfaceCar";
import carBrands from "../../utils/brands";
import cardFuel from "../../utils/fuelTypes";

const Form = (): JSX.Element => {
  const initialCarState: Car = {
    brand: "",
    enrollmentDate: "",
    fuel: "",
    model: "",
    user: "",
  };

  const [infoCarUser, setInfoCarUser] = useState(initialCarState);

  const onChangeInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfoCarUser({ ...infoCarUser, [event.target.id]: event.target.value });
  };

  const onSelectInfo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInfoCarUser({ ...infoCarUser, [event.target.id]: event.target.value });
  };

  return (
    <form
      className="form"
      noValidate
      onSubmit={() => {}}
      aria-label="form to check car model"
    >
      <div className="form__group">
        <label htmlFor="username" className="choose__group">
          Write your username:
          <input
            id="username"
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
          <select className="options__group" id="brand" onChange={onSelectInfo}>
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
          <select id="fuel" className="options__group" onChange={onSelectInfo}>
            {cardFuel.map((fuel) => (
              <option key={fuel}>{fuel}</option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
};

export default Form;
