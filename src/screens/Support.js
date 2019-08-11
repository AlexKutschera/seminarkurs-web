import React, {Component} from "react";
import QrReader from 'react-qr-reader';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login, logout} from "../actions/user";
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";

class Support extends Component {

    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <div>
                <Typography style={{display: 'block', margin: '32px auto', textAlign: 'center'}}>Support ist nicht verfügbar</Typography>
            </div>

        )
    }

}

export default Support;