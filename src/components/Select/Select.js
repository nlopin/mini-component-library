import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  
  &:focus-within {
    outline: 5px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`

const DisplayedValue = styled.div`
    padding-right: 32px;
`

const ArrowIcon = styled(Icon).attrs(()=> ({id: 'chevron-down'}))`
  position: absolute;
  right: 8px;
  top: 5px;
`

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    return (
        <Wrapper>
            <DisplayedValue>{displayedValue}</DisplayedValue>
            <ArrowIcon/>
            <InvisibleSelect value={value} onChange={onChange}>
                {children}
            </InvisibleSelect>
        </Wrapper>
    );
};

export default Select;
