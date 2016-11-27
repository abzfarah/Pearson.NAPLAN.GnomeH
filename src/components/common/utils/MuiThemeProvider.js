import {Component, PropTypes} from 'react';
import getMuiTheme from './getMuiTheme';


import { create } from 'jss';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import jssPreset from 'jss-preset-default';


class MuiThemeProvider extends Component {

  static propTypes = {
    children: PropTypes.element,
    muiTheme: PropTypes.object,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired

  };


  getChildContext() {

    return {
      muiTheme: this.props.muiTheme || getMuiTheme()

    };
  }



  render() {
    return this.props.children;
  }
}

export default MuiThemeProvider;