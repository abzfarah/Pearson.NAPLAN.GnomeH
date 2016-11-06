import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Button from './Button';
import CSSClassnames from './utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.TAB;

export default class Tab extends Component {

  constructor() {
    super();

    this._onClickTab = this._onClickTab.bind(this);
  }

  _onClickTab (event) {
    const { onRequestForActive } = this.props;
    if (event) {
      event.preventDefault();
    }
    onRequestForActive();
  }

  render () {
    const { active, className, id, title, ...props } = this.props;
    delete props.onRequestForActive;
    const classes = classnames(
      CLASS_ROOT, {
        [`${CLASS_ROOT}--active`]: active
      },
      className
    );


    return (
      <li {...props} className={classes} id={id} onClick={this._onClickTab}>
        <a ref={(ref) => this.tabRef = ref} role="tab"
          href="#"
          aria-expanded={active} aria-selected={active}
          className={CLASS_ROOT + "__link"} aria-labelledby={id}>
          <label className={CLASS_ROOT + '__label'} htmlFor={id}>
            {title}
          </label>
          <label className={CLASS_ROOT + '__subtitle'}  htmlFor={id}>
            {this.props.subtitle}
          </label>
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  active: PropTypes.bool,
  id: PropTypes.string,
  onRequestForActive: PropTypes.func // from Tabs
};