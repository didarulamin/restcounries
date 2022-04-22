import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Home from "../components/Home/Home";
import { Route, MemoryRouter, Routes } from "react-router-dom";

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

test("Initially button is disabled", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </MemoryRouter>
  );
  const button = screen.getByTestId("search-button");
  expect(button).toBeDisabled();
});

test("Initially input is undefined", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </MemoryRouter>
  );
  const input: HTMLInputElement = screen.getByTestId("content-input");
  expect(input.value).toBe("");
});

test("After input of text button should be enabled", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </MemoryRouter>
  );

  const contentInput: HTMLInputElement = screen.getByTestId("content-input");
  fireEvent.change(contentInput, {
    target: { value: "new content" },
  });
  const button = screen.getByTestId("search-button");

  expect(contentInput.value).toBe("new content");
  expect(button).toBeEnabled();
});
