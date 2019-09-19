import { handleActions } from 'redux-actions';
import { ApiError } from 'redux-api-middleware';
import { ItemListActions } from '../actions/item-list-actions';
import { Item, FetchState } from '../../types';

export type ItemListState = FetchState<Item[]>;

export const initialItemListState: ItemListState = {
  status: 'NOT_STARTED',
};

export const itemListReducer = handleActions<ItemListState, Item[] & ApiError>(
  {
    [ItemListActions.REQUEST]: (state) => {
      return {
        ...state,
        status: 'PENDING',
      };
    },
    [ItemListActions.SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        status: 'SUCCESS',
      };
    },
    [ItemListActions.FAILURE]: (state, action) => {
      return {
        ...state,
        status: 'FAILURE',
        error: action.payload,
      }
    },
  },
  initialItemListState,
);
