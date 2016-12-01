import React, { Component } from 'react'
import { Box, Header } from '../../../components/common'

class SchoolName extends Component {
  render () {
    const { centreName, centreCode } = this.props.school
    let string = 'School Code: '
    var full
    if (centreCode !== undefined) {
      full = string + centreCode
    } else full = ''


    return (
      <Box direction="row" className="school-info">
        <Header className="school-name">
          { centreName }
        </Header>
        <Header size="small" className="school-code">
          {full}
        </Header>
      </Box>

    )
  }
}

export default SchoolName

