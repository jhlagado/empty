import * as React from 'react';
import styled from 'styled-components';
import { Stylable } from '../types';

export const BaseComponent = ({
  className,
}: Stylable) => {
  return (
    <div className={`${className} component`}>My Component</div>
  );
}

export const Component = styled(BaseComponent)`
`;

Component.displayName = 'Breadcrumbs'
