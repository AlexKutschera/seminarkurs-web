import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";
import reducer from "./reducers";
import {Provider} from "react-redux";
import Scanner from "./screens/Scanner";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Icon, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import Login from "./screens/Login";
import Socket from "./util/Socket";
import {INIT_SESSION_ID} from "./actions/user";
import cookie from 'react-cookies';
import {hideResult} from "./actions/scanner";
import Support from "./screens/Support";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Download from "./Download";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

    componentWillMount() {
        Socket.connect();
        store.dispatch({
            type: INIT_SESSION_ID,
            payload: cookie.load('session_id'),
        });
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                    <Route exact path={'/download'} component={Download}/>
                    <Route component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export {App, store};
