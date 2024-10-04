import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MudraPasswordField from "./mudraPasswordField";
import userEvent from "@testing-library/user-event";

it("test:1 mudra password field enable, password", async () => {
  const onChangeCallbackSpy = jest.fn();
  render(
    <MudraPasswordField
      value="Initial Value"
      onChangeCallback={onChangeCallbackSpy}
      disabled={false}
      label="Password"
      placeholder="Please type password"
    />
  );

  const passwordField = screen.getByTestId("mudra_passwordField");
  // test:1 for classes
  expect(passwordField.className.includes("mudra-password-field")).toBe(true);
  //test :1 for label
  expect(passwordField.textContent?.includes("Password")).toBe(true);
  const inputField = screen.getByTestId(
    "mudra_passwordField_input"
  ) as HTMLInputElement;
  // Test :1 for input fields value, placeholder and others
  expect(inputField.value).toBe("Initial Value");
  expect(inputField.placeholder).toBe("Please type password");
  // Test:1 for input field type if it is password or text
  expect(inputField.type).toBe("password");
  // Test:1 for input fields icon click and change for type = text from password
  const icon = screen.getByTestId("mudra_passwordField_icon");
  // clicked icon to change type to text
  userEvent.click(icon);
  expect(inputField.type).toBe("text");
  // Click again to change it to password again
  const iconTwo = screen.getByTestId("mudra_passwordField_icon");
  userEvent.click(iconTwo);
  expect(inputField.type).toBe("password");
  // Test:1 for input onchange
  fireEvent.change(inputField, { target: { value: "new value" } });
  expect(onChangeCallbackSpy).toBeCalled();
  inputField.value = "new value";
  expect(inputField.value).toBe("new value");
});

it("test:2 mudra password field enable, password with error", async () => {
  render(
    <MudraPasswordField
      disabled={false}
      label="Password"
      placeholder="Please type password"
      defaultValue="aaa"
      errorMessage="Password should have at least 8 character."
    />
  );

  const passwordField = screen.getByTestId("mudra_passwordField");

  // test:2 for classes
  expect(passwordField.className.includes("mudra-password-field")).toBe(true);

  //test :2 for label
  expect(passwordField.textContent?.includes("Password")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_passwordField_input"
  ) as HTMLInputElement;

  // Test :2 for input fields value, placeholder and others
  expect(inputField.value).toBe("aaa");

  expect(inputField.placeholder).toBe("Please type password");

  // Test2: for error message
  const error = screen.getByTestId("mudra_passwordField_error");
  expect(error.textContent).toBe("Password should have at least 8 character.");
});

it("test:3 mudra password field disabled, password, readonly=false", async () => {
  render(
    <MudraPasswordField
      disabled={true}
      label="Password"
      readOnly={false}
      defaultValue="John Dee"
      placeholder="Enter your password"
    />
  );

  const passwordField = screen.getByTestId("mudra_passwordField");

  // test:3 for classes
  expect(passwordField.className.includes("mudra-password-field")).toBe(true);
  expect(passwordField.className.includes("disabled")).toBe(true);

  //test :3 for label
  expect(passwordField.textContent?.includes("Password")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_passwordField_input"
  ) as HTMLInputElement;

  // Test :3 for input fields value, placeholder and others
  expect(inputField.value).toBe("John Dee");

  expect(inputField.placeholder).toBe("Enter your password");

  // Test:3 checking if onchange is working while input disable
  await userEvent.type(inputField, "new value");
  expect(inputField.value).toBe("John Dee");
});

it("test:4 mudra password field readonly, password", async () => {
  render(
    <MudraPasswordField
      label="Password"
      defaultValue="**********9099"
      placeholder="Enter your password"
      readOnly={true}
    />
  );

  const passwordField = screen.getByTestId("mudra_passwordField");

  // test:4 for classes
  expect(passwordField.className.includes("mudra-password-field")).toBe(true);

  //test :4 for label
  expect(passwordField.textContent?.includes("Password")).toBe(true);

  const inputField = screen.getByTestId(
    "mudra_passwordField_input"
  ) as HTMLInputElement;

  // Test :4 for input fields value, placeholder and others
  expect(inputField.value).toBe("**********9099");

  expect(inputField.placeholder).toBe("Enter your password");

  // Test:4 checking if onchange is working while input disable
  await userEvent.type(inputField, "new value");
  expect(inputField.value).toBe("**********9099");
});

it("test:5 mudra password field enable, password", async () => {
  render(
    <MudraPasswordField
      className="test-class"
      defaultValue="Initial value"
      disabled={false}
      label="Password"
      placeholder="Please type password"
    />
  );

  const passwordField = screen.getByTestId("mudra_passwordField");
  // test:5 for classes
  expect(passwordField.className.includes("mudra-password-field")).toBe(true);
  expect(passwordField.className.includes("test-class")).toBe(true);

  //test :5 for label
  expect(passwordField.textContent?.includes("Password")).toBe(true);
  const inputField = screen.getByTestId(
    "mudra_passwordField_input"
  ) as HTMLInputElement;
  // Test :5 for input fields value, placeholder and others
  expect(inputField.value).toBe("Initial value");
  expect(inputField.placeholder).toBe("Please type password");
  // Test:5 for input field type if it is password or text
  expect(inputField.type).toBe("password");
  // Test:5 for input fields icon click and change for type = text from password
  const icon = screen.getByTestId("mudra_passwordField_icon");
  // clicked icon to change type to text
  userEvent.click(icon);
  expect(inputField.type).toBe("text");
  // Click again to change it to password again
  const iconTwo = screen.getByTestId("mudra_passwordField_icon");
  userEvent.click(iconTwo);
  expect(inputField.type).toBe("password");
  // Test:5 for input onchange
  await userEvent.type(inputField, " new value");
  expect(inputField.value).toBe("Initial value new value");
});
