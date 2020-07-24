import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import GetAllBook from "../reducers/get/GetAllBook";

const store = createStore(GetAllBook);
export { store };
