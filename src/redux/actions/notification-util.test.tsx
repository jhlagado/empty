import {
  failureNotice, successNotice, appendNotice,
  failureTimeout, successTimeout, getErrorMessage,
} from '../notification-util';

describe('Notice Util', () => {

  it('should return a failure notice', () => {
    const actual = failureNotice(getErrorMessage({
      name: 'error',
      message: 'message',
    }), 'ID1');
    expect(actual).toEqual({
      id: 'ID1',
      title: 'Error',
      message: 'message',
      level: 'error',
      closeButton: true,
      closeOnTimeout: failureTimeout,
    });
  });

  it('should return a success notice', () => {
    const actual = successNotice('message', 'ID1');
    expect(actual).toEqual({
      id: 'ID1',
      title: 'Success',
      message: 'message',
      level: 'success',
      closeButton: true,
      closeOnTimeout: successTimeout,
    });
  });

  it('should append a notice', () => {
    const mockNotice1 = successNotice('SUCCESS 1', 'ID1');
    const mockNotice2 = successNotice('SUCCESS 2', 'ID2');
    const state = {
      notices: [
        mockNotice1,
      ],
    };
    const actual = appendNotice(state, mockNotice2);
    expect(actual.notices.length).toEqual(2);
    expect(actual).toEqual({
      notices: [
        mockNotice1,
        mockNotice2,
      ],
    });
  });

  it('should replace previous notices', () => {
    const mockNotice1 = successNotice('SUCCESS 1', 'ID1');
    const mockNotice2 = successNotice('SUCCESS 2', 'ID2');
    const state = {
      notices: [
        mockNotice1,
      ],
    };
    const actual = appendNotice(state, mockNotice2, true);
    expect(actual.notices.length).toEqual(1);
    expect(actual).toEqual({
      notices: [
        mockNotice2,
      ],
    });
  });

  it('should create an error string', () => {
    const error = {
      response: {
        errorId: 'ERROR!',
        message: 'error message',
      },
    };
    const actual = getErrorMessage(error);
    expect(actual).toEqual('ERROR!: error message');
  });

});
