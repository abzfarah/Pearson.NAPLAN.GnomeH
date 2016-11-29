import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classnames from 'classnames';

 const styles = {
    text: {
      display: 'block',
      margin: 0,
    },
    display4: {
      fontSize: 112,
      fontWeight: 300,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      margin: '0.1em 0 0.2em',
    },
    display3: {
      fontSize: 56,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      margin: '0.1em 0 0.2em',   
    },
    display2: {
      fontSize: 45,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      margin: '0.1em 0 0.2em',
    },
    display1: {
      fontSize: 34,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      margin: '0.1em 0 0.2em',
    },
    headline: {
      fontSize: 24,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      margin: '0.1em 0 0.2em'
    },
    title: {
      fontSize: 21,
      fontWeight: 500,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    },
    subheading: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    },
    caption: {
      fontSize: 12,
      fontWeight: 300,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      color: 'black'
    },
    center: {
      textAlign: 'center',
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    gutterBottom: {
      marginBottom: '0.25em',
    },
    paragraph: {
      marginBottom: 16,
    },
    colorInherit: {
      color: 'inherit',
    },
    secondary: {
      color: 'black',
    },

};

export default function Text(props) {
  const {
    align,
    className: classNameProp,
    colorInherit,
    component: componentProp,
    gutterBottom,
    noWrap,
    paragraph,
    secondary,
    type,
    ...other
  } = props;



  const Component = paragraph ? 'p' : componentProp;

  return <Component {...other} />;
}

Text.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  colorInherit: PropTypes.bool,
  component: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subheading',
    'body2',
    'body1',
    'caption',
    'button',
  ]),
};

Text.defaultProps = {
  colorInherit: false,
  component: 'span',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  secondary: false,
  type: 'body1',
};

Text.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};