import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
  it("should be able render card with title", async () => {
    const title = "Wellici";
    render(<Card title={title} />);
    const card = await screen.findByText(title);

    expect(card).toBeInTheDocument();
  });
});
