import { act, renderHook } from "@testing-library/react";
import useCars from "./useCars";
import axios from "axios";

import { toast } from "react-toastify";

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
jest.mock("react-toastify");

describe("Given a useCars hook", () => {
  const {
    result: {
      current: { getModelsCars },
    },
  } = renderHook(useCars);

  describe("When the getModelsCars it's invoked and the get wasn't ok", () => {
    test("Then it should call the errorModal", async () => {
      mockedAxios.get.mockRejectedValue([]);

      await act(async () => {
        await getModelsCars("", "", "");
      });

      expect(toast.error).toHaveBeenCalledWith(
        "Oops, something went wrong. Try again :(",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });
  });
});
