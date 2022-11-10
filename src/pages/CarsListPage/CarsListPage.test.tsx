import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { fakeCar } from "../../test-utils/cars";
import mockLocalStorage from "../../test-utils/mockLocalStorage";
import saveInLocalStorage from "../../utils/saveInLocalStorage";
import CarsListPage from "./CarsListPage";

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CarsListPage", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a Header component", () => {
      render(
        <BrowserRouter>
          <CarsListPage />
        </BrowserRouter>
      );

      const altText = "Swipoo logo";
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a button with 'Come back to check models' as text", () => {
      const buttonText = "Come back to check models";
      render(
        <BrowserRouter>
          <CarsListPage />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a list of cars", () => {
      saveInLocalStorage(fakeCar);
      mockLocalStorage.getItem("carsCreated");
      render(
        <BrowserRouter>
          <CarsListPage />
        </BrowserRouter>
      );

      const headerTable = "Vehicle data";
      const brandRow = "Brand";
      const modelRow = "Model";
      const displacementRow = "Displacement";
      const cylindersRow = "Cylinders";
      const fuelRow = "Fuel";
      const powerKWRow = "Power (KW)";
      const fiscalStrenght = "Fiscal strenght";
      const powerCVRow = "Power (CV)";

      const tableElements = [
        screen.getByText(headerTable),
        screen.getByText(brandRow),
        screen.getByText(modelRow),
        screen.getByText(displacementRow),
        screen.getByText(cylindersRow),
        screen.getByText(fuelRow),
        screen.getByText(powerKWRow),
        screen.getByText(fiscalStrenght),
        screen.getByText(powerCVRow),
      ];

      tableElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe("When the user clicked in button", () => {
    test("Then it should navigate to 'Check car model'", async () => {
      const buttonText = "Come back to check models";
      render(
        <BrowserRouter>
          <CarsListPage />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
