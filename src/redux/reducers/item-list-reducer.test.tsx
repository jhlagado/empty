const fetchMock = require('fetch-mock').sandbox();
(global as any).fetch = fetchMock;

import { itemListReducer, initialItemListState } from "./item-list-reducer";
import { ItemListActions } from "../actions/item-list-actions";
import { ApiError } from "redux-api-middleware";

const actions = ItemListActions;
describe('item list reducer', () => {
  it('should update FAILURE state', () => {

    const state = initialItemListState;
    const error = new ApiError<any>(404, 'Not found', []);

    const newState = itemListReducer(state, {
      type: actions.FAILURE,
      payload: error as any,
    });

    expect(newState).toEqual({
      ...initialItemListState,
      error,
      status: 'FAILURE',
    });
  })
});
