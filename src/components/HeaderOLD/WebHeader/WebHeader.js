import React, { Component, PropTypes } from 'react';
import Head from '../Head';
import Item from '../Item';
import defaultMenuItems from '../data/menu-items.json';
import styles from './WebHeader.styl';
import classNames from 'classnames/bind';
import cxN from 'classnames';

import Props from '../../utils/Props';
import CSSClassnames from '../../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.HEADERS;

const cx = styles::classNames;

class WebHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    menuItems: PropTypes.array,
    theme: PropTypes.oneOf(['light', 'gray', 'dark']),
    featuredEnable: PropTypes.bool,
    featuredLink: PropTypes.string,
    featuredText: PropTypes.string,
    breakpoint: PropTypes.number
  };

  static defaultProps = {
    className: '',
    children: null,
    menuItems: defaultMenuItems,
    theme: 'light',
    featuredEnable: true,
    featuredLink: 'https://auth0.com/jobs',
    breakpoint: 992
  };

  state = {
    navbarDropdownIsOpen: false,
    mobileState: true
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setHeightDropdown = () => {
    const height = this.state.mobileState ? `${window.innerHeight - 75}px` : '';
    this.refs.dropdownContent.style.height = height;
  }

  handleResize = () => {
    const mobileState = window.innerWidth < this.props.breakpoint;
    this.setState({ mobileState }, () => {

      this.setHeightDropdown();
    });
  }

  navbarDropdownHandler = () => {
    this.setState({ navbarDropdownIsOpen: !this.state.navbarDropdownIsOpen });
  }


  render() {
    const {
      className,
      children,
      menuItems,
      theme,
      featuredEnable,
      featuredLink,
      featuredText
    } = this.props;
    const { navbarDropdownIsOpen, mobileState, focusable } = this.state;


    const renderedMenuItems = menuItems.map(item =>
      <Item
        key={item.position + item.id}
        item={item}
        theme={theme}
        simpleList={item.simpleList}
        mobile={mobileState}
      />
    );

    return (
      <header
        className={cx('header', className, {
          'is-dropdown-open': navbarDropdownIsOpen,
          focusable
        })}
      >
          <div className="container">
            <Head />
            <nav
              className={cx( {
                'is-dropdown-open': navbarDropdownIsOpen
              })}
              ref="dropdownContent"
            >
              <ul className={cx('navigation')}>{!!children ? children : renderedMenuItems}</ul>
            </nav>


          </div>

      </header>
    );
  }
}

export default WebHeader;
