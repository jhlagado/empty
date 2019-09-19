import { RSAA } from 'redux-api-middleware';
import { fetchActionsFactory } from './action-helpers';
import { getConfigValue } from '../../util/app-util';

export const ItemListActions = fetchActionsFactory('ITEM_LIST');

const SERVICE_URL = getConfigValue('SERVICE_URL');
const urlPrefix = `${SERVICE_URL}/v1/apigw`;

export const getItemList = () => ({
  [RSAA]: {
    endpoint: `${urlPrefix}/items`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [
      {
        type: ItemListActions.REQUEST,
      },
      {
        type: ItemListActions.SUCCESS,
      },
      {
        type: ItemListActions.FAILURE,
      },
    ],
  },
});
