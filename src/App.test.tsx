/* import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(() => {
  cleanup();
});

test("Initially button is disabled", () => {
  render(<App />);
  const button = screen.getByTestId("search-button");
  expect(button).toBeDisabled();
});

test("Initially input is undefined", () => {
  render(<App />);
  const input: HTMLInputElement = screen.getByTestId("content-input");
  expect(input.value).toBe("");
});

test("After input of text button should be enabled", () => {
  render(<App />);

  const contentInput: HTMLInputElement = screen.getByTestId("content-input");
  fireEvent.change(contentInput, {
    target: { value: "new content" },
  });
  const button = screen.getByTestId("search-button");

  expect(contentInput.value).toBe("new content");
  expect(button).toBeEnabled();
});

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
  expect(screen.getByText("Weather of Dhaka")).toBeInTheDocument();
});
 */
