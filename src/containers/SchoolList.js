import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { headers, buildQuery, processStatus } from './Rest';
import List from '../components/common/List';
import Footer from '../components/common/Footer';
import SchoolListItem from './SchoolListItem';
import BusyListItem from './BusyListItem';

export default class SchoolList extends Component {

  constructor () {
    super();
    this._onSelect = this._onSelect.bind(this);
    this._search = this._search.bind(this);
    this._onSearchResponse = this._onSearchResponse.bind(this);
    this.state = {
      busy: false,
      results: []
    };
  }

  componentDidMount () {
    this._queueSearch(this.props.searchText);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.scope !== this.props.scope ||
      newProps.searchText !== this.props.searchText) {
      this._queueSearch(newProps.searchText);
    }
  }

  componentWillUnmount () {
    clearTimeout(this._searchTimer);
  }

  _onSearchResponse () {
    // don't keep result if we don't have search text anymore
      if (this.props.searchText) {
        let state = {error: null, busy: false};
        if (scope.ou === this.props.scope.ou) {
          state.results = response;
        }
        this.setState(state);
      }
  }

  _search () {

    const searchText = this.props.searchText;
    let filter;
    if (searchText[0] === '(') {
      // assume this is already a formal LDAP filter
      filter = searchText;
    } else {
      filter = this.props.scope.filterForSearch(searchText);
    }

  let params = {
    url: 'localhost:3000',
    base: `ou=${this.props.scope.ou},o=${config.organization}`,
  };
  const options = { method: 'GET', headers: headers };
  const query = buildQuery(params);
  fetch(`/schools`, options)
  .then(processStatus)
  .then(response => response.json())
  .then(response => {
      this._onSearchResponse(this.props.scope, response)
  })
  .catch(error => this.setState({results: [], error: error, busy: false}));



  }

  _queueSearch (searchText) {
    clearTimeout(this._searchTimer);
    if (! searchText) {
      this.setState({results: [], summaries: {}, busy: false});
    } else {
      this.setState({summaries: {}, busy: true});
      // debounce
      this._searchTimer = setTimeout(this._search, 500);
    }


  }

  _onSelect () {
    this.props.onSelect(item);
  }

  _onSelectScope () {
    this.props.onScope(scope);
  }

  render () {


    return (
      <div>


      </div>
    );
  }

};

SchoolList.propTypes = {
};
