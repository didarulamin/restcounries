import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

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
  expect(screen.getByText("List of countries")).toBeInTheDocument();
});
