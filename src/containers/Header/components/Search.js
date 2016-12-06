import React from 'react'
import IconButton from '../../../components/common/IconButton'
import Box from '../../../components/common/Box'
import SchoolSearch from '../../../components/SchoolSearch'
import SchoolName from './SchoolName'
import ActionSearch from '../../../components/common/svg-icons/action/search'

export default class Search extends React.Component {
  static propTypes = {
    openSearch: React.PropTypes.bool,
    handleSearchClick: React.PropTypes.func,
    currentSchool: React.PropTypes.object
  }

  render () {
    const iconStyle = {
      color: '#757575',
      backgroundColor: '#e3e0e0'
    }
    return (
      <Box direction="row" className="search-header" pad="medium" wrap={true} align="center">
        <Box direction="row" className="" justify="start">
          <SchoolName school={this.props.currentSchool} />
        </Box>
        <div className="under" />
        <ul className="menu" />
        <Box direction="row" className="search-mary" justify="end">
          <SchoolSearch openSearch={this.props.openSearch} />
          <IconButton onClick={this.props.handleSearchClick}>
            <ActionSearch color={iconStyle.color} hoverColor="white" backgroundColor={iconStyle.backgroundColor} />
          </IconButton>
        </Box>
      </Box>
    )
  }
}