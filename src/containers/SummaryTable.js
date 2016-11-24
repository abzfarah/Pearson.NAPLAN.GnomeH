import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  header: {
    background: 'rgb(100, 181, 246)',
    color: 'white'
  },
  rowText: {
    color: 'white',
  }
};

const tableData = [
  {
    task: "Statement of Compiance",
    requirement: 'Required for all schools',
    due: "Friday, 26 February 2016",
    status: "Complete"
  },
  {
    task: 'Authorised Staff',
    requirement: 'Required for all schools',
    due: "Friday, 26 February 2016",
    status: "Complete"
  },
  {
    task: 'School Details',
    requirement: 'Required for all schools',
    due: "Friday, 26 February 2016",
    status: "Complete"
  },
  {
    task: 'Alternative Test Order Format',
    requirement: 'Optional',
    due: "Friday, 26 February 2016",
    status: "Complete"
  },
  {
    task: 'Student Registration data',
    requirement: 'Independant schools only',
    due: "Friday, 26 February 2016",
    status: "Incomplete"
}
];

class SummaryTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table 
   
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader  className="pop" style={{backgroundColor:'rgb(100, 181, 246)', color: 'white',}}
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow   >
              <TableHeaderColumn   style={{ color: 'white'}}   tooltip="Task">Task</TableHeaderColumn>
              <TableHeaderColumn   style={{ color: 'white'}}   tooltip="Requirement">Requirement</TableHeaderColumn>
              <TableHeaderColumn   style={{ color: 'white'}}   tooltip="Due date">Due</TableHeaderColumn>
              <TableHeaderColumn   style={{ color: 'white'}}   tooltip="Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody className="pop"
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >

            {tableData.map( (row, index) => (
              <TableRow  className="pop" key={index} selected={row.selected}>
                <TableRowColumn         style={{ texAlign: 'center' }} >{row.task}</TableRowColumn>
                <TableRowColumn style={{ texAlign: 'center' }} >{row.requirement}</TableRowColumn>
                <TableRowColumn style={{ texAlign: 'center' }}>{row.due}</TableRowColumn>
                <TableRowColumn style={{ texAlign: 'center' }}>{row.status}</TableRowColumn>
              </TableRow>
              ))}

          </TableBody>
        </Table>

      </div>
    );
  }
}

export default SummaryTable