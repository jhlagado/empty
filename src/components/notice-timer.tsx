import { Notice } from '../types';

export function* noticeTimingGenerator(
  setVisiblity: (visibility: boolean) => void,
  dismiss: () => void,
  notice: Notice,
) {
  const timeout = notice.closeOnTimeout;
  yield 0;
  setVisiblity(true);
  if (timeout) {
    yield timeout;
    setVisiblity(false);
    yield 1000;
    dismiss();
  }
}
