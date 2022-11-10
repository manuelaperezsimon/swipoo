import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FormPage from "./FormPage";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show the Form component and a heading", () => {
      render(
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      );

      const heading = "Check the car model";
      const labelOfUsername = "Write your username:";
      const labelOfBrandCar = "Choose the car brand:";
      const labelOfRegistrationDate = "Here is the first registration date:";
      const labelOfFuelType = "Fuel type:";

      const elementsOfForm = [
        screen.getByRole("heading", { name: heading }),
        screen.getByLabelText(labelOfUsername),
        screen.getByLabelText(labelOfBrandCar),
        screen.getByLabelText(labelOfRegistrationDate),
        screen.getByLabelText(labelOfFuelType),
      ];

      elementsOfForm.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
