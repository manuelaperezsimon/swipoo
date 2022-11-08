import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a button with a 'Save' as text", () => {
      render(<Button text="Save" type="submit" />);

      const buttonText = "Save";

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
