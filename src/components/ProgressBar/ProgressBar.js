/* eslint-disable no-unused-vars */
import React from "react";

import VisuallyHidden from "../VisuallyHidden";
import * as SPB from "./ProgressBar.styles";

const ProgressBar = ({ value, size, min = 0, max = 100 }) => {
  if (isNaN(min) || isNaN(max)) {
    throw new Error("The min and max props needs to be numbers");
  }

  if (min > max) {
    throw new Error("The min prop needs to be less than or equal the max prop");
  }

  const limitedValue = Math.max(Math.min(value, max), min);
  const progress = ((limitedValue - min) / (max - min)) * 100;
  const roundedProgress = Math.round((progress + Number.EPSILON) * 100) / 100;

  return (
    <SPB.Wrapper
      style={SPB.VARIANT_STYLES[size]}
      role="progressbar"
      aria-valuenow={limitedValue}
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <SPB.InnerBarWrapper value={progress}>
        <SPB.InnerBar />
        <VisuallyHidden>{`${roundedProgress}%`}</VisuallyHidden>
      </SPB.InnerBarWrapper>
    </SPB.Wrapper>
  );
};

export default ProgressBar;
