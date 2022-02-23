import styled from "styled-components";

import { COLORS } from "../../constants";

export const Wrapper = styled.div `
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: inline-block;
  position: relative;
  border-radius: 8px;
  padding: 12px 18px;
  line-height: 19px;
  font-size: 16px;

  & > select {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: solid 2px black;
  }
`;

export const ValueContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 24px;
`;