/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div.attrs(() => ({ role: 'progressbar' }))`
  --border-radius: 4px;
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
`

const ProgressWrapper = styled.div`
  border-radius: var(--border-radius);
  // trim off the progress
  overflow: hidden;
`

const Progress = styled.div`
  width: ${p => p.value || 0}%;
  border-radius: 4px 0 0 4px;
  height: var(--height);
  background-color: ${COLORS.primary};
`

const sizeStyles = {
    small: {
        height: 8,
        padding: 0,
        borderRadius: 4
    },
    medium: {
        height: 12,
        padding: 0,
        borderRadius: 4
    },
    large: {
        padding: 4,
        height: 16,
        borderRadius: 8
    }
};

// The author SHOULD supply a value for aria-valuenow unless the value is indeterminate,
// in which case the author SHOULD omit the aria-valuenow attribute.
// Authors SHOULD update this value when the visual progress indicator is updated.
// If the progressbar is describing the loading progress of a particular region of a page,
// authors SHOULD both use aria-describedby to reference the progressbar status,
// and set the aria-busy attribute to true on the region until it is finished loading.
// It is not possible for the user to alter the value of a progressbar
// because it is always read-only.

const getPercentageFromValue = (value) => {
    switch (true) {
        case value < 0:
            return 0
        case value > 100:
            return 100
        default:
            return value
    }
}

const ProgressBar = ({ value, size }) => {
    const percentage = getPercentageFromValue(value)
    const styles = sizeStyles[size]
    return <Wrapper aria-valuenow={percentage} aria-live="polite" style={{
        '--border-radius': styles.borderRadius + 'px',
        '--padding': styles.padding + 'px'
    }}>
        <ProgressWrapper styles={{
            '--border-radius': styles.borderRadius + 'px',
        }}>
            <Progress value={percentage} style={{ '--height': styles.height + 'px' }}/>
        </ProgressWrapper>
    </Wrapper>;
};

export default ProgressBar;
