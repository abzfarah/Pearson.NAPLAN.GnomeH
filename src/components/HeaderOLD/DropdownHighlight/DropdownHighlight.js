import React, { PropTypes } from 'react';
import styles from './DropdownHighlight.styl';
import classNames from 'classnames/bind';

const cx = styles::classNames;

const DropdownHighlight = ({ data, parentClass, closeDropdowns }) =>
  <div
    className={cx({
      highlight: parentClass !== 'moreDropdown',
      moreHighlight: parentClass === 'moreDropdown'
    })}
  >
    {data.componentTitle ?
      <h4
        className={cx('section-title')}
        dangerouslySetInnerHTML={{ __html: data.componentTitle }}
      >
      </h4>
      : null
    }
    <a
      href={data.link}
      onClick={closeDropdowns}
      className={cx('content')}
      rel={data.external ? 'external' : null}
    >
      <img src={data.thumbnail} alt={data.title} />
      <h5 className={cx('title')}>{data.title}</h5>
      {data.excerpt
        ? <p className={cx('text')}>{data.excerpt}</p>
        : null
      }
    </a>

  </div>
;

DropdownHighlight.propTypes = {
  data: PropTypes.object,
  parentClass: PropTypes.string,
  closeDropdowns: PropTypes.func
};

export default DropdownHighlight;
