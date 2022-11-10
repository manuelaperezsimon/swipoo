import { render, screen, waitFor } from "@testing-library/react";
import { expectedListOfCars } from "../../test-utils/cars";
import mockLocalStorage from "../../test-utils/mockLocalStorage";
import saveInLocalStorage from "../../utils/saveInLocalStorage";
import CarsList from "../CarsList/CarsList";

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

describe("Given a CarsList component", () => {
  describe("When it's instantiated", () => {
    test.only("Then it should show a list of two cars", async () => {
      saveInLocalStorage(expectedListOfCars.cars[0]);
      saveInLocalStorage(expectedListOfCars.cars[1]);
      mockLocalStorage.getItem("carsCreated");
      render(<CarsList />);

      const brandsOfCars = screen.getAllByText(expectedListOfCars.cars[0].fuel);

      expect(brandsOfCars).toHaveLength(2);
    });
  });
});
