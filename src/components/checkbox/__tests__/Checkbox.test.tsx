import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";
import "@testing-library/jest-dom";

const mockData = {
  id: "1",
  value: "Checkbox value",
  name: "Checkbox text",
};

describe("Button", () => {
  it("should render a button with text", () => {
    render(<Checkbox {...mockData} />);

    const checkbox = screen.getByText("Checkbox text");

    expect(checkbox).toBeInTheDocument();
  });

  it("should render a button with text", () => {
    const mockOnClick = jest.fn();

    render(<Checkbox onClick={mockOnClick} {...mockData} />);

    const checkbox = screen.getByText("Checkbox text");
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
