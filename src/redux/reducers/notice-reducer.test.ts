import { NoticeActions } from '../actions/notice-actions';
import { noticeReducer } from './notice-reducer';

it('should clear notices', () => {
  let state;
  state = noticeReducer(
    {
      notices: [],
    },
    {
      type: NoticeActions.CLEAR_NOTICES,
      payload: undefined,
      meta: {},
    },
  );
  expect(state).toEqual({
    notices: [],
  });
});

it('should show notice', () => {
  let state;
  state = noticeReducer(
    {
      notices: [
        {
          title: 'Info',
          message: 'MSG0',
          level: 'info',
          id: 'ID0',
        },
      ],
    },
    {
      type: NoticeActions.SHOW_NOTICE,
      payload: {
        title: 'Info',
        message: 'MSG',
        level: 'info',
      },
      meta: {
        id: 'ID1',
      },
    },
  );
  expect(state).toEqual({
    notices: [
      {
        title: 'Info',
        message: 'MSG0',
        level: 'info',
        id: 'ID0',
      },
      {
        title: 'Info',
        message: 'MSG',
        level: 'info',
        id: 'ID1',
      },
    ],
  });
});

it('should replace with notice', () => {
  let state;
  state = noticeReducer(
    {
      notices: [
        {
          title: 'Info',
          message: 'MSG0',
          level: 'info',
          id: 'ID0',
        },
      ],
    },
    {
      type: NoticeActions.SHOW_NOTICE,
      payload: {
        title: 'Info',
        message: 'MSG',
        level: 'info',
      },
      meta: {
        id: 'ID1',
        replace: true,
      },
    },
  );
  expect(state).toEqual({
    notices: [
      {
        title: 'Info',
        message: 'MSG',
        level: 'info',
        id: 'ID1',
      },
    ],
  });
});

it('should replace with notice', () => {
  let state;
  state = noticeReducer(
    {
      notices: [
        {
          title: 'Info',
          message: 'MSG0',
          level: 'info',
          id: 'ID0',
        },
        {
          title: 'Info',
          message: 'MSG1',
          level: 'info',
          id: 'ID1',
        },
      ],
    },
    {
      type: NoticeActions.DISMISS_NOTICE,
      payload: {},
      meta: {
        id: 'ID0',
      },
    },
  );
  expect(state).toEqual({
    notices: [
      {
        title: 'Info',
        message: 'MSG1',
        level: 'info',
        id: 'ID1',
      },
    ],
  });
});
