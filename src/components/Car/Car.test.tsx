import { render, screen } from "@testing-library/react";
import { fakeCar } from "../../test-utils/cars";
import CarCard from "./Car";

describe("Given a Car component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a table with information of the car selected", () => {
      render(<CarCard car={fakeCar} />);

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
});
