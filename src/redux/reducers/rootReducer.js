import { combineReducers } from "redux";
import GetAllBookReducer from "./get/GetAllBook";

const rootReducer = combineReducers({
  rGetAllBook: GetAllBookReducer,
});

export default rootReducer;
