/*
 * Copyright (c) 2019
 */

import { INIT_SESSION_ID, LOAD_USER_DATA, loadUserData, LOGIN, LOGOUT } from "../actions/user";

const initialState = {
  session_id: null,
  username: '',
  department: '',
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        session_id: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        session_id: null,
      };
    }
    case LOAD_USER_DATA: {
      return {
        ...state,
        username: action.payload.Benutzername,
        department: action.payload.Abteilung,
      };
    }
    case INIT_SESSION_ID: {
      loadUserData(action.payload);
      return {
        ...state,
        session_id: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
