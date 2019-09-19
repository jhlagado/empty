import { notificationMiddleware } from '../notification-middleware';

describe('Notification Middleware', () => {
  it('should dispatch an error message', () => {

    const action = {
      type: 'TEST_FAILURE',
      payload: new Error('Terrible!'),
    }

    const store: any = {
      dispatch(_action: any) {
        expect(_action).toEqual({
          meta: {
            id: undefined,
          },
          payload: {
            closeButton: true,
            closeOnTimeout: 20000,
            id: undefined,
            level: 'error',
            message: 'Terrible!',
            title: 'Error',
          },
          type: 'NOTICE_SHOW_NOTICE',
        })
      }
    }

    const next: any = (_store: any) => (_next: any) => (_action: any) => expect(_action).toBe(action);

    notificationMiddleware(store)(next)(action);
  });

  it('should dispatch an success message', () => {

    const action = {
      type: 'TEST_SUCCESS',
    }

    const store: any = {
      dispatch(_action: any) {
        expect(_action).toEqual({
          meta: {
            id: undefined,
          },
          payload: {
            closeButton: true,
            closeOnTimeout: 10000,
            id: undefined,
            level: 'success',
            message: 'Test successful',
            title: 'Success',
          },
          type: 'NOTICE_SHOW_NOTICE',
        })
      }
    }

    const next: any = (_store: any) => (_next: any) => (_action: any) => expect(_action).toBe(action);

    notificationMiddleware(store)(next)(action);
  });

});
