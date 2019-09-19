const fetchMock = require('fetch-mock').sandbox();
(global as any).fetch = fetchMock;

import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux'
import { render, fireEvent, waitForElement } from '@testing-library/react';

import { NoticeList } from '../notice-list';
import { configureStore } from '../../redux';

const store = configureStore({
  notifications: {
    notices: [
      {
        id: '1',
        title: 'Success',
        message: '123',
        level: 'success',
      },
    ],
  }
});

describe('NoticeList', () => {
  it('should render notice list', async () => {
    const { container } = render(
      <ReduxProvider store={store as any}>
        <NoticeList />
      </ReduxProvider>
    );
    const notices = container.querySelectorAll('.notice-item');
    expect(notices.length).toBe(1);
    const notice = notices[0] as HTMLElement;
    const message = notice.querySelector('.notice-title') as HTMLElement;
    expect(message.innerHTML).toBe('Success:&nbsp;');
    const closeButton = notice.querySelector('[role=button]') as HTMLElement;
    fireEvent.click(closeButton);
    const notices1 = container.querySelectorAll('.notice-item');
    expect(notices1.length).toBe(0);
  });
});
