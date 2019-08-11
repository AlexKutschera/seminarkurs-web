/*
 * Copyright (c) 2019
 */

import { LOAD_SEARCH_DATA } from "../actions/search";

const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_SEARCH_DATA: {
      return {
        ...state,
        articles: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
