import SHOP_DATA from './ShopData';
import shopActionTypes from './types';

const initialState = { collections: SHOP_DATA };

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collection: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
