import * as React from 'react';
import styled from 'styled-components';

import { Notice, Stylable } from '../types';
import { noticeTimingGenerator } from './notice-timer';

export interface NoticeItemProps extends Stylable {
  notice: Notice;
  dismiss: () => void;
}

export const BaseNoticeItem = ({
  className, notice, dismiss
}: NoticeItemProps) => {

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const iterator = noticeTimingGenerator(
      setVisible,
      dismiss,
      notice,
    );
    const loop = () => {
      const item = iterator.next();
      if (!item.done) {
        setTimeout(loop, item.value);
      }
    };
    loop();
  }, []);

  const { message } = notice;
  return (
    <div style={{ opacity: visible ? 1 : 0 }}
      className={`${className} notice-item`}
    >
      <div className="notice-title-container">
        <b className="notice-title">{notice.title}:&nbsp;</b>
        <div className="notice-message">
          {typeof message === 'function' ? message() : message}
        </div>
      </div>
      <div role="button"
        className="notice-close"
        tabIndex={0}
        onClick={dismiss}>
      </div>
    </div>
  );
}

export const NoticeItem = styled(BaseNoticeItem)`

    align-items: center;
    display: flex;
    align-items: stretch;
    fill: currentColor;
    padding: 10px 20px 12px 20px;
    border-top: 1px solid white;
    margin: 0px 0px;
    height: ${ ({ theme }) => theme.noticeHeight};
    overflow: hidden;
    font-size: 16px;
    transition: all 1s ease -in -out;

    svg {
    }

    .notice-title-container {
        align-items: center;
        display: flex;
        flex-grow: 1;
        justify-content: center;

        svg {
            margin-right: 10px;
        }
    }
`;
