/*
 * Copyright (c) 2019
 */

import { SET_OFFLINE, SET_ONLINE, SET_POPUP_COLLAPSED } from "../actions/state";
import { HIDE_RESULT } from "../actions/scanner";

const initialState = {
  is_online: false,
  popup_collapsed: true,
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_ONLINE: {
      return {
        ...state,
        is_online: true,
      };
    }
    case SET_OFFLINE: {
      return {
        ...state,
        is_online: false,
      };
    }
    case SET_POPUP_COLLAPSED: {
      return {
        ...state,
        popup_collapsed: action.payload,
      };
    }
    case HIDE_RESULT: {
      return {
        ...state,
        popup_collapsed: true,
      };
    }
    default: {
      return state;
    }
  }
};
