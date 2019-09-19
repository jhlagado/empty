const fetchMock = require('fetch-mock').sandbox();
(global as any).fetch = fetchMock;

import configureMockStore from 'redux-mock-store'
import { apiMiddleware } from 'redux-api-middleware'

import { getItemList } from './item-list-actions';
import { fetchActionsFactory } from './action-helpers';
import { getConfigValue } from '../../util/app-util';

const ItemListActions = fetchActionsFactory('ITEM_LIST');

const middlewares = [apiMiddleware]
const mockStore = configureMockStore(middlewares)

describe('async item list actions actions', () => {

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should dispatch ITEM_LIST_SUCCESS when getItemList is called', () => {
    const store = mockStore({})

    const body = [
      { id: 1, title: 'T1', describe: 'D1' },
    ]

    const SERVICE_URL = getConfigValue('SERVICE_URL');
    const urlPrefix = `${SERVICE_URL}/v1/apigw`;

    fetchMock.getOnce(`${urlPrefix}/items`,
      {
        body,
        headers: {
          'content-type': 'application/json',
        },
      })

    const expectedActions = [
      { type: ItemListActions.REQUEST },
      { type: ItemListActions.SUCCESS, payload: body }
    ]
    return store.dispatch(getItemList() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
