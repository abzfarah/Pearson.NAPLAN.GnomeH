import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';

class ConfirmationDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        }

    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />,
        ];

        return (

            <Dialog
                title="Delete school confirmation"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >
            </Dialog>
        )
    }
}