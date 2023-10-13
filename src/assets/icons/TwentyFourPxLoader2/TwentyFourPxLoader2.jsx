/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TwentyFourPxLoader2 = ({ color = "#653F90", className }) => {
  return (
    <svg
      className={`twenty-four-px-loader-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M0 0H24V24H0V0Z" fill="#D8D8D8" />
      <path
        className="path"
        d="M0 0H24M0 0V24M0 0L24 24M24 0V24M24 0L0 24M24 24H0"
        stroke="#6F6F6F"
        strokeWidth="0.13"
      />
      <circle className="circle" cx="12" cy="12" r="10" stroke="#6F6F6F" strokeWidth="0.13" />
      <rect className="rect" height="16" rx="1" stroke="#6F6F6F" strokeWidth="0.13" width="20" x="2" y="4" />
      <rect className="rect" height="20" rx="1" stroke="#6F6F6F" strokeWidth="0.13" width="16" x="4" y="2" />
      <rect className="rect" height="18" rx="1" stroke="#6F6F6F" strokeWidth="0.13" width="18" x="3" y="3" />
      <circle className="circle" cx="12" cy="12" r="4" stroke="#6F6F6F" strokeWidth="0.13" />
      <circle className="circle" cx="12" cy="12" r="10" stroke={color} strokeOpacity="0.3" strokeWidth="1.5" />
      <path
        className="path"
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

TwentyFourPxLoader2.propTypes = {
  color: PropTypes.string,
};
