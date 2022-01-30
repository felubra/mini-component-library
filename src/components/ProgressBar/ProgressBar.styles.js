/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { COLORS } from "../../constants";

export const VARIANT_STYLES = {
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

export const InnerBar = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;

  height: var(--inner-bar-height, 16px);
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
`;

export const InnerBarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--inner-bar-wrapper-border-radius);

  ${InnerBar} {
    transform-origin: 0 0;
    transform: ${(props) => `scaleX(${props.value}%)`};
  }
`;

export const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--wrapper-border-radius);
  padding: var(--wrapper-padding);
  overflow: hidden;
`;
