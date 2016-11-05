import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import { RadioButton, MenuItem } from 'material-ui'
import { Checkbox, RadioButtonGroup, SelectField, TextField } from 'redux-form-material-ui'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../common/Table';
import { validate } from "../utils/validation"
import Tab from '../common/Tab'
import Tabs from '../common/Tabs'
import Section from '../common/Section'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Box from '../common/Box'
import Footer from '../common/Footer'
import Form from '../common/Form'
import Button from '../common/Button'
import FormField from '../common/FormField'


class Statement extends Component {

  componentDidMount() {
             
 }

  render() {

  const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <Section className="test">
        <form onSubmit={handleSubmit}>
        <Box className="PartA">
           <Heading tag="h2">
           <div className="numberCircle">1</div>
             Statement of Compliance
           </Heading>
           <Paragraph>
               Principals are responsible for the security of the NAPLAN test materials and for the administration of the tests. Principals are required to submit an annual Statement of Compliance,
               indicating their understanding of the VCAA’s requirements in relation to test security and administration.
           </Paragraph>
           <Paragraph>
               While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
               Security Log. The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
               Fields marked with * in the form below are required.
           </Paragraph>
        </Box>

        <Box colorIndex='light-1'>
          <Box className="form-box">
            <Heading tag="h4">
              Part A: Principal's Responsibilities
            </Heading>
            <Paragraph> Please read Principal's responsibilities</Paragraph>
          </Box>
          <Box className="man">
             <Field name="agree" component={Checkbox} label="I have read and accept the Principal responsibilities"/>
          </Box>
        </Box>

        <Box className="PartA1">
          <Box colorIndex='light-1'>
            <Box className="form-box">
              <Heading tag="h4"> Part B: Security Storage Arrangement</Heading>
              <Paragraph> The VCAA will be conducting visits to schools to audit the storage facilities for the NAPLAN 2016 test materials.</Paragraph>
              <Paragraph> Apart from when the tests are being administered, test materials are to be kept in a double secure area at all times. Please tick the option which best describes the
                         double secure storage arrangement for NAPLAN test materials at your school.
              </Paragraph>
              <Paragraph>Please select the option which best describes the two levels of security at your school </Paragraph>
              <Field name="delivery" component={RadioButtonGroup}>
                <RadioButton value="cabinet"   label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="safe" label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="container" label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff" />
                <RadioButton value="other" label="Other" />
              </Field><br/>
              <Paragraph>
                Please note:
                While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
                Security Log. The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
               </Paragraph>
            </Box>
          </Box>

          <Box className="PartA1">
              <Box colorIndex='light-1'>
                <Box className="form-box">
                  <Heading tag="h4">
                   Part C: Principal's Declaration
                  </Heading>
                  <Box>
                    <div>
                      <Field name="name" component={TextField} disabled={true} hintText="First" floatingLabelText="First Name"
                        ref="name"/> <br/>
                      <Field name="name" component={TextField} disabled={true} hintText="Last" floatingLabelText="Last Name"
                        ref="name"/><br/>
                      <Field name="email" component={TextField} disabled={true} hintText="Email" floatingLabelText="Email"/>
                    </div>
                   <Box className="declaration" >
                      <Field name="declare" component={Checkbox} label="I declare that I am the Principal of the school detailed above."/>
                      <Field name="certify" component={Checkbox} label="I certify that the information provided on this form is correct."/>
                    </Box>
                 </Box>
                </Box>

                <div className="statement-button-groups">
                    <div>
                      <button className="submit-button" type="button">Return</button>
                      <button className="submit-button" type="submit">Submit</button>
                    </div>

                </div>
             </Box>


          </Box>
        </Box>
        </form>
      </Section>
    )
  }
}

export default reduxForm({form: 'example', validate })(Statement)
