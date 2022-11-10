import { CompleteCarInfo } from "../interfaces/interfaceCar";
import { successModal } from "./modals";

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
  successModal("Great! The car was saved :)");
};

export default saveInLocalStorage;
