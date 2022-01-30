/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const VARIANT_STYLES = {
  large: {
    "--inner-bar-height": "16px",
    "--inner-bar-wrapper-border-radius": "6px",
    "--wrapper-border-radius": "8px",
    "--wrapper-padding": "4px",
  },
  medium: {
    "--inner-bar-height": "12px",
    "--inner-bar-wrapper-border-radius": "3px",
    "--wrapper-border-radius": "4px",
    "--wrapper-padding": "0",
  },
  small: {
    "--inner-bar-height": "8px",
    "--inner-bar-wrapper-border-radius": "3px",
    "--wrapper-border-radius": "4px",
    "--wrapper-padding": "0",
  },
};

const InnerBar = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;

  height: var(--inner-bar-height, 16px);
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
`;

const InnerBarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--inner-bar-wrapper-border-radius);

  ${InnerBar} {
    transform-origin: 0 0;
    transform: ${(props) => `scaleX(${props.value}%)`};
  }
`;

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--wrapper-border-radius);
  padding: var(--wrapper-padding);
  overflow: hidden;
`;

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
    <Wrapper
      style={VARIANT_STYLES[size]}
      role="progressbar"
      aria-valuenow={limitedValue}
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <InnerBarWrapper value={progress}>
        <>
          <InnerBar />
          <VisuallyHidden>{`${roundedProgress}%`}</VisuallyHidden>
        </>
      </InnerBarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
