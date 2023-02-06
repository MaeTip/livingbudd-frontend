import { render } from "@testing-library/react";
import ReactIcon from "./index";
import { BiMap } from "react-icons/bi";
import React from "react";
import { brandingColor } from "constants/color";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: jest.fn((key) => key) }),
}));

describe("#ReactIcon", () => {
  test("should render the icon correctly", () => {
    const { container } = render(<ReactIcon icon={<BiMap />} />);

    expect(container.querySelector(".icon")).not.toBeNull();
    expect(container.querySelector("svg")).not.toBeNull();
  });

  test("should render the icon with text correctly", () => {
    const message = "this is icon";
    const { findByText } = render(
      <ReactIcon icon={<BiMap />} text={message} />
    );

    expect(findByText(message)).not.toBeNull();
  });

  test("should render class of the icon component correctly", () => {
    const className = "test-class-name";
    const { container } = render(
      <ReactIcon icon={<BiMap />} className={className} />
    );

    expect(container.firstChild).toHaveClass(className);
  });

  test("should render bolder of the component successfully", () => {
    const { container } = render(<ReactIcon icon={<BiMap />} border />);

    expect(container.querySelector(".icon")).toHaveStyle(
      `border: 1px solid ${brandingColor.light.orange.primary}`
    );
  });
});
