import { Notice } from '../../types';

jest.useFakeTimers();

import { noticeTimingGenerator } from '../notice-timer';

describe('timers', () => {

  it('should step through the notice states', () => {
    const state: any = {
      isVisible: false,
      isDismissed: false,
    };
    const setVisiblity = (visibility: boolean) =>
      state.isVisible = visibility;
    const dismiss = () =>
      state.isDismissed = true;
    const notice: Notice = {
      title: 'notice',
      message: 'message',
      level: 'error',
    };

    const iterator = noticeTimingGenerator(setVisiblity, dismiss, notice);
    let item = iterator.next();
    expect(item).toEqual({ value: 0, done: false });
    item = iterator.next();
    expect(item).toEqual({ done: true });
  });

  it('should step through the notice states with timeout ', () => {
    const state: any = {
      isVisible: false,
      isDismissed: false,
    };
    const setVisiblity = (visibility: boolean) =>
      state.isVisible = visibility;
    const dismiss = () =>
      state.isDismissed = true;
    const notice: Notice = {
      title: 'notice',
      message: 'message',
      level: 'error',
      closeOnTimeout: 1000,
    };

    const iterator = noticeTimingGenerator(setVisiblity, dismiss, notice);
    let item = iterator.next();
    expect(item).toEqual({ value: 0, done: false });
    item = iterator.next();
    expect(item).toEqual({ value: 1000, done: false });
    expect(state.isVisible).toBe(true);
    item = iterator.next();
    expect(item).toEqual({ value: 1000, done: false });
    expect(state.isVisible).toBe(false);
    item = iterator.next();
    expect(item).toEqual({ done: true });
  });
});
