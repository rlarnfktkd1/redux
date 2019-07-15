import {combineReducers} from "redux";

import counter from "./Counter/Counter.store";

const reducers = {
  counter
}

export default combineReducers({
  ...reducers,
  counter
})