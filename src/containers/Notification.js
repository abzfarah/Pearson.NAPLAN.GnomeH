import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Text from './Text'
export default class Notification extends React.Component {

  render() {

   const { open, handleCancel, handleContinue } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleCancel}
      />,
      <FlatButton
        label="Continue"
        primary={true}
        onTouchTap={handleContinue}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={open}

        >
          You have unsaved data. Discard changes?
        </Dialog>
      </div>
    );
  }
}