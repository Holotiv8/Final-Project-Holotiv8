import { FETCH_DATA_BRANCHES, FETCH_DATA_TALENTS, FETCH_DETAIL_TELENS } from "../actionType";

const initialState = {
  idols: [],
  branches: [],
  oneIdol: {}
};

const talentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_TALENTS:
      return {
        ...state,
        idols: action.payload,
      };
    case FETCH_DATA_BRANCHES:
      return {
        ...state,
        branches: action.payload,
      };
      case FETCH_DETAIL_TELENS:
        // console.log(action.payload,'masuk  siniiiiii')
      return {
        ...state,
        oneIdol: action.payload,
      };
    default:
      return state;
  }
};

export default talentReducer;
