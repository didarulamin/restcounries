import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("Initially button is disabled", () => {
  render(<App />);
  const button = screen.getByTestId("btn-search");
  expect(button).toBeDisabled();
});

test("Initially input is undefined", () => {
  render(<App />);
  const input = screen.getByTestId("content-input");
  expect(input.value).toBe("");
});

test("After input of text button should be enabled", () => {
  render(<App />);

  const contentInput = screen.getByTestId("content-input");
  fireEvent.change(contentInput, {
    target: { value: "new content" },
  });
  const button = screen.getByTestId("btn-search");

  expect(contentInput.value).toBe("new content");
  expect(button).toBeEnabled();
});

test("after search button click should navigate to Countries page", () => {
  render(<App />);

  const contentInput = screen.getByTestId("content-input");
  fireEvent.change(contentInput, {
    target: { value: "Bangladesh" },
  });
  const button = screen.getByTestId("btn-search");
  fireEvent.click(button);

  expect(contentInput.value).toBe("Bangladesh");
  expect(button).toBeEnabled();
  fireEvent.click(button);
  expect(screen.getByTestId("header")).toBeInTheDocument("List of countries");
});
