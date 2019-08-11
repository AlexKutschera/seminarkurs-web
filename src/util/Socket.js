/*
 * Copyright (c) 2019
 */

import io from "socket.io-client/dist/socket.io";
import {store} from "../App";
import {LOAD_USER_DATA, loadUserData, LOGIN, logout} from "../actions/user";
import {LOAD_COMMENTS, LOAD_DATA, loadItemComments, SCAN_DATA} from "../actions/scanner";
import {setOffline, setOnline} from "../actions/state";
import {LOAD_SEARCH_DATA} from "../actions/search";
import cookie from 'react-cookies';

class Socket {
    static socket = null;

    static connect() {
        this.socket = io('https://seminarkurs.alexkutschera.de/');
        this.socket.on('user.login.result', data => {
            cookie.save('session_id', data.session_id);
            store.dispatch({
                type: LOGIN,
                payload: data.session_id,
            });
            loadUserData(data.session_id);
        });
        this.socket.on('session.user.get.result', data => {
            if (data.result instanceof Array && data.result.length > 0) {
                store.dispatch({
                    type: LOAD_USER_DATA,
                    payload: data.result[0],
                });
            }
        });
        this.socket.on('item.get.result', data => {
            if (data !== 'Keine Ergebnisse' && data.length > 0) {
                store.dispatch({
                    type: SCAN_DATA,
                    payload: data[0],
                });
            }
            if (data === 'Nicht ausreichende Berechtigung') {
                logout();
            }
        });
        this.socket.on('get.comment.item.result', data => {
            if (data !== 'Nicht ausreichende Berechtigung') {
                store.dispatch({
                    type: LOAD_COMMENTS,
                    payload: data.result,
                });
            }
            if (data === 'Nicht ausreichende Berechtigung') {
                logout();
            }
        });
        this.socket.on('user.comment.result', data => {
            loadItemComments(store.getState().scanner.scan_result.ITEM_ID);
        });
        this.socket.on('artikel.search.result', data => {
            if (data !== 'Nicht ausreichende Berechtigung') {
                store.dispatch({
                    type: LOAD_SEARCH_DATA,
                    payload: data,
                });
            }
            if (data === 'Nicht ausreichende Berechtigung') {
                logout();
            }
        });
        this.socket.on('connect', () => setOnline());
        this.socket.on('disconnect', () => setOffline());
    }

    static getSocket() {
        if (this.socket == null) {
            this.connect();
        }
        return this.socket;
    }
}

export default Socket;
