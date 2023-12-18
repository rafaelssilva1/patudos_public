import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NextIntlProvider } from "next-intl";
import messages from "@base/messages/pt.json";
import Footer from "../Footer";

const URLS = [
  "Voluntariado",
  "Doar",
  "Termos e Política de Privacidade",
  "Transferência Bancária",
  "Mbway",
  "Paypal",
];

describe("Footer", () => {
  it("should render the footer section", () => {
    const locale = "pt";

    render(
      <NextIntlProvider messages={messages} locale={locale}>
        <Footer />
      </NextIntlProvider>,
    );

    const footer = screen.getByRole("footer");
    const logo = screen.getByRole("logo");
    expect(footer).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/pt/");

    URLS.forEach((el) => {
      const text = screen.getByText(el, { exact: false });
      expect(text).toBeInTheDocument();
    });
  });
});
