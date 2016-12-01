import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import ButtonBase from '../ButtonBase'
import CSSClassnames from './utils/CSSClassnames'

const CLASS_ROOT = CSSClassnames.BUTTON

const BUTTON_ICON = `${CLASS_ROOT}-icon`
const BUTTON_LABEL = `${CLASS_ROOT}-icon--label`

/**
 * @see https://material.google.com/components/buttons.html
 *
 * ```js
 * import IconButton from 'material-ui/IconButton';
 *
 * const Component = () => <IconButton>delete</IconButton>;
 * ```
 */
export default class IconButton extends Component {
  static propTypes = {
    /**
     * The icon element. If a string is passed,
     * it will be used as a material icon font ligature.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    contrast: PropTypes.bool,
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * If false, the ripple effect will be disabled.
     */
    ripple: PropTypes.bool,
    /**
     * @ignore
     */
    theme: PropTypes.object,
  };

  static defaultProps = {
    contrast: false,
    disabled: false,
    ripple: true,
  };



  render() {
    const { accent, children, className, contrast,  ...other } = this.props;

    const classes = classnames(BUTTON_ICON, {
        [`${BUTTON_ICON}--accent`]: accent,
        [`${BUTTON_ICON}--contrast`]:  contrast
    }, className);


    return (
      <ButtonBase
        className={classes}
        centerRipple
        {...other}
      >
        <span >
          {typeof children === 'string' ?
            <span className="material-icons">{children}</span> : children
          }
        </span>
      </ButtonBase>
    );
  }
}
