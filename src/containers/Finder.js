import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import Header from '../components/common/Header';
import Menu from '../components/common/Menu';
import Anchor from '../components/common/Anchor';
import Footer from '../components/common/Footer';
import Search from '../components/common/Search';
import Section from '../components/common/Section';
import Label from '../components/common/Label';
import Box from '../components/common/Box';



export default class Finder extends Component {

  constructor () {
    super();
    this._onScope = this._onScope.bind(this);
    this._onSearchDOMChange = this._onSearchDOMChange.bind(this);
  }

  componentDidMount () {
    this.refs.search.focus();
  }

  componentDidUpdate () {
    this.refs.search.focus();
  }

  _onScope (scope) {
    this.props.onScope(scope);
  }

  _onSearchDOMChange (event) {
    this.props.onSearch(event.target.value);
  }

  render () {
    let texture;
    let footer;
    let colorIndex = this.props.scope.colorIndex;
    const currentScope = this.props.scope.ou;
    let currentIcon;


    if (this.props.initial) {


    }


    return (
      <Section texture={texture} pad="none">

          <Search ref="search" inline={true} responsive={false} fill={true}
            size="medium" placeHolder="Search"
            defaultValue={this.props.searchText}
            onDOMChange={this._onSearchDOMChange} />

        {this.props.children}

      </Section>
    );
  }

};

Finder.propTypes = {

};

Finder.contextTypes = {

};
