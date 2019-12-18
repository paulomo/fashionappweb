import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { VerifyForm } from "./container";
import { useFormFields } from "../../../libs/useFormFields";
import * as authThunk from "../store/thunks";
import { MenuBar } from '../../../common/layout/main/components'

const VerifyBrand = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    companyReference: {
      firstName: "",
      lastName: "",
      position: "",
      email: "",
      phoneNumber: ""
    },
    photoIdentityCard: null,
    companyLetter: null,
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

  const fileSelectHandler = (event) => {
    console.log(event.target.files[0]);
    fields.photoIdentityCard = event.target.files[0];
    fields.companyLetter = event.target.files[1];
  }

  const makeCall = useCallback(() => dispatch(authThunk.signupThunk(fields)), [
    dispatch,
    fields
  ]);

  async function handleSubmit(event) {
    event.preventDefault();
    // setIsLoading(true);
    console.log(fields);
    // makeCall();
  }

  return (
    <div>
      <MenuBar />
      <VerifyForm
        fields={fields}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        validateForm={validateForm}
        handleFieldChange={handleFieldChange}
        fileSelectHandler={fileSelectHandler}
      />
    </div>
  );
}

export default VerifyBrand;
