import { combineReducers } from 'redux';

import { noticeReducer } from './notice-reducer';
import { itemListReducer } from './item-list-reducer';
import { RootState } from '../../types';

export const rootReducer = combineReducers<RootState>({
  notifications: noticeReducer,
  items: itemListReducer,
});
