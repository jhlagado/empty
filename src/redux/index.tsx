import {
  Store,
  createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { apiMiddleware } from 'redux-api-middleware';
import { notificationMiddleware } from './notification-middleware';
import { RootState } from '../types';

export function configureStore(initialState?: RootState): Store<RootState> {

  let middleware = applyMiddleware(...[
    apiMiddleware,
    notificationMiddleware,
  ]);
  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware,
  ) as Store<RootState>;

  if (process.env.NODE_ENV !== 'production') {
    (window as any).dispatch = store.dispatch;
  }

  return store;
}
