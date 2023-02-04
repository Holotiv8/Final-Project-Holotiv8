import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import talentReducer from "./reducers/talentsReducer";

const rootReducer = combineReducers({
  idols: talentReducer,
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
