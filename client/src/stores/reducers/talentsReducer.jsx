import { FETCH_DATA_BRANCHES, FETCH_DATA_TALENTS } from "../actionType";

const initialState = {
  idols: [],
  branches: [],
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
    default:
      return state;
  }
};

export default talentReducer;
