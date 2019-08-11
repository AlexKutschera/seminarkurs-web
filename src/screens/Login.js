import React, {Component} from "react";
import QrReader from 'react-qr-reader';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login, logout} from "../actions/user";
import {connect} from "react-redux";
import {Typography} from "@material-ui/core";

class Login extends Component {

    state = {
        username: '',
        password: '',
    };

    render() {
        return (
            <div>
                {this.props.session_id !== undefined && this.props.session_id !== null && this.props.session_id !== '' && (
                    <div>
                        <img src={'/Avatar.jpg'} style={{borderRadius: '64px', margin: '32px auto', display: 'block'}}/>
                        <Typography style={{textAlign: 'center', fontWeight: 'bold'}}>{this.props.username}</Typography>
                        <Typography style={{textAlign: 'center'}}>{this.props.department}</Typography>
                        <Button  style={{margin: '32px auto', display: 'block'}} onClick={() => {
                            logout();
                        }}>Abmelden</Button>
                    </div>
                )}
                {(this.props.session_id === undefined || this.props.session_id === null || this.props.session_id === '') && (
                    <div style={{padding: '16px'}}>
                        <TextField
                            label="Benutzername"
                            value={this.state.username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            label="Passwort"
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                            fullWidth
                            type={'password'}
                        />
                        <Button onClick={() => {
                            login(this.state.username, this.state.password);
                        }}>Anmelden</Button>
                    </div>
                )
                }
            </div>

        )
    }

}

const mapStateToProps = state => ({
    session_id: state.user.session_id,
    username: state.user.username,
    department: state.user.department,
});

export default connect(mapStateToProps, {})(Login);