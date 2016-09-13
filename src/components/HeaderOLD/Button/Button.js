var React = require('react');
import classNames from 'classnames/bind';
import styles from './Button.styl';
const cx = classNames.bind(styles);
var blacklist = require('blacklist');

module.exports = React.createClass({

	propTypes: {
		className: React.PropTypes.string,
	},


	getDefaultProps () {
		return {
			type: 'default',
			size: 'default',
		};
	},

	render () {
		// classes
		var componentClass = cx(
			'button',
			'button-' + this.props.type,
			'button-' + this.props.size,
			this.props.className
		);

		// props
		var props = blacklist(this.props, 'type', 'size', 'className');
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		var tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	},
});
