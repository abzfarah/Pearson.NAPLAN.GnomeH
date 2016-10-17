// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

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


export default class SchoolSearch extends Component {



    return (
      <Section texture={texture} full={true} pad="none">

      </Section>
    );
  }

};

Finder.propTypes = {
  initial: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
};

Finder.contextTypes = {
  intl: PropTypes.object.isRequired
};
