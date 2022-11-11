import { render, screen } from "@testing-library/react";
import MarketValue from "./MarketValue";
import { fakeCar } from "../../test-utils/cars";

describe("Given a MarketValue componente", () => {
  describe("When it's instantiated", () => {
    test.only("Then it should show a table with the vehicle's depreciation", () => {
      render(<MarketValue car={fakeCar} />);

      const headOfTable = "Market Value";
      const valueOfHaciendaText = "Value according to Hacienda";
      const valueOfHacienda = `${fakeCar.value} €`;
      const depreciationText = "90% of market value";

      const elementsOfTable = [
        screen.getByText(headOfTable),
        screen.getByText(valueOfHaciendaText),
        screen.getByText(valueOfHacienda),
        screen.getByText(depreciationText),
      ];

      elementsOfTable.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
