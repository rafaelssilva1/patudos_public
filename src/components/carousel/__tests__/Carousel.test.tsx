import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Carousel from "../Carousel";
import "@testing-library/jest-dom";
import mockData from "../__fixtures__/mockData";

describe("Carousel", () => {
  it("should render a carousel with images", () => {
    render(<Carousel {...mockData} />);

    const carouselImg = screen.getByRole("img");
    const btnArrows = screen.getAllByRole("button");

    expect(carouselImg).toBeInTheDocument();
    btnArrows.forEach((el) => expect(el).toBeInTheDocument());
    expect(btnArrows).toHaveLength(2);
  });

  it("first image should have eager property if largest contentful prop is available", () => {
    render(<Carousel {...mockData} />);

    const carouselImg = screen.getByRole("img");

    expect(carouselImg).toBeInTheDocument();
    expect(carouselImg).toHaveAttribute("loading", "eager");
  });

  it("should change rendered images on button click", () => {
    render(<Carousel {...mockData} />);

    const btnArrows = screen.getAllByRole("button");

    fireEvent.click(btnArrows[1]);
    const carouselImg = screen.getByRole("img");
    expect(carouselImg).toHaveAttribute("loading", "lazy");
  });
});
