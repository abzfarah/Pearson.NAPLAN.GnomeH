import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AutoComplete   from 'material-ui/AutoComplete';
import JSONP  from 'jsonp';
import { bindActionCreators } from 'redux';
import * as searchSchoolActions from '../actions/schoolSearchActions'
import * as registrationActions from '../actions/registrationActions';
import { browserHistory } from 'react-router'
import { Box, Form, FormField , Search, Select } from '../components/common';
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};
  class SchoolSearch extends React.Component {
    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.onNewRequest   = this.onNewRequest.bind(this);
        this.state = {
            schools: [],
            options: [],
            selectedSchool: {},
            dataSource : [],
            term: "",
        }
    }

    onUpdateInput(inputValue) {
      this.setState({	term: inputValue }, () => { 
        this.performSearch(inputValue) 
      });
    }

    onNewRequest(selectedSchool) {
      const { schoolResults } = this.props
      const schools = schoolResults.schools

      const currentSchool = _.find(schools, { "centreName": selectedSchool });
      this.props.searchActions.selectSchool(currentSchool.centreCode)
      this.props.registrationActions.fetchStatement(currentSchool.centreCode)
      this.props.registrationActions.fetchSchoolDetails(currentSchool.centreCode)
      this.props.registrationActions.fetchRegistrationStatus(currentSchool.centreCode)
  }

    performSearch(term) {
      if( term !== '' && term.length > 3 ) {
        this.props.searchActions.fetchSearch({ term })  
      }
   }

    componentWillReceiveProps(nextProps) {
        if ( !_.isEqual( this.props.singleSearchResult, nextProps.singleSearchResult )) {
            const schoolNames = _.map(nextProps.singleSearchResult.schools, 'centreName');
            const schools     = _.map(nextProps.singleSearchResult.schools,_.partialRight(_.pick,['centreName','centreCode']));
            //ES6 Hint: Explicit property name not required for "schools" as it is the same name as the key
            this.setState({ 
              dataSource: schoolNames,
              schools  
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.term == "") return false
      if (this.state.term.length < 3 ) return false
      return true
    }

    render() {
      let { searchLoading } = this.props

        searchLoading = searchLoading ? "loading" : "hide"
        return (
          <div>
              <Box direction="row" className="search-box">
                  <AutoComplete 
                    fullWidth     = { true }
                    filter        = { AutoComplete.noFilter }
                    searchText    = { this.state.term }
                    dataSource    = { this.state.dataSource } 
                    onUpdateInput = { this.onUpdateInput }
                    onNewRequest  = { this.onNewRequest }
                    hintText      = "Search school"
                   />

                   <RefreshIndicator size={40} left={10} top={0} status={searchLoading} style={style.refresh} /> 
                                                

              </Box>
                 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
      searchActions: bindActionCreators(searchSchoolActions, dispatch),
      registrationActions: bindActionCreators(registrationActions, dispatch),
      
  };
}

function mapStateToProps(state) {
  const { search, searchResults} = state;
  const searchLoading = search.isLoading;
  const singleSearchResult = searchResults[search.term] || {};

  const lastKey = _.findLastKey(searchResults)
  const schoolResults = searchResults[lastKey]


  return {
      singleSearchResult,
      schoolResults,
      searchLoading
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SchoolSearch)
