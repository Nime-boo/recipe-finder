import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Ensure ESLint recognizes Jest globals
/* eslint-env jest */

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
