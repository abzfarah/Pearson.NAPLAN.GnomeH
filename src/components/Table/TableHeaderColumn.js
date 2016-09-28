import React, {Component, PropTypes} from 'react';

function prepareStyles() {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i--) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  }

function getStyles(props, context) {
  const {tableHeaderColumn} = context.muiTheme;

  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: tableHeaderColumn.textColor,
      position: 'relative',
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2,
    },
  };
}

class TableHeaderColumn extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Number to identify the header row. This property
     * is automatically populated when used with TableHeader.
     */
    columnNumber: PropTypes.number,
    /**
     * @ignore
     * Not used here but we need to remove it from the root element.
     */
    hoverable: PropTypes.bool,
    /** @ignore */
    onClick: PropTypes.func,
    /**
     * @ignore
     * Not used here but we need to remove it from the root element.
     */
    onHover: PropTypes.func,
    /**
     * @ignore
     * Not used here but we need to remove it from the root element.
     */
    onHoverExit: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * The string to supply to the tooltip. If not
     * string is supplied no tooltip will be shown.
     */
    tooltip: PropTypes.string,
    /**
     * Additional styling that can be applied to the tooltip.
     */
    tooltipStyle: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
  };

  onMouseEnter = () => {
    if (this.props.tooltip !== undefined) {
      this.setState({hovered: true});
    }
  };

  onMouseLeave = () => {
    if (this.props.tooltip !== undefined) {
      this.setState({hovered: false});
    }
  };

  onClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event, this.props.columnNumber);
    }
  };

  render() {
    const {
      children,
      className,
      columnNumber, // eslint-disable-line no-unused-vars
      hoverable, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      onHover, // eslint-disable-line no-unused-vars
      onHoverExit, // eslint-disable-line no-unused-vars
      style,
      tooltip,
      tooltipStyle,
      ...other,
    } = this.props;


    const styles = getStyles(this.props, this.context);

    const handlers = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onClick: this.onClick,
    };

    let tooltipNode;


    return (
      <th
        className={className}
        style={Object.assign(styles.root, style)}
        {...handlers}
        {...other}
      >
        {children}
      </th>
    );
  }
}

export default TableHeaderColumn;
