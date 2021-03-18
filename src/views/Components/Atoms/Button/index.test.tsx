import React from "react";
import { render } from "@testing-library/react";
import Provider from "~views/Providers";

//  test components
import { StyledButton } from "./index";

const WrappedStyledButton = () => (
  <Provider>
    <StyledButton />
  </Provider>
);

describe("App", () => {
  test("renders App component", () => {
    const { container } = render(<WrappedStyledButton />);
    expect(container.innerHTML).toMatch("");
  });
});
