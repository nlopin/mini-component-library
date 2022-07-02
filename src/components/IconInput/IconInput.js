import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import UnstyledIcon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${p => p.width}px;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input.attrs(() => ({ type: 'text' }))`
  outline-offset: 2px;
  border: none;
  border-bottom: var(--input-underline-width) solid ${COLORS.black};
  padding-left: var(--height);
  padding-top: var(--padding-top);
  width: 100%;
  height: var(--height);
  font-weight: inherit;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const Icon = styled(UnstyledIcon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
`

const sizeStyles = {
    small: {
        inputUnderlineWidth: 1,
        iconSize: 16,
        paddingTop: 4,
        height: 24 / 16,
        fontSize: 14 / 16
    },
    large: {
        inputUnderlineWidth: 2,
        iconSize: 24,
        paddingTop: 10,
        height: 36 / 16,
        fontSize: 18 / 16
    }
}

const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       placeholder,
                   }) => {
    const sizeStyle = sizeStyles[size]

    if (!sizeStyle) throw new Error(`Size "${size}" is not supported. Only ${Object.keys(sizeStyles).join()} are available.`)

    return <Wrapper width={width} style={{
        '--padding-top': sizeStyle.paddingTop + 'px',
        '--height': sizeStyle.height + 'rem',
        '--font-size': sizeStyle.fontSize + 'rem'
    }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} aria-hidden="true" size={sizeStyle.iconSize}/>
        <Input placeholder={placeholder} style={{ '--input-underline-width': sizeStyle.inputUnderlineWidth + `px` }}/>
    </Wrapper>;
};

export default IconInput;
