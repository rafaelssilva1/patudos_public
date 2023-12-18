import { fireEvent, render, screen } from "@testing-library/react";
import PasswordInput from "../PasswordInput";
import "@testing-library/jest-dom";

describe("Heading", () => {
  it("should not display content when input is of type password", () => {
    render(
      <PasswordInput
        label="input label"
        value="input value"
        name="input name"
      />,
    );

    const password = screen.getByRole("input");

    expect(password).toHaveAttribute("type", "password");
  });

  it("should display text when icon is clicked", () => {
    render(
      <PasswordInput
        label="input label"
        value="input value"
        name="input name"
      />,
    );

    const input = screen.getByRole("input");
    const icon = screen.getByRole("icon");
    fireEvent.click(icon);

    expect(input).toHaveAttribute("type", "text");
  });
});
