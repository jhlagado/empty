import { actionsFactory } from './action-helpers';
import { Notice } from '../../types';

const prefix = 'NOTICE';
const CLEAR_NOTICES = 'CLEAR_NOTICES';
const SHOW_NOTICE = 'SHOW_NOTICE';
const DISMISS_NOTICE = 'DISMISS_NOTICE';

export const NoticeActions = actionsFactory(prefix, [
  CLEAR_NOTICES, SHOW_NOTICE, DISMISS_NOTICE,
]);

export const clearNotices = () => ({
  type: NoticeActions.CLEAR_NOTICES,
});

export const showNotice = (notice: Notice, id?: string) => ({
  type: NoticeActions.SHOW_NOTICE,
  payload: notice,
  meta: {
    id,
  },
});

export const dismissNotice = (id: string) => ({
  type: NoticeActions.DISMISS_NOTICE,
  meta: {
    id,
  },
});
