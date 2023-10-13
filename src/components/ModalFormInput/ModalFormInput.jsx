/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TwentyFourPxPaslock } from "../../assets/icons/TwentyFourPxPaslock";
import "./style.css";

export const ModalFormInput = ({
  size,
  status,
  className,
  groupClassName,
  text = "Text",
  divClassName,
  text1 = "Placeholder",
}) => {
  return (
    <div className={`modal-form-input ${size} ${status} ${className}`}>
      {((size === "extra-large" && status === "desabled") ||
        (size === "large" && status === "desabled") ||
        (size === "medium" && status === "desabled") ||
        (size === "mini" && status === "active") ||
        (size === "mini" && status === "desabled") ||
        status === "enabled") && (
        <div className="placeholder-4">
          {status === "enabled" && ["extra-large", "large", "medium"].includes(size) && <>{text1}</>}

          {status === "enabled" && size === "mini" && <>#</>}

          {(status === "active" || (size === "mini" && status === "desabled")) && (
            <div className="overlap-group">
              <div className="text-wrapper">123</div>
            </div>
          )}

          {status === "desabled" && ["extra-large", "large", "medium"].includes(size) && (
            <>
              <TwentyFourPxPaslock
                className={`${size === "large" ? "class" : size === "extra-large" ? "class-2" : "class-3"}`}
              />
              <div className="text">{text}</div>
              <div className="placeholder">{text1}</div>
            </>
          )}

          {size === "tiny" && <>Placeh...</>}
        </div>
      )}

      {((size === "extra-large" && status === "active") ||
        (size === "large" && status === "active") ||
        (size === "medium" && status === "active") ||
        (size === "mini" && status === "error") ||
        (size === "tiny" && status === "active") ||
        (size === "tiny" && status === "desabled")) && (
        <>
          <div className={`group ${groupClassName}`}>
            {size === "mini" && (
              <div className="div-wrapper">
                <div className="text-wrapper">123</div>
              </div>
            )}

            {(size === "tiny" || status === "active") && <>{text}</>}
          </div>
          <div className={`div ${divClassName}`}>{text1}</div>
        </>
      )}

      {((size === "extra-large" && status === "error") ||
        (size === "large" && status === "error") ||
        (size === "medium" && status === "error") ||
        (size === "tiny" && status === "error")) && (
        <>
          <div className="text-2">{text}</div>
          <div className="placeholder-2">{text1}</div>
          <div className="placeholder-3">{text1}</div>
        </>
      )}
    </div>
  );
};

ModalFormInput.propTypes = {
  size: PropTypes.oneOf(["large", "mini", "tiny", "extra-large", "medium"]),
  status: PropTypes.oneOf(["desabled", "error", "active", "enabled"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
