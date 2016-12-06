import React, { Component, PropTypes } from 'react'
import StepConnector from './StepConnector'

const getStyles = (props) => {
  const { orientation } = props
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignContent: 'center',
      alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      justifyContent: 'flex-start',
      paddingTop: 20
    }
  }
}

var mapTabs = {
  summary: 0,
  statement: 1,
  authorisedstaff: 2,
  schooldetails: 3,
  alternativeTestFormatOrder: 4,
  studentRegistrationData: 5
}

var mapTabtoClaim = {
  '0': 'home',
  '1': 'soc',
  '2': 'authorizedStaff',
  '3': 'schooldetails',
  '4': 'alternativeTestFormatOrder',
  '5': 'studentRegistrationData'
}

var mapClaims = {
  soc: mapTabs['statement'],
  authorisedstaff: mapTabs['authorizedStaff'],
  schooldetails: mapTabs['schooldetails'],
  alternativeTestFormatOrder: mapTabs['alternativeTest'],
  studentRegistrationData: mapTabs['studentRegistration']
}

class Stepper extends Component {

  static propTypes = {
    /**
     * Set the active step (zero based index). This will enable `Step` control helpers.
     */
    activeStep: PropTypes.number,
    /**
     * Should be two or more `<Step />` components
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * If set to `true`, the `Stepper` will assist in controlling steps for linear flow
     */
    linear: PropTypes.bool,
    /**
     * The stepper orientation (layout flow direction)
     */
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object,

    hasClaim:  PropTypes.any
  };

  static defaultProps = {
    orientation: 'horizontal',
    linear: true
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    claims: PropTypes.object
  }

  static childContextTypes = {
    stepper: PropTypes.object
  }

  getChildContext () {
    const { orientation } = this.props
    return { stepper: { orientation } }
  }

  render () {
    const {
      activeStep,
      children,
      linear,
      style
    } = this.props

    const { claims } = this.context

    const { prepareStyles } = this.context.muiTheme
    const styles = getStyles(this.props, this.context)
    const Menu = []

    const Steps = React.Children.map(children, (Step, index) => {
      const hasClaim = claims[mapTabtoClaim[index]] || false
      const controlProps = { index }

      if (activeStep === index) {
        controlProps.active = true
      } else if (linear && activeStep > index) {
        controlProps.completed = true
      } else if (linear && activeStep < index) {
        controlProps.disabled = true
      }

      if (index + 1 === children.length) {
        controlProps.last = true
      }

      controlProps.hasClaim = hasClaim

      return [
        React.cloneElement(Step, Object.assign(controlProps, Step.props))
      ]
    })
    // eslint-disable-next-line no-undef
    _.forEach(Steps, function (Step, index) {
      if (Step.props.hasClaim === true) {
        Menu.push(Step)
      } else if (Step.props.index === 0 || Step.props.index === 3) {
        Menu.push(Step)
      }
    })

    return (
      <div style={prepareStyles(Object.assign(styles.root, style))}>
        {Menu}
      </div>
    )
  }
}

export default Stepper
