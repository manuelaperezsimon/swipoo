import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import NotFound from "./NotFound";

describe("Given a Not Found component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show an icon and a text and a button", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      );

      const textHeading = "There's nothing around here!";

      const notFoundElements = [
        screen.getByTestId("icon-emoji"),
        screen.getByRole("heading", { name: textHeading }),
        screen.getByRole("link"),
      ];

      notFoundElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
