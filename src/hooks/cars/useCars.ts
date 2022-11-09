import axios from "axios";
import { useCallback } from "react";
import { errorModal } from "../../utils/modals";

const apiURL = process.env.REACT_APP_API_URL;

const useCars = () => {
  const getModelsCars = useCallback(
    async (
      brand: string,
      enrollmentDate: string,
      fuel: string
    ): Promise<void> => {
      const modelsCarsURL = `${apiURL}check-car-models`;

      try {
        const { data } = await axios.get(
          `${modelsCarsURL}?brand=${brand}&enrollmentDate=${enrollmentDate}&fuel=${fuel}`
        );

        return data;
      } catch (error) {
        errorModal("Oops, something went wrong. Try again :(");
      }
    },
    []
  );

  return {
    getModelsCars,
  };
};

export default useCars;
