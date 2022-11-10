import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

describe("Given the NotFound page", () => {
  describe("When it's instantiated", () => {
    test.only("Then should show 'NotFound' component", () => {
      const textNotFound = "There's nothing around here!";
      const textLink = "Go to check models!";

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const expectedText = screen.getByText(textNotFound);
      const expectedTextLink = screen.getByText(textLink);

      expect(expectedText).toBeInTheDocument();
      expect(expectedTextLink).toBeInTheDocument();
    });
  });
});
