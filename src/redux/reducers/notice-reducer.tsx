import { handleActions } from 'redux-actions';
import { NoticeActions } from '../actions/notice-actions';

import {
  appendNotice,
} from '../notification-util';
import { NoticeState } from '../../types';

type NoticeMeta = {
  replace?: boolean;
  id?: string;
};

export const initialGlobalState: NoticeState = {
  notices: [],
};

export const noticeReducer = handleActions<NoticeState, any, NoticeMeta>(
  {
    [NoticeActions.SHOW_NOTICE]: (state, action) =>
      appendNotice(state, action.payload,
        action.meta.replace, action.meta.id),
    [NoticeActions.CLEAR_NOTICES]: state => ({
      ...state,
      notices: [],
    }),
    [NoticeActions.DISMISS_NOTICE]: (state, action) => ({
      ...state,
      notices: state.notices.filter(notice => notice.id !== action.meta.id),
    }),
  },
  initialGlobalState,
);
