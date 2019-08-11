/*
 * Copyright (c) 2019
 */

import { HIDE_RESULT, LOAD_COMMENTS, LOAD_DATA, SCAN_DATA } from "../actions/scanner";

const initialState = {
  scan_result: null,
  show_result: false,
  comments: [],
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SCAN_DATA: {
      return {
        ...state,
        scan_result: action.payload,
        show_result: true,
        comments: [],
      };
    }
    case LOAD_DATA: {
      return {
        ...state,
        scan_result: action.payload,
      };
    }
    case HIDE_RESULT: {
      return {
        ...state,
        show_result: false,
        scan_result: null,
        comments: [],
      };
    }
    case LOAD_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
