import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from './utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.TABS;

var mapTabs = {
  summary: 0,
  statement: 1,
  authorisedstaff: 2,
  schooldetails: 3,
  alternativeTestFormatOrder: 4,
  studentRegistrationData: 5
}

var mapTabtoClaim = {
  "0": "soc",
  "1": "authorizedStaff",
  "2": "schooldetails",
  "3": "alternativeTestFormatOrder",
  "5": "studentRegistrationData"
}

var mapClaims = {
  soc: mapTabs["statement"],
  authorisedstaff: mapTabs["authorizedStaff"],
  schooldetails: mapTabs["schooldetails"],
  alternativeTestFormatOrder: mapTabs["alternativeTest"],
  studentRegistrationData: mapTabs["studentRegistration"]
}


export default class Tabs extends Component {

  constructor(props, context) {
    super(props, context);
    this._activateTab = this._activateTab.bind(this);
    this.state = {
      activeIndex: props.activeIndex,
      justify: props.justify,
      claims: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.activeIndex || 0 === nextProps.activeIndex) &&
      this.state.activeIndex !== nextProps.activeIndex) {
      this.setState({activeIndex: nextProps.activeIndex});
    }


  }

  _activateTab (index) {
    this.setState({ activeIndex: index });
    if (this.props.onActive) {
      this.props.onActive(index);
    }
  }

  render () {
    const { children, className, claims, justify, responsive, ...props } = this.props
    delete props.activeIndex;
    delete props.onActive;
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const activeIndex  = mapTabs[path];
    const menu = []

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--justify-${justify}`]: justify,
        [`${CLASS_ROOT}--responsive`]: responsive
      },
      className
    );

    let activeContainer;
    let activeTitle;
    const tabs = React.Children.map(children, (tab, index) => {

    const tabProps = tab.props || tab._store.props || {};
    const isTabActive = index === activeIndex;
    const hasClaim = claims[mapTabtoClaim[index]];


    if (isTabActive) {
      activeContainer = tabProps.children;
      activeTitle = tabProps.title;
    }

    return React.cloneElement(tab, {
      hasClaim: hasClaim,
      active: isTabActive,
      id: `tab-${index}`,
      onRequestForActive: () => {
        this._activateTab(index);
      }
    });
  }, this);

    _.forEach(tabs, function(tab, index) {
          if (tab.props.hasClaim == true ) {
              menu.push(tab)
          }
          else if (tab.props.id == "tab-2") {
             menu.push(tab)
          }
      });


    return (
      <div role='tablist'>
        <ul {...props} className={classes}>
          {menu}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  activeIndex: PropTypes.number,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  responsive: PropTypes.bool,
  onActive: PropTypes.func,
  subtitle: PropTypes.func
};

Tabs.contextTypes = {
  intl: PropTypes.object
};

Tabs.defaultProps = {
  activeIndex: 0,
  justify: 'center',
  responsive: true
};