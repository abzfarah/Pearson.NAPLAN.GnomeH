import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from './utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.TABS;

var mapTabs = {
  summary: 0,
  statement: 1,
  authorisedstaff: 2,
  schooldetails: 3
}

export default class Tabs extends Component {

  constructor(props, context) {
    super(props, context);

    this._activateTab = this._activateTab.bind(this);

    this.state = {
      activeIndex: props.activeIndex,
      justify: props.justify
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
    const { children, className, justify, responsive, ...props } = this.props
    delete props.activeIndex;
    delete props.onActive;
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const activeIndex  = mapTabs[path];

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

      if (isTabActive) {
        activeContainer = tabProps.children;
        activeTitle = tabProps.title;
      }

      return React.cloneElement(tab, {
        active: isTabActive,
        id: `tab-${index}`,
        onRequestForActive: () => {
          this._activateTab(index);
        }
      });
    }, this);


    return (
      <div role='tablist'>
        <ul {...props} className={classes}>
          {tabs}
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