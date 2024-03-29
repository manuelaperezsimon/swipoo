import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { expectedListOfCars } from "../../test-utils/cars";
import Form from "./Form";

jest.mock("react-toastify");
let mockGetModels = jest.fn();

jest.mock("../../hooks/cars/useCars", () => {
  return () => ({
    getModelsCars: mockGetModels,
  });
});

describe("Given a Form component", () => {
  beforeEach(() => mockGetModels.mockResolvedValue([]));

  describe("When it's instantiated", () => {
    test("Then it should show three select inputs and a input", () => {
      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );

      const labelOfUsername = "Write your name:";
      const labelOfBrandCar = "Choose the car brand:";
      const labelOfRegistrationDate = "Here is the first registration date:";
      const labelOfFuelType = "Fuel type:";
      const labelOfModel = "Car model:";

      const elementsOfForm = [
        screen.getByLabelText(labelOfUsername),
        screen.getByLabelText(labelOfBrandCar),
        screen.getByLabelText(labelOfRegistrationDate),
        screen.getByLabelText(labelOfFuelType),
        screen.getByLabelText(labelOfModel),
      ];

      elementsOfForm.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe("When the user type in the fields of the form", () => {
    test("Then it should take the value of user types", async () => {
      const usernameTyped = "Margarita";
      const brandTyped = "Abarth";
      const enrollmentDateTyped = "2020-03-02";
      const fuelTyped = "D";

      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );

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

  describe("When the user filled partial information", () => {
    test("Then it should call the error modal if there are no cars", async () => {
      const usernameTyped = "Margarita";
      const brandTyped = "Alfa Romeo";
      const enrollmentDateTyped = "2020-03-02";
      const fuelTyped = "G";

      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );

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

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          "Oops, there are not models :( ",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });

  describe("When the user filled partial information and return a list of cars", () => {
    test("Then the models field must be filled with options", async () => {
      mockGetModels.mockResolvedValue(expectedListOfCars.cars);

      const usernameTyped = "Margarita";
      const brandTyped = "Alfa Romeo";
      const enrollmentDateTyped = "2020-03-02";
      const fuelTyped = "G";
      const labelOfModel = "Car model:";
      const modelTyped = "4C 1.7 Tbi TCT / 1.75 6V 240";

      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );

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

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await userEvent.type(inputOfUsername, usernameTyped);
        await userEvent.type(inputOfEnrollmentDate, enrollmentDateTyped);
        await userEvent.selectOptions(selectOfBrandCar, brandTyped);
        await userEvent.selectOptions(selectOfFuel, fuelTyped);
      });
      const selectOfModel = screen.getByLabelText(labelOfModel);

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await userEvent.selectOptions(selectOfModel, modelTyped);
      });

      const headerTable = "Vehicle data";

      const carTable = screen.getByText(headerTable);

      await waitFor(() => {
        expect(carTable).toBeInTheDocument();
      });
    });
  });

  describe("When the user clicked on the button", () => {
    test("Then it should call the succes modal", async () => {
      mockGetModels.mockResolvedValue(expectedListOfCars.cars);

      const usernameTyped = "Margarita";
      const brandTyped = "Alfa Romeo";
      const enrollmentDateTyped = "2020-03-02";
      const fuelTyped = "G";
      const labelOfModel = "Car model:";
      const modelTyped = "4C 1.7 Tbi TCT / 1.75 6V 240";

      render(
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      );

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

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await userEvent.type(inputOfUsername, usernameTyped);
        await userEvent.type(inputOfEnrollmentDate, enrollmentDateTyped);
        await userEvent.selectOptions(selectOfBrandCar, brandTyped);
        await userEvent.selectOptions(selectOfFuel, fuelTyped);
      });
      const selectOfModel = screen.getByLabelText(labelOfModel);

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await userEvent.selectOptions(selectOfModel, modelTyped);
      });

      const buttonText = "Save";
      const button = screen.getByRole("button", { name: buttonText });

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await userEvent.click(button);
      });

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(
          "Great! The car was saved :)",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });
});
