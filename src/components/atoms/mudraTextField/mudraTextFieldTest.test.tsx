import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraTextField from "./mudraTextField";
import userEvent from "@testing-library/user-event";

it("test:1 mudra text field enable, required, email", async () => {
  render(
    <MudraTextField
      className="test-class"
      disabled={false}
      label="Email"
      required={true}
      readOnly={false}
      value="Initial Value"
      defaultValue="johnstorybook.com"
      placeholder="Enter your email"
      errorMessage="Invalid email format, should be abc@xyz.com"
    />
  );

  const textField = screen.getByTestId("mudra_textField");

  // test:1 for classes
  expect(textField.className.includes("required")).toBe(true);
  expect(textField.className.includes("error")).toBe(true);
  expect(textField.className.includes("test-class")).toBe(true);

  //test :1 for label
  expect(textField.textContent?.includes("Email")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_textField_input"
  ) as HTMLInputElement;

  // Test :1 for input fields value, placeholder and others
  expect(inputField.value).toBe("johnstorybook.com");

  expect(inputField.placeholder).toBe("Enter your email");

  // Test:1 for input onchange
  fireEvent.change(inputField, { target: { value: "new value" } });
  expect(inputField.value).toBe("new value");

  // Test1: for error message
  const error = screen.getByTestId("mudra_textField_error");
  expect(error.textContent).toBe("Invalid email format, should be abc@xyz.com");
});

it("test:2 mudra text field disable", async () => {
  render(
    <MudraTextField
      disabled={true}
      label="Name"
      readOnly={false}
      placeholder="Enter your name"
      errorMessage="Not valid"
      defaultValue="John Dee"
    />
  );

  const textField = screen.getByTestId("mudra_textField");

  // test:2 for classes
  expect(textField.className.includes("disabled")).toBe(true);
  expect(textField.className.includes("error")).toBe(true);

  //test :2 for label
  expect(textField.textContent?.includes("Name")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_textField_input"
  ) as HTMLInputElement;

  // Test :2 for input fields value, placeholder and others
  expect(inputField.value).toBe("John Dee");
  expect(inputField.placeholder).toBe("Enter your name");

  // Test:2 for input onchange for disable button
  await userEvent.type(inputField, "new value");
  expect(inputField.value).toBe("John Dee");

  // Test2: for error message
  const error = screen.getByTestId("mudra_textField_error");
  expect(error.textContent).toBe("Not valid");
});

it("test:3 mudra text field readonly", async () => {
  render(
    <MudraTextField
      label="Aadhar"
      required={true}
      readOnly={true}
      defaultValue="**********9099"
      placeholder="Enter your Aadhar number"
    />
  );

  const textField = screen.getByTestId("mudra_textField");

  // test:3 for classes
  expect(textField.className.includes("required")).toBe(true);
  expect(textField.className.includes("read-only")).toBe(true);

  //test :3 for label
  expect(textField.textContent?.includes("Aadhar")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_textField_input"
  ) as HTMLInputElement;

  // Test :3 for input fields value, placeholder and others
  expect(inputField.value).toBe("**********9099");
  expect(inputField.placeholder).toBe("Enter your Aadhar number");

  // Test:3 for input onchange for disable button
  await userEvent.type(inputField, "new value");
  expect(inputField.value).toBe("**********9099");
});

it("test:4 mudra text field enable, required, email", async () => {
  const onChangeSpy = jest.fn();
  render(
    <MudraTextField
      className="test-class"
      disabled={false}
      label="Email"
      required={true}
      readOnly={false}
      value="Initial Value"
      placeholder="Enter your email"
      errorMessage="Invalid email format, should be abc@xyz.com"
      onChangeCallback={onChangeSpy}
    />
  );

  const textField = screen.getByTestId("mudra_textField");

  // test:4 for classes
  expect(textField.className.includes("required")).toBe(true);
  expect(textField.className.includes("error")).toBe(true);
  expect(textField.className.includes("test-class")).toBe(true);

  //test :4 for label
  expect(textField.textContent?.includes("Email")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_textField_input"
  ) as HTMLInputElement;

  // Test :4 for input fields value, placeholder and others
  expect(inputField.value).toBe("Initial Value");

  expect(inputField.placeholder).toBe("Enter your email");

  // Test:4 for input onchange
  fireEvent.change(inputField, { target: { value: "new value" } });
  inputField.value = "new value";
  expect(inputField.value).toBe("new value");
  expect(onChangeSpy).toBeCalled();

  // Test:4 for error message
  const error = screen.getByTestId("mudra_textField_error");
  expect(error.textContent).toBe("Invalid email format, should be abc@xyz.com");
});
