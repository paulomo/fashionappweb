import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ResetPasswordForm from "./container/ResetPasswordForm";
import { useFormFields } from "../../../libs/useFormFields";

function ResetPassword() {
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
      <ResetPasswordForm
        fields={fields}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleFieldChange={handleFieldChange}
      />
    </div>
  );
}

export default ResetPassword;
