import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr'
import * as detailsActions from '../actions';
import {Button, Box, Heading, Paragraph, Footer, Form, List, ListItem, FormField, Select, Section, Tab, Tabs} from '../components/common';
import { RadioButton, MenuItem } from 'material-ui'
import SelectField from 'material-ui/SelectField'
import { Checkbox, RadioButtonGroup, TextField } from 'redux-form-material-ui'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {
  getFormValues,
  getFormSyncErrors,
  isDirty,
  isPristine,
  isValid,
  isInvalid
} from 'redux-form'

class SchoolDetailsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      schoolData: {},
      schoolDetails: {},
      form: {},
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.routerWillLeave = this.routerWillLeave.bind(this)
  }

  routerWillLeave(nextLocation) {
      // return false to prevent a transition w/o prompting the user,
      // or return a string to allow the user to decide:
      if (1)
        return 'Your work is not saved! Are you sure you want to leave?'
    }
  handleFormSubmit(data) {


    toastr.success('Success', 'School details submitted')
    this.props.actions.submitDetails(data)
  }

  componentWillReceiveProps(nextProps) {
     if (!_.isEqual(this.props.schoolDetails, nextProps.schoolDetails)) {

        this.props.initialize(nextProps.schoolDetails)
     }
  }

  componentWillMount() {
    debugger
    this.props.initialize(this.props.schoolDetails)
  }

  render() {
    let { currentSchool, schoolDetails } = this.props
    const { handleSubmit, pristine, reset, submitting, validated, invalid } = this.props
    const { centreCode, centreName, deliveryAddress1, deliveryAddress2, deliveryPostcode, deliverySchoolName,
            deliveryState, deliverySuburb, dsFax, dsPhone, email, post_address_line1, reportState,
            reportSuburb, requestPackingOrder } = this.props.schoolDetails 

    return (
        <Box>  
          <Section className="test">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Box>
              <Heading tag="h2">
                <div className="numberCircle">3</div>
                <span className="sd_hColor">School Details</span>
              </Heading>
              <Paragraph>
                Principals are responsible for the security of the NAPLAN test materials and for the administration of the tests. Principals are required to submit an annual Statement of Compliance,
                indicating their understanding of the VCAA’s requirements in relation to test security and administration.
              </Paragraph>
              <Paragraph>
                While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
                Security Log. The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
              </Paragraph>
              <Paragraph>
                <span className="sd_note">NOTE: Fields marked with <span className="colorRed">*</span> or <span className="sd_fieldRequired">This field is required</span>{` in the forms below are required`}</span>
              </Paragraph>
            </Box>
            <Box direction="row" className="boxRow">
              <Box className="sd_boxLeft sd_readBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part A: Test Material Delivery (Site Address)</Heading>
                <Box className="sd_boxList">
                  <List>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Code</span>
                        <span className="secondary">{centreCode}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">{centreName}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 1</span>
                        <span className="secondary">{deliveryAddress1}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 2</span>
                        <span className="secondary">{deliveryAddress2}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Suburb</span>
                        <span className="secondary">{deliverySuburb}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Postcode</span>
                        <span className="secondary">{deliveryPostcode}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">State</span>
                        <span className="secondary">{deliveryState}</span>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box className="sd_boxRight sd_readBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part B: Reporting Material Delivery (Site Address)</Heading>
                <Box className="sd_boxList">
                  <List>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Code</span>
                        <span className="secondary">{centreCode}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">{centreName}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 1</span>
                        <span className="secondary">{deliveryAddress1}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 2</span>
                        <span className="secondary">{deliveryAddress2}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Suburb</span>
                        <span className="secondary">{reportSuburb}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Postcode</span>
                        <span className="secondary">{deliveryPostcode}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">State</span>
                        <span className="secondary">{deliveryState}</span>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
            <Box direction="row" className="boxRow">
              <Box className="sd_boxLeft sd_readBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part C: Data Services</Heading>
                <Box className="sd_boxList">
                  <List>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Code</span>
                        <span className="secondary">{centreCode}</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">{centreName}</span>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>

            <Box direction="row" className="boxRow">
              <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part D: Review School Details</Heading>
                <div>
                  <Box>
                    <div>
                      <Field name="phone" ref="phone" component={TextField} hintText="Phone" floatingLabelText="Phone"/> <br/>
                      <Field name="fax" ref="fax" component={TextField}  hintText="Fax" floatingLabelText="Fax"/><br/>            
                    </div>
                 </Box>
                </div>
                <br/>
                <Box direction="row">
                   <Box className="declaration" >
                      <Field name="reviewed"  ref="reviewed"  component={Checkbox} label="Details have been reviewed and are correct."/>
                    </Box>
                </Box>
              </Box>

               <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part E: Booklet Packing Order</Heading>
                <Paragraph>
                  By default, test booklets will be packed in order of year level, home group and surname as per
                  the data provided by each school, or supplied by their jurisdictional authority. For schools who wish to
                  receive their test materials in another order, please briefly describe your request below. If you do not
                  require a special test packing arrangement no action needs to be taken.
                </Paragraph>
                <Box direction="row">
                  <Field name="requestPacking"  ref="requestPacking"  component={Checkbox} label=" I request a custom packing order for the NAPLAN tests. Details of this request are provided below (e.g. Year 7 are to be packed aphabetically only and not by home group)."/>
                </Box>
                <Box direction="row">
      
                  <Field  component={SelectField}>
                    <MenuItem value={'0'} primaryText="Tony Allen"/>
                    <MenuItem value={'1'} primaryText="Mike Conley"/>
                    <MenuItem value={'2'} primaryText="Omar Remmy"/>
                  </Field> 

                </Box>

                <Field name="requestDetails" component={requestDetails =>
                      <TextField 
                        hintText = "Details of request"
                        floatingLabelText="Details"
                        {...requestDetails} />   
                    }/>
               </Box>
            </Box>

      
    
            <Box className="button-group-padding">
              <div className="button-groups">
                <Button className="separate-button" type="button" secondary={true} label="Return" />  
                <Button className="separate-button" type="submit" disabled={invalid} primary={true} label="Submit"  />
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
      return n && /^[0-9 ]+$/g.test(n);
  }
  if (!values.reviewed) {
    errors.reviewed = 'Must declare'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if(!isNumeric(values.phone)) {
    errors.phone = 'Must be a number'
  } else if(values.phone > 50) {
      errors.phone = 'Must not exceed 50 characters'
  }
  if (!values.fax) {
    errors.fax = 'Required'
  } else if(!isNumeric(values.fax)) {
    errors.fax = 'Must be a number'
  } else if(values.fax.length > 50) {
      errors.fax = 'Must not exceed 50 characters'
  }
  return errors
}


const selector = formValueSelector('SchoolDetails')

SchoolDetailsContainer = reduxForm({
  form: 'SchoolDetails',
  validate  
})(SchoolDetailsContainer)

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(detailsActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {


    return {
        
    };
}

SchoolDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(SchoolDetailsContainer)

export default SchoolDetailsContainer