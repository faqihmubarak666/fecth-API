import { combineReducers } from "redux";

import GetUserReducer from "./userReducer/index";

const rootReducer = combineReducers({
  rGetDataUser: GetUserReducer,
});

export default rootReducer;
