import { CompleteCarInfo } from "../interfaces/interfaceCar";

const saveInLocalStorage = (completeCarInfo: CompleteCarInfo) => {
  const hasCarsInLocalStorage = localStorage.getItem("carsCreated");
  let carsCreated;

  if (hasCarsInLocalStorage) {
    carsCreated = JSON.parse(hasCarsInLocalStorage);
  } else {
    carsCreated = [];
  }
  carsCreated.push(completeCarInfo);
  localStorage.setItem("carsCreated", JSON.stringify(carsCreated));
};

export default saveInLocalStorage;
