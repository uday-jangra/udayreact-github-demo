import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("App", () => {
  it("should render am image", () => {
    render(<App />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
