import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignInForm } from "./container";
import { useFormFields } from "../../../libs/useFormFields";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
  }

  return (
    <div>
      <SignInForm
        fields={fields}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleFieldChange={handleFieldChange}
      />
    </div>
  );
}

export default SignIn;
