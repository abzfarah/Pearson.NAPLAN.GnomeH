import React, {Component, PropTypes} from 'react';
import StepConnector from './StepConnector';

const getStyles = (props) => {
  const {orientation} = props;
  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignContent: 'center',
      alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      justifyContent: 'flex-start',
      paddingTop: 20,
    },
  };
};

var mapTabs = {
  summary: 0,
  statement: 1,
  authorisedstaff: 2,
  schooldetails: 3,
  alternativeTestFormatOrder: 4,
  studentRegistrationData: 5
}

var mapTabtoClaim = {
  "0": "home",
  "1": "soc",
  "2": "authorizedStaff",
  "3": "schooldetails",
  "4": "alternativeTestFormatOrder",
  "5": "studentRegistrationData"
}

var mapClaims = {
  soc: mapTabs["statement"],
  authorisedstaff: mapTabs["authorizedStaff"],
  schooldetails: mapTabs["schooldetails"],
  alternativeTestFormatOrder: mapTabs["alternativeTest"],
  studentRegistrationData: mapTabs["studentRegistration"]
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
  };

  static defaultProps = {
    orientation: 'horizontal',
    linear: true,
  };

  static contextTypes = {muiTheme: PropTypes.object.isRequired};

  static childContextTypes = {stepper: PropTypes.object};

  getChildContext() {
    const {orientation} = this.props;
    return {stepper: {orientation}};
  }

  render() {
    const {
      activeStep,
      children,
      linear,
      style,
      claims
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const menu = []

    /**
     * One day, we may be able to use real CSS tools
     * For now, we need to create our own "pseudo" elements
     * and nth child selectors, etc
     * That's what some of this garbage is for :)
     */
    const steps = React.Children.map(children, (step, index) => {

      const hasClaim = claims[mapTabtoClaim[index]];
      const controlProps = {index};

      if (activeStep === index) {
        controlProps.active = true;
      } else if (linear && activeStep > index) {
        controlProps.completed = true;
      } else if (linear && activeStep < index) {
        controlProps.disabled = true;
      }

      if (index + 1 === children.length) {
        controlProps.last = true;
      }

      return [
        React.cloneElement(step, Object.assign(controlProps, step.props, {hasClaim: hasClaim})),
      ];
    });

    _.forEach(steps, function(step, index) {
          if (step.props.hasClaim == true ) {
              menu.push(step)
          }
          else if (step.props.index == 0 || step.props.index == 3) {
             menu.push(step)
          }
      });

    return (
      <div style={prepareStyles(Object.assign(styles.root, style))}>
        {menu}
      </div>
    );
  }
}

export default Stepper;
