import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("after search button click should navigate to Countries page and display country card and then weather info", async () => {
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
  await waitFor(() => {
    expect(screen.getByText("Dhaka")).toBeInTheDocument();
  });

  fireEvent.click(screen.getByTestId("capital-weather-button"));
  await waitFor(() => {
    expect(screen.getByText("Weather of Dhaka")).toBeInTheDocument();
  });
});
