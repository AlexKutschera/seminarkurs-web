/*
 * Copyright (c) 2019
 */

import { combineReducers } from "redux";
import userReducer from "./user";
import scannerReducer from "./scanner";
import stateReducer from "./state";
import searchReducer from "./search";

export default combineReducers({
  user: userReducer,
  scanner: scannerReducer,
  state: stateReducer,
  search: searchReducer,
});
