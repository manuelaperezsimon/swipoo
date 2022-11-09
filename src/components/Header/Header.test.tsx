import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show image as logo", () => {
      render(<Header />);

      const altText = "Swipoo logo";
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
