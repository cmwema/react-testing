import { render, screen } from "@testing-library/react";
import { Hello } from "./hello";

test("Hi text is rendered", () => {
  render(<Hello />);
  const textComponent = screen.getByText(/hi/i);
  expect(textComponent).toBeInTheDocument();
});
