import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import classNames from "vest/classNames";
import suite from "./validate";
import emailjs from 'emailjs-com';

export default function Form() {
  function sendEmail(e) {

    emailjs.sendForm('service_57kghoc', 'contact_form', e.target, 'user_5VciSNeLhEEnJu4adtrBt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
        
  const [formState, setFormState] = useState({});

  const result = suite.get();

  const runValidate = (name, value) => {
    suite(
      {
        ...formState,
        ...{ [name]: value }
      },
      name
    );
  };

  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
    runValidate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidate();
    if (!result.hasErrors()) {
      sendEmail(e);
      // setFormState({["from_name"]: "" });
      // setFormState({["from_email"]: "" });
      // setFormState({["message"]: "" });
      setFormState({"from_name": "" });
      setFormState({"from_email": "" });
      setFormState({"message": "" });
      alert("Thank you for your message. I will reply soon.")
    }
  };

  const cn = classNames(result, {
    warning: "warning",
    invalid: "invalid",
    valid: "valid"
  });

  return (
    <form
      onSubmit={handleSubmit}
      id="example-form"
      className="col-xs-10 col-lg-6"
      autoComplete="off"
    >
      <input
        autocomplete="false"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      />

      <h2>Contact Me</h2>
      <Input
        name="from_name"
        label="Name"
        value={formState.from_name}
        onChange={handleChange}
        errors={result.getErrors("from_name")}
        className={cn("from_name")}
      />
      <Input
        name="from_email"
        label="Email"
        value={formState.from_email}
        onChange={handleChange}
        errors={result.getErrors("from_email")}
        className={cn("from_email")}
      />
      <TextArea
        name="message"
        label="Message"
        rows="15" 
        value={formState.message}
        onChange={handleChange}
        errors={result.getErrors("message")}
        className={cn("message")}
      />
      <footer>
        <Button disabled={result.hasErrors()}>Submit</Button>
      </footer>
    </form>
  );
}
