import vest, { test, enforce } from "vest";
import { isEmail } from "validator";

enforce.extend({ isEmail });

export default vest.create((data = {}, currentField) => {
  vest.only(currentField);

  test("from_name", "Please Enter your Name", () => {
    enforce(data.from_name).isNotEmpty();
  });

  test("from_name", "Name is too short", () => {
    enforce(data.from_name).longerThanOrEquals(3);
  });

  test("from_email", "Email Address is not valid", () => {
    enforce(data.from_email).isEmail();
  });

  test("message", "Please Enter your Message", () => {
    enforce(data.message).isNotEmpty();
  });

  test("message", "Message is too short", () => {
    enforce(data.message).longerThanOrEquals(15);
  });
});
