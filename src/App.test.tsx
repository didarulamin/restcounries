import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }

    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

test("after search button click should navigate to Countries page", async () => {
  render(<App />);

  const contentInput: HTMLInputElement = screen.getByTestId("content-input");
  fireEvent.change(contentInput, {
    target: { value: "Bangladesh" },
  });
  expect(contentInput.value).toBe("Bangladesh");
  const button = screen.getByTestId("search-button");
  expect(button).toBeEnabled();

  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
