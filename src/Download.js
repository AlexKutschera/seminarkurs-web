import React, {Component} from 'react';
import './App.css';
import {Typography} from "@material-ui/core";

class Download extends Component {

    render() {
        return (
            <div style={{
                background: 'linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(86,206,194,1) 100%)',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    background: 'white',
                    maxWidth: '600px',
                    width: '80%',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px'
                }}>
                    <img src={'/icon.svg'} style={{    filter: 'brightness(0.65)'}}/>
                    <a href={'/app-release.apk'} download style={{
                        fontSize: '18px',
                        color: '#2c649c',
                        marginTop: '30px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                    }}>Download</a>
                </div>
            </div>
        );
    }
}

export default Download;
