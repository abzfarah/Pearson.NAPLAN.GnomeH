import React from 'react'

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '../../../components/Table'

const data = [
  {
    task: 'Statement of Compiance',
    requirement: 'Required for all schools',
    due: 'Friday, 26 February 2016',
    status: 'Complete'
  },
  {
    task: 'Authorised Staff',
    requirement: 'Required for all schools',
    due: 'Friday, 26 February 2016',
    status: 'Complete'
  },
  {
    task: 'School Details',
    requirement: 'Required for all schools',
    due: 'Friday, 26 February 2016',
    status: 'Complete'
  },
  {
    task: 'Alternative Test Order Format',
    requirement: 'Optional',
    due: 'Friday, 26 February 2016',
    status: 'Complete'
  },
  {
    task: 'Student Registration data',
    requirement: 'Independant schools only',
    due: 'Friday, 26 February 2016',
    status: 'Incomplete'
  }
]

class SummaryTable extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px'
    }
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    })
  };

  handleChange = (event) => {
    this.setState({ height: event.target.value })
  };

  render () {
    return (
      <Table>
        <TableHead className="summary-head">
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Requirement</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => {
            return (
              <TableRow key={n.task}>
                <TableCell>{n.task}</TableCell>
                <TableCell>{n.requirement}</TableCell>
                <TableCell>{n.due}</TableCell>
                <TableCell>{n.status}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}
export default SummaryTable
