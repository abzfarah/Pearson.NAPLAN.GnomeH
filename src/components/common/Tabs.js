import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Intl from './utils/Intl';
import Box from './Box';
import CSSClassnames from './utils/CSSClassnames';
import { push } from 'react-router-redux';

const CLASS_ROOT = CSSClassnames.TABS;

export default class Tabs extends Component {

  constructor(props, context) {
    super(props, context);
    this._activateTab = this._activateTab.bind(this);

    this.state = {
      activeIndex: 0,
      justify: props.justify
    };
  }

  _activateTab (index) {
    this.setState({ activeIndex: index });
    if (this.props.onActive) {
      this.props.onActive(index);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.activeIndex || 0 === nextProps.activeIndex) &&
      this.state.activeIndex !== nextProps.activeIndex) {
      this.setState({activeIndex: nextProps.activeIndex});
    }
  }

  render () {
    let classes = classnames(
      CLASS_ROOT,
      this.props.className,
      {
        [`${CLASS_ROOT}--justify-${this.props.justify}`]: this.props.justify,
        [`${CLASS_ROOT}--responsive`]: this.props.responsive
      }
    );

    var activeContainer;
    var activeTitle;

    var tabs = React.Children.map(this.props.children, function(tab, index) {

      var tabProps = tab.props || tab._store.props || {};

      var isTabActive = index === this.state.activeIndex;

      if (isTabActive) {
        activeContainer = tabProps.inner;
        activeTitle = tabProps.title;
      }

      return React.cloneElement(tab, {
        active: isTabActive,
        id: 'tab-' + index,
        onRequestForActive: function () {
          this._activateTab(index);
        }.bind(this)
      });
    }.bind(this));

    var i = this.state.activeIndex;
    i = i.toString();

    //TODO: Since there could be multiple Tabs on the page, we need a more
    //robust means of identifying the association between title and aria label.
    return (
      <div role="tablist">
        <ul className={classes}>
          {tabs}
        </ul>

      </div>
    );
  }
}

Tabs.propTypes = {
  activeIndex: PropTypes.number,
  justify: PropTypes.oneOf(['start', 'center', 'end']),
  responsive: PropTypes.bool
};

Tabs.contextTypes = {
  intl: PropTypes.object
};

Tabs.defaultProps = {
  initialIndex: 0,
  justify: 'center',
  responsive: true
};
