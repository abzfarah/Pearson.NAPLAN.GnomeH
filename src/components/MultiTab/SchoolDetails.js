import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Box, Heading, Paragraph, Form, FormField, List, ListItem, Select, Section } from '../common'
import { RadioButton, MenuItem } from 'material-ui'
import { Checkbox, RadioButtonGroup, SelectField, TextField } from 'redux-form-material-ui'
import { validate } from "../utils/validation"


class SchoolDetails extends React.Component {

  constructor() {
      super();

      this.state = {
        currentSchool: {},
        schoolDetails: {
          centreCode: "",
          centreName: "",
          deliveryAddress1: "",
          deliveryAddress2: "",
          deliveryPostcode: "",  
          deliverySchoolName: "",
          deliveryState: "",
          deliverySuburb: "",
          dsFax: "",
          dsPhone: "",
          emai: "",
          fax: "",
          phone: "",
          post_address_line1: "",
          reportState: "",
          reportSuburb: "",
          requestPackingOrder: ""
        }
      }
  }
    
    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {

      if ( !_.isEqual(this.state. schoolDetails , nextProps. schoolDetails) ) {
          this.setState({  schoolDetails: nextProps. schoolDetails  })
          this.props.initialize(nextProps. schoolDetails);  
      }
    }

    render() {

      const { handleSubmit, pristine, reset, submitting} = this.props

      const { centreCode, centreName, deliveryAddress1, deliveryAddress2, deliveryPostcode, deliverySchoolName,
        deliveryState, deliverySuburb, dsFax, dsPhone, email, fax, phone, post_address_line1, reportState,
        reportSuburb, requestPackingOrder } = this.state.schoolDetails 

        return (
   <Box className="form-container">  
          <Section className="test">
            <form onSubmit={handleSubmit}>
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
                      <Field name="phone" component={TextField} hintText="Phone" floatingLabelText="Phone"
                        ref="firstName"/> <br/>
                      <Field name="fax" component={TextField}  hintText="Fax" floatingLabelText="Fax"
                        ref="fax"/><br/>
                    </div>
                 </Box>

                </div>
                <br/>
                <Box direction="row">
                   <Box className="declaration" >
                      <Field name="details" component={Checkbox} label="Details have been reviewed and are correct."/>
                    </Box>
                </Box>
              </Box>

              <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                <Heading tag="h5" className="sd_hColor">Part E: Booklet Packing Order</Heading>
                <Paragraph>
                  By default, test booklets will be packed in order of year level, home group and surname as per
                  the data provided by each school, or supplied by their jurisdictional authority. For schools who wish to
                  receive their test materials in another order, please briefly describe your request below. If you do not
                  require a special test packing arrangement no action needs to be taken.
                </Paragraph>
                <Box direction="row">
                  <Field name="isConfirmed"  component={Checkbox} label=" I request a custom packing order for the NAPLAN tests. Details of this request are provided below (e.g. Year 7 are to be packed aphabetically only and not by home group)."/>
                </Box>
                <Field name="requestDetails" component={TextField} hintText="Details" floatingLabelText="Details of request"/>              
              </Box>
            </Box>

            </form>  
                 <div className="button-groups">
                    <div>
                       <button className="submit-button" type="button">Return</button>
                      <button className="submit-button" type="submit">Submit</button>
                    </div>
                </div>
          </Section>

          
        </Box>

        )
    }
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SchoolDetails = reduxForm({
  form: 'SchoolDetails',
  validate,
  fields: ['email']
  
})(SchoolDetails)



export default SchoolDetails
