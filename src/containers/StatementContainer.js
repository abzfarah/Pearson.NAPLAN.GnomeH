import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import {Button, Box, Heading, Paragraph, Footer, Form, FormField, Section, Tab, Tabs} from '../components/common';
import { RadioButton, MenuItem } from 'material-ui'
import { Checkbox, RadioButtonGroup, SelectField, TextField } from 'redux-form-material-ui'
import Toast from 'grommet/components/Toast';

import _ from 'lodash';

class StatementContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      currentSchool: {},
      statementData: {},
      form: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {

    data["securityLevel"] = parseInt(data["securityLevel"])   //Api expects securitylevel property to be an integer
    this.props.actions.submitStatement(data)
  }


  componentWillReceiveProps(nextProps) {
    debugger
    this.props.initialize(this.props.statement)
  }

  componentWillMount() {
    debugger
    this.props.initialize(this.props.statement)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, validated } = this.props
    let { currentSchool, statementData} = this.state

    return (
      <Box>     
      <Section className="test">
        <form>
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
             <Field name="isConfirmed"   component={Checkbox} label="I have read and accept the Principal responsibilities"/>
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
              <Field name="securityLevel"  ref="securityLevel"  disabled={pristine || submitting}  component={RadioButtonGroup}>
                <RadioButton value="1"   disabled={pristine || submitting} label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="2" disabled={pristine || submitting} label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="3" disabled={pristine || submitting} label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff" />
                <RadioButton value="4" disabled={pristine || submitting}  label="Other" />
              </Field><br/>
               <Field name="securityLevelOther" ref="securityLevelOther"  disabled={pristine || submitting}   component={TextField}/>
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
                      <Field name="firstName"  disabled={pristine || submitting}  component={TextField} hintText="First" floatingLabelText="First Name"
                        ref="firstName"/> <br/>
                      <Field name="lastName"  disabled={pristine || submitting}  component={TextField}  hintText="Last" floatingLabelText="Last Name"
                        ref="lastName"/><br/>
                      <Field name="email" disabled={pristine || submitting}   component={TextField} hintText="Email" floatingLabelText="Email"/>
                    </div>
                   <Box className="declaration" >
                      <Field name="isDeclared"   disabled={pristine || submitting} component={Checkbox} label="I declare that I am the Principal of the school detailed above."/>
                      <Field name="isCertified"   disabled={pristine || submitting}  component={Checkbox} label="I certify that the information provided on this form is correct."/>
                    </Box>
                 </Box>
                </Box>
             </Box>
          </Box>
        </Box>
        <Box className="button-group-padding">
          <div className="button-groups">
            <Button className="separate-button" type="button" secondary={true} label="Return" />  
            <Button className="separate-button" type="submit" disabled={submitting} primary={true } label="Submit"  />
          </div>
       </Box>
      </form>
      </Section>
    </Box>  
    )
  }
}


const validate = values => {
  const errors = {}
  function isNumeric(n) {
       return n && /^\d+$/.test(n);
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if(isNumeric(values.firstName)) {
    errors.firstName = 'Must not contain a number'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if(isNumeric(values.lastName)) {
    errors.lastName = 'Must not contain a number'
  }

  if (!values.isDeclared) {
    errors.isDeclared = 'Required'
  } else if(isNumeric(values.isDeclared)) {
    errors.isDeclared = 'Must declare'
  }

  if (!values.isCertified) {
    errors.isCertified = 'Required'
  } else if(isNumeric(values.isDeclared)) {
    errors.isCertified = 'Must certify'
  }

  return errors
}

const form = reduxForm({
  form: 'Statement',
  validate
});

export default connect(null, null)(form(StatementContainer)); 