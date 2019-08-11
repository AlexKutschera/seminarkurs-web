/*
 * Copyright (c) 2019
 */

import { store } from "../App";

export const SET_ONLINE = 'SET_ONLINE';
export const SET_OFFLINE = 'SET_OFFLINE';
export const SET_POPUP_COLLAPSED = 'SET_POPUP_COLLAPSED';

export const setOnline = () => {
  store.dispatch({
    type: SET_ONLINE,
  });
};

export const setOffline = () => {
  store.dispatch({
    type: SET_OFFLINE,
  });
};

export const setPopupCollapse = collapsed => {
  store.dispatch({
    type: SET_POPUP_COLLAPSED,
    payload: collapsed,
  });
};
