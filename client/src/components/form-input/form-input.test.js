import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormInput from "./form-input.component";

describe("BASE_COMPONENT FormInput", () => {
  test("applies original class to label", () => {
    render(<FormInput label="placeholder-email" />);

    const labelEl = screen.getByTestId("label");

    expect(labelEl.className).toBe(" form-input-label");
  });

  test("applies 'shrink' class to label", () => {
    render(<FormInput label="placeholder-email" value="placeholder-value" />);
    const labelEl = screen.getByTestId("label");

    expect(labelEl.className).toBe("shrink form-input-label");
  });
});
