import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  color: ${COLORS.gray700};
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
  
  &:hover {
    color: ${COLORS.black};
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
  right: 6px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
`

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    return (
        <Wrapper>
            <DisplayedValue>{displayedValue}</DisplayedValue>
            <ArrowIcon style={{'--size': 24 + 'px'}}/>
            <InvisibleSelect value={value} onChange={onChange}>
                {children}
            </InvisibleSelect>
        </Wrapper>
    );
};

export default Select;
