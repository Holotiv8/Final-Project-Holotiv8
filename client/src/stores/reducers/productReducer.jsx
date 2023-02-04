import { FETCH_DATA_MERCH, FETCH_DATA_MERCH_DETAIL } from "../actionType";

const initialState = {
  idols: [],
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_MERCH:
      return {
        ...state,
        idols: action.payload,
      };
    case FETCH_DATA_MERCH_DETAIL:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
