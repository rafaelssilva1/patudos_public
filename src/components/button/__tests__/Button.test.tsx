import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render a button with text", () => {
    render(<Button>Button text</Button>);

    const btn = screen.getByText("Button text");

    expect(btn).toBeInTheDocument();
  });

  it("should run onClick function", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>Button text</Button>);

    const fn = screen.getByText("Button text");

    fireEvent.click(fn);

    expect(mockFn).toHaveBeenCalled();
  });
});
