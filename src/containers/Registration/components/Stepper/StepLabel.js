import React, { Component, PropTypes } from 'react'
import { orange400, green500 } from 'material-ui/styles/colors'


import AlertWarning from '../../../../components/common/svg-icons/alert/warning'
import CheckCircle from '../../../../components/common/svg-icons/action/check-circle'
import ActionHome from '../../../../components/common/svg-icons/action/home'
import CSSClassnames from '../../../../components/common//utils/CSSClassnames';



import classnames from 'classnames'
const CLASS_ROOT = CSSClassnames.TABLE


const getStyles = ({ active, completed, disabled }, { muiTheme, stepper }) => {
  const {
    textColor,
    disabledTextColor,
    iconColor,
    inactiveIconColor
  } = muiTheme.stepper
  const { orientation } = stepper

  const styles = {
    root: {
      height: orientation === 'horizontal' ? 79 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14,
      display: 'block',
      paddingTop: 13,
      paddingBottom: 12
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 34,
      height: 24
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 8,
      width: 34,
      margin: 'auto',
      paddingBottom: 7
    }
  }

  const iconStyles = {
    marginRight: 24
  }

  if (active) {
    styles.root.fontWeight = 500
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor
    styles.root.color = disabledTextColor
    styles.root.cursor = 'not-allowed'
  }

  return styles
}

class StepLabel extends Component {
  static muiName = 'StepLabel';

  static propTypes = {
    /**
     * Sets active styling. Overrides disabled coloring.
     */
    active: PropTypes.bool,
    /**
     * The label text node
     */
    children: PropTypes.node,
    /**
     * Sets completed styling. Overrides disabled coloring.
     */
    completed: PropTypes.bool,
    /**
     * Sets disabled styling.
     */
    disabled: PropTypes.bool,
    /**
     * The icon displayed by the step label.
     */
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number
    ]),
    /**
     * @ignore
     */
    last: PropTypes.bool,
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    stepper: PropTypes.object
  }

  renderIcon (completed, icon, styles, index) {
    const iconType = typeof icon

    if (iconType === 'number' || iconType === 'string') {
      if (icon === 1) {
        return (
          <ActionHome
            color={green500}
          />
        )
      } else if (completed) {
        return (
          <CheckCircle
            color={green500}
          />
        )
      }

      return (
        <AlertWarning color={orange400} />
      )
    }

    return icon
  }

  render () {
    const {
      active, // eslint-disable-line no-unused-vars
      children,
      completed,
      icon: userIcon,
      last, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props

    const { prepareStyles } = this.context.muiTheme
    const styles = getStyles(this.props, this.context)
    const icon = this.renderIcon(completed, userIcon, styles)

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--step-active`]: active
      }
    );
    return (
      <span style={prepareStyles(Object.assign(styles.root, style))} {...other}>
        {icon && (
          <span style={prepareStyles(styles.iconContainer)}>
            { icon }
          </span>
        )}

        <div className="step-tab">
          { children }
        </div>

      </span>
    )
  }
}

export default StepLabel
