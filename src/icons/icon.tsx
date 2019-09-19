import * as React from 'react';
import styled from 'styled-components';
import { Stylable } from '../types';

export const BaseIcon = ({ className }: Stylable) => (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" className={`icon ${className}`}>
    <path fillRule="evenodd" d="M16.673 6.25h-3.158a.75.75 0 010-1.5H18.5a.75.75 0 01.75.75v5a.75.75 0 11-1.5 0V7.295l-5.97 5.996a.75.75 0 01-1.06-1.06l5.953-5.981zm1.077 11.5V15.5a.75.75 0 111.5 0v3a.75.75 0 01-.75.75h-13a.75.75 0 01-.75-.75v-13a.75.75 0 01.75-.75h3.048a.75.75 0 110 1.5H6.25v11.5h11.5z"></path>
  </svg>
);

export const Icon = styled(BaseIcon)`
    width: 24px;
    color: red;
`;

Icon.displayName = 'Icon';
