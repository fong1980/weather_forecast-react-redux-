import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const reducer = combineReducers(reducers);
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

export default store;
