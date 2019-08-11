import React, {Component} from 'react';
import './App.css';
import Scanner from "./screens/Scanner";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Icon} from "@material-ui/core";
import Login from "./screens/Login";
import Socket from "./util/Socket";
import {INIT_SESSION_ID} from "./actions/user";
import cookie from 'react-cookies';
import {hideResult} from "./actions/scanner";
import Support from "./screens/Support";

const screens = ['Login', 'Scanner', 'Support'];

class Home extends Component {

    state = {
        screen: 'Scanner'
    };

    render() {
        return (
            <div>
                {this.state.screen === 'Scanner' && <Scanner/>}
                {this.state.screen === 'Login' && <Login/>}
                {this.state.screen === 'Support' && <Support/>}
                <BottomNavigation
                    value={this.state.screen}
                    onChange={(event, newValue) => {
                        this.setState({
                            screen: screens[newValue]
                        });
                    }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        width: '100%'
                    }}
                >
                    <BottomNavigationAction label="Login" icon={<Icon>person</Icon>}/>
                    <BottomNavigationAction onClick={() => {
                        hideResult()
                    }} label="Scanner" icon={<Icon>filter_center_focus</Icon>}/>
                    <BottomNavigationAction label="Support" icon={<Icon>help_outline</Icon>}/>
                </BottomNavigation>
            </div>
        );
    }
}

export default Home;
