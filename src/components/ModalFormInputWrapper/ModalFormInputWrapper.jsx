/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ModalFormInput } from "../ModalFormInput";
import "./style.css";

export const ModalFormInputWrapper = ({
  className,
  modalFormInputText = "kevinsmith@company1.com",
  modalFormInputDivClassName,
  modalFormInputText1 = "Company E-mail",
  modalFormInputSizeExtraLargeClassName,
  modalFormInputGroupClassName,
}) => {
  return (
    <div className={`modal-form-input-wrapper ${className}`}>
      <ModalFormInput
        className={modalFormInputSizeExtraLargeClassName}
        divClassName={modalFormInputDivClassName}
        groupClassName={modalFormInputGroupClassName}
        size="extra-large"
        status="active"
        text={modalFormInputText}
        text1={modalFormInputText1}
      />
    </div>
  );
};

ModalFormInputWrapper.propTypes = {
  modalFormInputText: PropTypes.string,
  modalFormInputText1: PropTypes.string,
};
