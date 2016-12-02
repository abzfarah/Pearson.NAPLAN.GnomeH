import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { toastr } from 'react-redux-toastr'
import * as statementActions from '../../../actions'
import { Button, Box, Heading, Paragraph, Section } from '../../../components/common'
import { RadioButton } from 'material-ui'
import { Checkbox, RadioButtonGroup, TextField } from 'redux-form-material-ui'

class StatementContainer extends Component {
  constructor () {
    super()
    this.state = {
      currentSchool: {},
      statementData: {},
      open: false,
      nextLocation: '',
      isSchoolUser: true,
      isConfirmed: false,
      form: {}
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.routerWillLeave = this.routerWillLeave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleCancel = this.handleCancel.bind(this)

  }

  componentDidMount () {
    this.props.router.setRouteLeaveHook(
     this.props.route,
     this.routerWillLeave
    )
  }

  routerWillLeave (nextLocation) {
    if (!this.props.pristine) {
      return 'You have unsaved information, are you sure you want to leave this page?'
    }
  }

  handleFormSubmit (data) {
    data['securityLevel'] = parseInt(data['securityLevel'])   // WebApi expects securitylevel property to be an integer
    toastr.success('Success', 'Statement of compliance submitted')
    this.props.actions.submitStatement(data)
  }


  componentWillReceiveProps (nextProps) {
    if (!_.isEmpty(nextProps.statement)) {
      let level = nextProps.statement['securityLevel'].toString() 
      nextProps.statement['securityLevel'] = level
      if (!_.isEqual(this.props.statement, nextProps.statement)) {
        this.props.initialize(nextProps.statement)
      }
    }
  }

  componentWillMount () {
    const { statement: { isConfirmed }, statement } = this.props     // Check if form has already been submitted
    this.setState({ isConfirmed: isConfirmed })

    if (!_.isEmpty(statement)) {
      let level = statement['securityLevel'].toString() 
      statement['securityLevel'] = level
      this.props.initialize(statement)
    }
  }

  handleClose (hey) {
    return true
  }

  handleCancel () {
    this.setState({ open: false })
  };

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  render () {
    const { handleSubmit, pristine, reset, submitting, validated, invalid, isAdmin, otherDisabled } = this.props

    let { isConfirmed, open } = this.state

    return (
      <Box>
        <Section direction="row" className="test">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Box className="PartA">
              <Heading tag="h3">
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

            <Box colorIndex="light-1">
              <Box className="form-box">
                <Heading tag="h4">
                  Part A: Principal's Responsibilities
                </Heading>
                <Paragraph> Please read Principal's responsibilities</Paragraph>
              </Box>
              <Box className="man required">
                <Field name="isConfirmed" disabled={isConfirmed && !isAdmin} component={Checkbox} label="I have read and accept the Principal responsibilities"/>
              </Box>
            </Box>



            <Box className="PartA1" >

              <Box className="form-box" >
                <Heading tag="h4"> Part B: Security Storage Arrangement</Heading>

                <Box className="details-par">
                  <Paragraph className="details-par"> The VCAA will be conducting visits to schools to audit the storage facilities for the NAPLAN 2016 test materials.</Paragraph>
                  <Paragraph className="details-par"> Apart from when the tests are being administered, test materials are to be kept in a double secure area at all times. 
                              Please tick the option which best describes the
                              double secure storage arrangement for NAPLAN test materials at your school.
                  </Paragraph>
                </Box>



                <Paragraph className="required-field">Please select the option which best describes the two levels of security at your school </Paragraph>
                <Field name="securityLevel" ref="securityLevel" disabled={pristine} component={securityLevel =>
                  <RadioButtonGroup {...securityLevel}>
                    <RadioButton value="1" disabled={pristine} label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff"/>
                    <RadioButton value="2" disabled={pristine} label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff"/>
                    <RadioButton value="3" disabled={pristine} label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff" />
                    <RadioButton value="4" disabled={pristine} label="Other" />
                  </RadioButtonGroup>
                } /><br />

                <Field name="securityLevelOther" ref="securityLevelOther" disabled={otherDisabled} component={TextField} />
                <Paragraph className="details-par">
                  Please note:
                  While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
                  Security Log. The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
                </Paragraph>
              </Box>



              <Box className="PartA1">
                  <Box className="form-box">
                    <Heading tag="h4">
                    Part C: Principal's Declaration
                    </Heading>
                    <Box>
                      <div>
                        <Field name="firstName" disabled={pristine || submitting} component={TextField} hintText="First" floatingLabelText="First Name"
                          ref="firstName" /> <br />
                        <Field name="lastName" disabled={pristine || submitting} component={TextField} hintText="Last" floatingLabelText="Last Name"
                          ref="lastName" /><br />
                        <Field name="email" id="email" disabled={pristine || submitting} component={TextField} hintText="Email" floatingLabelText="Email" />
                      </div>
                      <Box className="declaration required" >
                        <Field name="isDeclared" ref="isDeclared" disabled={pristine || submitting} component={Checkbox} label="I declare that I am the Principal of the school detailed above."/>
                        <Field name="isCertified"ref="isCertified"disabled={pristine || submitting} component={Checkbox} label="I certify that the information provided on this form is correct."/>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </Box>

























            <Box className="button-group-padding">
              <div className="button-groups">
                <Button className="separate-button" type="button" secondary={true} label="Return" />  
                <Button className="separate-button" type="submit" disabled={invalid || (isConfirmed && !isAdmin)} primary={true } label="Submit"  />
              </div>
            </Box>



          </form>
        </Section>
      </Box>
    )
  }
}

StatementContainer.contextTypes = {
  router: React.PropTypes.object
}

const validate = values => {
  const errors = {}
  function isNumeric (n) {
    return n && !/[^a-zA-Z]/.test(n)
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  } else if (values.email.length > 50) {
    errors.email = 'Email must not exceed 50 characters'
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!isNumeric(values.firstName)) {
    errors.firstName = 'Must not contain a number'
  } else if (values.firstName.length > 50) {
    errors.firstName = 'First name must not exceed 50 characters'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (!isNumeric(values.lastName)) {
    errors.lastName = 'Must not contain a number'
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Last name must not exceed 50 characters'
  }

  if (values.securityLevel === '0') {
    errors.securityLevel = 'Required'
  } else if (values.securityLevelOther !== '' && values.securityLevel !== '4') {
    errors.securityLevel = 'Please clear text field or select "other"'
  } else if (isNumeric(values.securityLevel)) {
    errors.securityLevel = 'Must choose security level'
  }

  if (!values.isConfirmed) {
    errors.isConfirmed = 'Required'
  } else if (!isNumeric(values.isConfirmed)) {
    errors.isConfirmed = 'Must confirm'
  }

  if (!values.isDeclared) {
    errors.isDeclared = 'Required'
  } else if (!isNumeric(values.isDeclared)) {
    errors.isDeclared = 'Must declare'
  }
  if (!values.isCertified) {
    errors.isCertified = 'Required'
  } else if (!isNumeric(values.isDeclared)) {
    errors.isCertified = 'Must certify'
  }
  return errors
}


const selector = formValueSelector('Statement')

// eslint-disable-next-line no-class-assign
StatementContainer = reduxForm({
  form: 'Statement',
  validate
})(StatementContainer)

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(statementActions, dispatch)
  }
}

function mapStateToProps (state, ownProps) {
  const securityLevel = selector(state, 'securityLevel')
  const otherDisabled = securityLevel === '4'  // If "other" is not selected, disable its corresponding text field
  var unsaved = ownProps.unsaved

  return {
    otherDisabled,
    unsaved
  }
}

// eslint-disable-next-line no-class-assign
StatementContainer = connect(mapStateToProps, mapDispatchToProps)(StatementContainer)

export default StatementContainer
