import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should be able render App component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Convert Bin To Dec/i);
    expect(linkElement).toBeInTheDocument();
  });
});
