import { render, screen } from "@testing-library/react";
import Heading from "../Heading";
import "@testing-library/jest-dom";

describe("Heading", () => {
  it("should render a level 1 heading with text", () => {
    render(<Heading level="1">Heading text</Heading>);

    const heading = screen.getByRole("heading", {
      name: "Heading text",
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });
});
