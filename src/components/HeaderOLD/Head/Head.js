import React, { PropTypes } from 'react';
import styles from './Head.styl';
import classNames from 'classnames/bind';

const cx = styles::classNames;

const Head = () =>

  <div className={cx('head')}>

    <h1 className={cx('brand')}>
      <a href="/" rel="home" className={cx('logo')}> </a>
    </h1>

  </div>;


export default Head;
