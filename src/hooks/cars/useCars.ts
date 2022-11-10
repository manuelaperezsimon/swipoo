import axios from "axios";
import { useCallback } from "react";
import { CompleteCarInfo } from "../../interfaces/interfaceCar";
import { errorModal } from "../../utils/modals";

const apiURL = process.env.REACT_APP_API_URL;

const useCars = () => {
  const getModelsCars = useCallback(
    async (
      brand: string,
      enrollmentDate: string,
      fuel: string
    ): Promise<CompleteCarInfo[]> => {
      const modelsCarsURL = `${apiURL}check-car-models`;

      try {
        const { data } = await axios.get(
          `${modelsCarsURL}?brand=${brand}&enrollmentDate=${enrollmentDate}&fuel=${fuel}`
        );

        return data.cars;
      } catch (error) {
        errorModal("Oops, something went wrong. Try again :(");
        return [];
      }
    },
    []
  );

  return {
    getModelsCars,
  };
};

export default useCars;
