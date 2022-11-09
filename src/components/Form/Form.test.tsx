import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show three select inputs and a input", () => {
      render(<Form />);

      const labelOfUsername = "Write your username:";
      const labelOfBrandCar = "Choose the car brand:";
      const labelOfRegistrationDate = "Here is the first registration date:";
      const labelOfFuelType = "Fuel type:";

      const elementsOfForm = [
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

  describe("When the user type in the fields of the form", () => {
    test("Then it should take the value of user types", async () => {
      const usernameTyped = "Margarita";
      const brandTyped = "Alfa Romeo";
      const enrollmentDateTyped = "2020-03-02";
      const fuelTyped = "G";

      render(<Form />);

      const placeholderInputUsername = "Enter your name :)";
      const placeholderInputEnrollmentDate = "enrollmentDate";
      const labelOfBrandCar = "Choose the car brand:";
      const labelOfFuelType = "Fuel type:";

      const inputOfUsername = screen.getByPlaceholderText(
        placeholderInputUsername
      ) as HTMLInputElement;
      const inputOfEnrollmentDate = screen.getByPlaceholderText(
        placeholderInputEnrollmentDate
      ) as HTMLInputElement;
      const selectOfBrandCar = screen.getByLabelText(labelOfBrandCar);
      const selectOfFuel = screen.getByLabelText(labelOfFuelType);

      await userEvent.type(inputOfUsername, usernameTyped);
      await userEvent.type(inputOfEnrollmentDate, enrollmentDateTyped);
      await userEvent.selectOptions(selectOfBrandCar, brandTyped);
      await userEvent.selectOptions(selectOfFuel, fuelTyped);

      expect(inputOfEnrollmentDate).toHaveValue(enrollmentDateTyped);
      expect(selectOfBrandCar).toHaveValue(brandTyped);
      expect(selectOfFuel).toHaveValue(fuelTyped);
    });
  });
});
