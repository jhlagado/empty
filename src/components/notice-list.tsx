import * as React from 'react';

import { Notice, RootState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { dismissNotice } from '../redux/actions/notice-actions';

import { NoticeItem } from './notice-item';

export const NoticeList = () => {

  const list = useSelector((state: RootState) =>
    state.notifications && state.notifications.notices)

  const dispatch = useDispatch();

  const dismiss = (notice: Notice) => () =>
    dispatch(dismissNotice(notice.id as string));

  return (
    <div id="notice-list">
      {
        list && list.map((notice: Notice) => {
          return (
            <NoticeItem
              key={notice.id}
              notice={notice}
              dismiss={dismiss(notice)}
            />
          );
        })
      }
    </div>
  );
};
