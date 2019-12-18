import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { SignUpForm } from "./container";
import { useFormFields } from "../../../libs/useFormFields";
import * as authThunk from "../store/thunks";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    firstname: "",
    lastname: "",
    email: "",
    companyName: "",
    terms: ""
  });

  const dispatch = useDispatch();

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.companyName !== "" &&
      fields.firstname !== "" &&
      fields.lastname !== ""
    );
  }

  const makeCall = useCallback(() => dispatch(authThunk.signupThunk(fields)), [
    dispatch,
    fields
  ]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log(fields);
    makeCall();
  }

  return (
    <div>
      <SignUpForm
        fields={fields}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        validateForm={validateForm}
        handleFieldChange={handleFieldChange}
      />
    </div>
  );
}

export default SignUp;
