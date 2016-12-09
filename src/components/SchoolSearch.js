import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AutoComplete from '../components/common/AutoComplete'
import { bindActionCreators } from 'redux'
import * as searchSchoolActions from '../actions/schoolSearchActions'
import * as registrationActions from '../actions/registrationActions'

class SchoolSearch extends Component {
  constructor (props) {
    super(props)
    this.onUpdateInput = this.onUpdateInput.bind(this)
    this.onNewRequest = this.onNewRequest.bind(this)
    
    this.state = {
      schools: [],
      options: [],
      openSearch: false,
      selectedSchool: {},
      dataSource : [],
      term: ''
    }
  }

onUpdateInput (inputValue) {
  this.setState({	term: inputValue }, () => {
    this.performSearch(inputValue)
  })
}


onNewRequest (selectedSchool) {
  this.setState({ openSearch: false })
  const { schoolResults } = this.props
  const schools = schoolResults.schools
  const currentSchool = _.find(schools, { "centreName": selectedSchool})
  window.sessionStorage.setItem('currentSchool', currentSchool.centreCode)
  this.props.searchActions.selectSchool( currentSchool.centreCode)
  this.props.registrationActions.fetchApplication(currentSchool.centreCode)
  this.forceUpdate()
}

performSearch (term) {
  if (term !== '' && term.length > 3){
    this.props.searchActions.fetchSearch({ term })  
  }
}

  componentWillReceiveProps (nextProps) {
    if (!_.isEqual(this.props.singleSearchResult, nextProps.singleSearchResult)) {
      const schoolNames=_.map(nextProps.schoolResults.schools, 'centreName')
      const schools=_.map(nextProps.schoolResults.schools,_.partialRight(_.pick,['centreName','centreCode']))
      // ES6 Hint: Explicit property name not required for "schools" as it is the same name as the key
      this.setState({ 
        dataSource: schools,
        schools
      })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.openSearch !== nextProps.openSearch) return true
    if (this.state.term === '') return false
    if (this.state.term.length < 3) return false
    return true
  }

  render () {
    let { searchLoading } = this.props
    const iconStyle = {
      color: '#757575',
      backgroundColor: '#e3e0e0'
    }

    searchLoading = searchLoading ? 'loading' : 'hide'
    return (
      <AutoComplete
        fullWidth={ true}
        openSearch={this.props.openSearch}
        filter={AutoComplete.noFilter}
        searchText={this.state.term}
        dataSource={this.state.dataSource} 
        onUpdateInput={this.onUpdateInput}
        onNewRequest={this.onNewRequest}
        hintText="Search school"
      />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchActions: bindActionCreators(searchSchoolActions, dispatch),
    registrationActions: bindActionCreators(registrationActions, dispatch)   
  }
}

function mapStateToProps (state) {
  const { search, searchResults } = state
  const searchLoading = search.isLoading
  const singleSearchResult = searchResults[search.term] || {}

  const lastKey = _.findLastKey(searchResults)
  const schoolResults = searchResults[lastKey]


  return {
    singleSearchResult,
    schoolResults,
    searchLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolSearch)