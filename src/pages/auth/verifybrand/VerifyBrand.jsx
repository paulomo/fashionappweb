import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { VerifyForm } from "./container/VerifyForm";
import { useFormFields } from "../../../libs/useFormFields";
import * as authThunk from "../store/thunks";

function VerifyBrand() {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    companyReference: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    },
    photoIdentityCard: "",
    companyLetter: "",
    companyRegistrationCertificate: ""
  });

  const dispatch = useDispatch();

  function validateForm() {
    return (
      fields.companyReference.email.length > 0 &&
      fields.companyReference.firstName !== "" &&
      fields.companyReference.lastName !== "" &&
      fields.companyReference.phoneNumber !== "" &&
      fields.photoIdentityCard !== "" &&
      fields.companyLetter !== "" &&
      fields.companyRegistrationCertificate !== ""
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
      <VerifyForm
        fields={fields}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        validateForm={validateForm}
        handleFieldChange={handleFieldChange}
      />
    </div>
  );
}

export default VerifyBrand;
