import React, { Component, PropTypes } from 'react';
import SchoolList from './SchoolList';


export default class Schools extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filter: this._filterForSearch(props.searchText)
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      var filter = this._filterForSearch(nextProps.searchText);
      this.setState({filter: filter});
    }
  }

  _filterForSearch (searchText) {
    let filter;
    if (searchText) {
      if (searchText[0] === '(') {

        filter = searchText;
      } else {

        filter = `(&(|(${state.schools.name}` +
          `=*${searchText}*)(${state.schools.id}` +
          `=*${searchText}*)))`;
      }
    }
    return filter;
  }

  render () {
    return (
      <SchoolList
        filter={this.state.filter} onSelect={this.props.onSelect} />
    );
  }

};

Schools.propTypes = {
  searchText: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};
