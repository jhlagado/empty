import { Notice, NoticeMessage, LevelType, NoticeState } from '../types';

export const successTimeout = 10000;
export const failureTimeout = 20000;

export const genericNotice = (
  title: string,
  message: NoticeMessage,
  level: LevelType,
  id?: string,
  timeout?: number,
): Notice => ({
  id,
  message,
  title,
  level,
  closeButton: true,
  closeOnTimeout: timeout,
});

export const failureNotice = (message: NoticeMessage, id?: string, timeout?: number): Notice =>
  genericNotice('Error', message, 'error', id, timeout || failureTimeout);

export const successNotice = (message: NoticeMessage, id?: string, timeout?: number): Notice =>
  genericNotice('Success', message, 'success', id, timeout || successTimeout);

export const appendNotice = (
  state: NoticeState, notice: Notice, replace?: boolean, idCode?: string) => {
  const id = notice.id || idCode || `${Date.now()}`;
  if (replace) {
    return ({
      ...state,
      notices: [
        {
          ...notice,
          id,
        },
      ],
    });
  }
  return ({
    ...state,
    notices: [
      ...state.notices,
      {
        ...notice,
        id,
      },
    ],
  });
};

export const getErrorMessage = (error: any) => {
  const error1 = error.response ? error.response : error;
  return error1.errorId ? `${error1.errorId}: ${error1.message}` : error1.message;
};

