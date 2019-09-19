import * as React from 'react';
import styled from 'styled-components';

import { Stylable } from '../types';

export const BaseBottomBar = ({ className }: Stylable) => {

  return (
    <div className={`${className} bottom-bar`}>
      <div>
      </div>
    </div>
  );
}

export const BottomBar = styled(BaseBottomBar)`
    background-color: ${ ({ theme }) => theme.color.black};;
    padding: 1rem 1rem;
`;
BottomBar.displayName = 'BottomBar';
