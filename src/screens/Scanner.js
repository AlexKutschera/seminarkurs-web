import React, {Component} from "react";
import QrReader from 'react-qr-reader';
import {addComment, loadScannerData} from "../actions/scanner";
import {connect} from "react-redux";
import {Icon, TextField, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {setPopupCollapse} from "../actions/state";
import Button from "@material-ui/core/Button";

class Scanner extends Component {

    state = {
        code: null,
        show_more: false,
    };

    handleScan = (code) => {
        if (code !== null && code !== this.state.code) {
            loadScannerData(code);
            this.setState({
                code,
            });
        }
    };

    render() {
        return (
            <div>
                <QrReader
                    delay={100}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{
                        top: '0px',
                        left: '0px',
                        display: 'block',
                        position: 'fixed',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover'
                    }}
                    className={'camera'}
                    showViewFinder={false}
                />
                {this.props.show_result && (
                    <div style={{
                        height: (this.props.popup_collapsed) ? '200px' : 'calc(100% - 56px)',
                        position: 'fixed',
                        bottom: '56px',
                        width: '100%',
                        backgroundColor: (this.props.popup_collapsed) ? '#FFFFFF' : 'rgb(215, 225, 233)',
                        borderRadius: (this.props.popup_collapsed) ? '32px 32px 0px 0px' : '0px',
                        transition: 'all .35s ease-in-out',
                        overflow: 'auto'
                    }}>
                        <IconButton style={{display: 'block', margin: '0px auto'}}
                                    onClick={() => setPopupCollapse(!this.props.popup_collapsed)}><Icon>{(this.props.popup_collapsed) ? 'expand_less' : 'expand_more'}</Icon></IconButton>
                        <div style={{
                            top: '-16px',
                            margin: '0 16px',
                            padding: '16px',
                            borderRadius: '16px',
                            backgroundColor: '#FFFFFF',
                            position: 'relative',
                            paddingBottom: 0
                        }}>
                            <Typography variant={'h6'}>{this.props.scan_result.Art_Bez}</Typography>
                            <Typography variant={'caption'}>{this.props.scan_result.ARTIKEL_ID}</Typography><br/><br/>
                            <div>
                                <Typography style={{
                                    width: '33%',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}>Gruppe</Typography>
                                <Typography style={{
                                    width: '33%',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}>Reihe</Typography>
                                <Typography style={{
                                    width: '33%',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}>Teil</Typography>
                                <Typography style={{width: '33%', display: 'inline-block'}}>8</Typography>
                                <Typography style={{width: '33%', display: 'inline-block'}}>88</Typography>
                                <Typography style={{width: '33%', display: 'inline-block'}}>888</Typography>
                            </div>
                            {this.state.show_more && !this.props.popup_collapsed && (
                                <div>
                                    <br/>
                                    <Typography style={{
                                        width: '50%',
                                        fontWeight: 'bold',
                                        display: 'inline-block'
                                    }}>Material</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        fontWeight: 'bold',
                                        display: 'inline-block'
                                    }}>Gewicht</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        display: 'inline-block'
                                    }}>{this.props.scan_result.Material}</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        display: 'inline-block'
                                    }}>{this.props.scan_result.Gewicht}</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        fontWeight: 'bold',
                                        display: 'inline-block'
                                    }}>Kunde</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        fontWeight: 'bold',
                                        display: 'inline-block'
                                    }}>Zulieferer</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        display: 'inline-block'
                                    }}>{this.props.scan_result.Kunde}</Typography>
                                    <Typography style={{
                                        width: '50%',
                                        display: 'inline-block'
                                    }}>{this.props.scan_result.Zulieferer}</Typography>
                                </div>
                            )}
                            {!this.props.popup_collapsed && (
                                <div>
                                    <Button onClick={() => window.open(`https://seminarkurs.alexkutschera.de/pdf/${this.props.scan_result.ARTIKEL_ID}?session_id=${this.props.session_id}`)}>Datenblatt</Button>
                                    <IconButton style={{display: 'block', margin: '0px auto'}}
                                                onClick={() => this.setState({show_more: !this.state.show_more})}><Icon>{(this.state.show_more) ? 'expand_less' : 'expand_more'}</Icon></IconButton>
                                </div>
                            )}
                        </div>
                        {!this.props.popup_collapsed && (
                            <div style={{padding: '16px'}}>
                                <div style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '24px',
                                    position: 'relative',
                                    height: '48px'
                                }}>
                                    <img src={'/Avatar.jpg'} width={48} height={48} style={{
                                        borderRadius: '24px',
                                        display: 'inline-block',
                                        position: 'absolute',
                                        left: 0
                                    }}/>
                                    <TextField value={this.state.new_comment}
                                               onChange={(e) => this.setState({new_comment: e.target.value})} fullWidth
                                               placeholder={'Kommmentar hinzufügen'} style={{
                                        width: 'calc(100% - 112px)',
                                        display: 'inline-block',
                                        margin: '8px',
                                        position: 'absolute',
                                        left: 48
                                    }}/>
                                    <IconButton style={{display: 'inline-block', position: 'absolute', right: 0}}
                                                onClick={() => {
                                                    addComment(this.state.new_comment, this.props.scan_result.ITEM_ID)
                                                }}><Icon>send</Icon></IconButton>
                                </div>
                                {this.props.comments.map((e, i) => (
                                    <div style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '24px',
                                        margin: '8px 0',
                                        padding: '12px'
                                    }}>
                                        <Typography style={{fontWeight: 'bold'}}>{e.Benutzername}</Typography>
                                        <Typography>{e.Comment}</Typography>
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    scan_result: state.scanner.scan_result,
    show_result: state.scanner.show_result,
    comments: state.scanner.comments,
    popup_collapsed: state.state.popup_collapsed,
    session_id: state.user.session_id
});

export default connect(mapStateToProps, {})(Scanner);