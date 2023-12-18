import { render, screen } from "@testing-library/react";
import Input from "../Input";
import "@testing-library/jest-dom";
import { IconTypes } from "@base/components/button/Button.types";

describe("Heading", () => {
  it("should render an input with a label", () => {
    render(<Input label="input label" value="input value" name="input name" />);

    const input = screen.getByText("input label");

    expect(input).toBeInTheDocument();
  });

  it("should render an error message when an error occurs", () => {
    render(
      <Input
        label="input label"
        value="input value"
        name="input name"
        error="error message"
        showError
      />,
    );

    const error = screen.getByText("error message");

    expect(error).toBeInTheDocument();
  });

  it("should render an icon", () => {
    render(
      <Input
        label="input label"
        value="input value"
        name="input name"
        showIcon
        iconProps={{ icon: IconTypes.Search }}
      />,
    );

    const icon = screen.getByRole("icon");

    expect(icon).toBeInTheDocument();
  });
});
