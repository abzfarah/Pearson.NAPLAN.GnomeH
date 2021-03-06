import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Props from '../../utils/Props';
import Box from '../Box';
import Item from './Item';
import CSSClassnames from '../../utils/CSSClassnames';
import defaultMenuItems from './menu-items.json';

const CLASS_ROOT = CSSClassnames.HEADER;

export default class Header extends Component {

  constructor(props, context) {
    super(props, context);

    this._onResize = this._onResize.bind(this);
  }

  componentDidMount () {
    if (this.props.fixed) {
      this._alignMirror();
      window.addEventListener('resize', this._onResize);
    }
  }

  componentDidUpdate () {
    if (this.props.fixed) {
      this._alignMirror();
    }
  }

  componentWillUnmount () {
    if (this.props.fixed) {
      window.removeEventListener('resize', this._onResize);
    }
  }

  _onResize () {
    this._alignMirror();
  }

  _alignMirror () {
    var contentElement = ReactDOM.findDOMNode(this.contentRef);
    var mirrorElement = this.mirrorRef;



    // align the mirror height with the content's height
    var contentRect = contentElement.getBoundingClientRect();
    mirrorElement.style.height = `${Math.floor(contentRect.height)}px`;
  }

  render () {
    var classes = [CLASS_ROOT];
    var containerClasses = [`${CLASS_ROOT}__container`];
    var wrapperClasses = [`${CLASS_ROOT}__wrapper`];
    var other = Props.pick(this.props, Object.keys(Box.propTypes));
    if (this.props.fixed) {
      containerClasses.push(`${CLASS_ROOT}__container--fixed`);

      // add default color index if none is provided
      if (!this.props.colorIndex) {
        containerClasses.push(`${CLASS_ROOT}__container--fill`);
      }
    }
    if (this.props.float) {
      classes.push(`${CLASS_ROOT}--float`);
      containerClasses.push(`${CLASS_ROOT}__container--float`);
    }
    if (this.props.size) {
      classes.push(`${CLASS_ROOT}--${this.props.size}`);
      wrapperClasses.push(`${CLASS_ROOT}__wrapper--${this.props.size}`);
      // don't transfer size to Box since it means something different
      delete other.size;
    }
    if (this.props.splash) {
      classes.push(`${CLASS_ROOT}--splash`);
    }
    if (this.props.strong) {
      classes.push(`${CLASS_ROOT}--strong`);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.fixed) {
      return (
        <div className={containerClasses.join(' ')}>
          <div ref={ref => this.mirrorRef = ref}
            className={`${CLASS_ROOT}__mirror`} />
          <div className={wrapperClasses.join(' ')}>
            <Box ref={ref => this.contentRef = ref}
              tag={this.props.header} {...other} className={classes.join(' ')}>
              {this.props.children}
            </Box>
          </div>
        </div>
      );
    } else {
      return (
        <Box tag={this.props.header} {...other} className={classes.join(' ')}
          containerClassName={containerClasses.join(' ')}>
          {this.props.children}
        </Box>
      );
    }
  }

}

Header.propTypes = {
  fixed: PropTypes.bool,
  float: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  splash: PropTypes.bool,
  strong: PropTypes.bool,
  tag: PropTypes.string,
  menuItems: PropTypes.array,
  ...Box.propTypes
};

Header.defaultProps = {
  pad: { horizontal: 'none', vertical: 'none', between: 'small'},
  direction: 'row',
  align: 'center',
  responsive: false,
  tag: 'header',
  menuItems: defaultMenuItems,
};
