/*
 * Copyright (c) 2019
 */

import { store } from "../App";
import Socket from "../util/Socket";

export const SCAN_DATA = 'SCAN_DATA';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const HIDE_RESULT = 'HIDE_RESULT';

export const hideResult = () => {
  store.dispatch({
    type: HIDE_RESULT,
    payload: null,
  });
};

export const loadItemComments = itemID => {
  Socket.getSocket().emit('get.comment.item', {
    condition: itemID,
    session_id: store.getState().user.session_id,
  });
};

export const loadScannerData = scannerResult => {
  Socket.getSocket().emit('item.get', {
    condition: scannerResult,
    session_id: store.getState().user.session_id,
  });
  loadItemComments(scannerResult);
};

export const addComment = (comment, itemID) => {
  store.dispatch({
    type: LOAD_COMMENTS,
    payload: [],
  });
  Socket.getSocket().emit('user.comment', {
    session_id: store.getState().user.session_id,
    kommentar: comment,
    item: itemID,
  });
};
