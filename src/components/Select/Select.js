import React from 'react';

import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import * as SS from './Select.styles';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SS.Wrapper >
      <SS.ValueContainer>
        {displayedValue}
        <Icon id="chevron-down" />
      </SS.ValueContainer>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </SS.Wrapper>
  );
};

export default Select;
