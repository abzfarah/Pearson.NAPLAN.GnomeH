import React from 'react'
import IconButton from '../../../components/common/IconButton'
import Box from '../../../components/common/Box'
import SchoolSearch from '../../../components/SchoolSearch'
import SchoolName from './SchoolName'
import ActionSearch from '../../../components/common/svg-icons/action/search'

export default class Search extends React.Component {

  render () {
			 const iconStyle = {
      color: '#757575',
      backgroundColor: '#e3e0e0'
    }
    return (
      <Box direction="row" className="footerContainer numba1 first-header" wrap={true} align="center">
        <div className="under"></div>
        <ul className="menu"></ul>
									<Box direction="row" className="search-mary" justify="end">
											<SchoolSearch openSearch={this.props.openSearch}/> 
												<IconButton onClick={this.props.handleSearchClick}>
												<ActionSearch color={iconStyle.color} hoverColor="white" backgroundColor={iconStyle.backgroundColor} />
											</IconButton>
									</Box>	
        </Box>
    )
  }
}
				//			<Box justify="start">
				//					<SchoolName school={this.props.currentSchool} />
				//			</Box>
