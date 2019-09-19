import * as React from 'react';

import { TopBar } from './components/top-bar';
import styled from 'styled-components';
import { Router, globalHistory } from '@reach/router';
import { BottomBar } from './components/bottom-bar';
import { Stylable } from './types';
import { NoticeList } from './components/notice-list';

import { ItemList } from './pages/item-list';

export const getRemoveListener = (ref: any, timer: any) => () => {
  if (ref != null && ref.current != null) {
    timer(() => {
      (ref as any).current.scrollTop = 0;
    }, 0)
  }
}

const BaseMainPage = ({ className }: Stylable) => {

  const ref = React.useRef(null);
  React.useEffect(() => globalHistory.listen(getRemoveListener(ref, setTimeout)), []);

  return (
    <div className={`page ${className}`}>
      <TopBar />
      <NoticeList />
      <div ref={ref} className="scroll-area">
        <Router className="router">
          <ItemList path="/items" />
        </Router>
        <BottomBar />
      </div>
    </div>
  );
}

export const MainPage = styled(BaseMainPage)`

    height:  100%;
    display:  flex;
    flex-direction: column;

    > div {
        z-index: 100;
    }

    .scroll-area {
        z-index: 90;
        position: absolute;
        padding-top: ${({ theme }) => theme.noticeHeight};
        top: ${({ theme }) => theme.topBarHeight};
        right: 0;
        bottom: 0;
        left: 0;
        color: ${ ({ theme }) => theme.color.grey30};
        font-family: 'SourceSansPro', Helvetica,Arial,sans-serif;
        font-size: 1rem;
        line-height: 20px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
    }

    .router {
        min-height: 100%;
    }

`;

MainPage.displayName = 'Page';
