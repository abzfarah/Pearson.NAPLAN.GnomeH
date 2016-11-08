import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import { RadioButton, MenuItem } from 'material-ui'
import { Checkbox, RadioButtonGroup, SelectField, TextField } from 'redux-form-material-ui'
import {Button, Box, Heading, Paragraph, Footer, Form, FormField, Section, Tab, Tabs} from '../common'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../common/Table';
import { validate } from "../utils/validation"



class Statement extends Component {

    constructor() {
    super();

    this.state = {
      currentSchool: "",
      statementData: {}
    }
  }
  

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

    if ( !_.isEqual(this.state.statementData , nextProps.statementData) ) {
        this.setState({ statementData: nextProps.statementData  })
        this.props.initialize(nextProps.statementData);  
    }
  }

  componentWillMount() {
    
 }

  render() {

  const { handleSubmit, pristine, reset, submitting } = this.props

  debugger;

    return (

   <Box className="form-container">     
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
             <Field name="isConfirmed"  component={Checkbox} label="I have read and accept the Principal responsibilities"/>
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
              <Field name="securityLevel" component={RadioButtonGroup}>
                <RadioButton value="0"   label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="1" label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff"/>
                <RadioButton value="2" label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff" />
                <RadioButton value="3" label="Other" />
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
                      <Field name="firstName" component={TextField} hintText="First" floatingLabelText="First Name"
                        ref="firstName"/> <br/>
                      <Field name="lastName" component={TextField}  hintText="Last" floatingLabelText="Last Name"
                        ref="lastName"/><br/>
                      <Field name="email" component={TextField} hintText="Email" floatingLabelText="Email"/>
                    </div>
                   <Box className="declaration" >
                      <Field name="isDeclared" component={Checkbox} label="I declare that I am the Principal of the school detailed above."/>
                      <Field name="isCertified" component={Checkbox} label="I certify that the information provided on this form is correct."/>
                    </Box>
                 </Box>
                </Box>
             </Box>

             <Box className="statement-button">
                <div className="button-groups">
                      <button className="submit-button grommetux-button grommetux-button--secondary" type="button">Return</button>
                      <button className="submit-button grommetux-button grommetux-button--primary" type="submit">Submit</button>
                </div>
              </Box>
          </Box>
        </Box>
        </form>
      </Section>
    </Box>  
    )
  }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
Statement = reduxForm({
  form: 'Statement',
  validate,
  fields: ['email']
  
})(Statement)



export default Statement