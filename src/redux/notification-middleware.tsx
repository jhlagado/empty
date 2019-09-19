import { AnyAction, Middleware } from "redux";
import { showNotice } from './actions/notice-actions';
import { failureNotice, getErrorMessage, successNotice } from './notification-util';
import { Notice } from '../types';

export const watchedActions: { [key: string]: (action: AnyAction) => Notice } = {
  'TEST_SUCCESS': () => successNotice('Test successful'),
}

export const notificationMiddleware: Middleware = (store) => (next) => (action) => {
  const { type } = action;
  if (type.endsWith('_FAILURE')) {
    const notice = failureNotice(getErrorMessage(action.payload));
    store.dispatch(showNotice(notice));
  } else if (type in watchedActions) {
    const notice = watchedActions[type](action);
    store.dispatch(showNotice(notice));
  }
  return next(action)
}
