import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import * as statementActions from '../../../actions'
import { Button, Box, Heading, Paragraph, Section } from '../../../components/common'
import { RadioButton } from 'material-ui'
import { Checkbox, RadioButtonGroup, TextField } from 'redux-form-material-ui'

class StudentRegistrationContainer extends Component {
  constructor () {
    super()
    this.state = {
    }
  }



  render () {

    return (
      <Box>
        <Section direction="row" className="test">
          <form>
            <Box>
              <Heading tag="h3">
                <div className="numberCircle">5</div>
                <span className="sd_hColor">Student Registration Data</span>
              </Heading>
              <Paragraph  className="details-par">
                Independent schools are required to supply their student enrolment data directly to the VCAA for the NAPLAN testing program.
              </Paragraph>
              <Paragraph  className="details-par">
                This data is required for all students who will participate in the NAPLAN tests in 2016. 
                Student background data, as required by the Ministerial Council on Education, Early Childhood Development and Youth Affairs (MCEECDYA) for national reporting, must be included in these student details data files. 
                Additional information, including the specifications for the data files and instructions for uploading can be found on the NAPLAN Administration page on the VCAA website.
              </Paragraph>
              <Paragraph  className="details-par">
                This website is now open for uploading student enrolment files. Please note that all files must be uploaded by the close of the period below:
              </Paragraph>
            </Box>

          </form>
        </Section>
      </Box>
    )
  }
}

StudentRegistrationContainer.contextTypes = {
  router: React.PropTypes.object
}


export default StudentRegistrationContainer
