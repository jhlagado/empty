import * as React from 'react';
import styled from 'styled-components';

import { Component } from '../components/component';
import { RouteComponentProps } from '@reach/router';

export interface ItemDesc {
  title: string;
}

export const titleComparator = (a: ItemDesc, b: ItemDesc) => {
  const titleA = a.title || '';
  const titleB = b.title || '';
  return titleA === titleB ? 0 : titleA < titleB ? -1 : 1
}
interface ItemListProps extends RouteComponentProps {
  className?: string;
}

export const BaseItemList = ({ className }: ItemListProps) => {

  return (
    <div className={`${className} item-list`}>
      <header>
        <Component />
        <h2>Item List</h2>
      </header>
      <div className="item-list-inner">
        <div className="main-div">
        </div>
      </div>
    </div >
  );
}

export const ItemList = styled(BaseItemList)`

    header {
        margin: 0em 1em 2.5em ${({ theme }) => theme.pageLeftMargin};
    }

    .item-list-inner {
        max-width: ${({ theme }) => theme.pageWidth};
        flex-grow: 1;
    }

    .main-div {
        min-height:  ${({ theme }) => theme.minPageHeight};
        margin: 1em 1em 2em ${({ theme }) => theme.pageLeftMargin};
        position: relative;
        padding-bottom: 50px;

    }

`;

ItemList.displayName = 'ItemList'
