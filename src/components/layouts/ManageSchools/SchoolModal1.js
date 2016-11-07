import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Form from '../../common/Form'
import FormField from '../../common/FormField'
import TextField from '../../common/TextField'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Box from '../../common/Box'
import Paragraph from '../../common/Paragraph'
import CheckBox from '../../common/CheckBox'
import Label from '../../common/Label'
import Tiles from '../../common/Tiles'
import Tile from '../../common/Tile'
import List from '../../common/List'
import ListItem from '../../common/ListItem'
import Button from '../../common/Button'
import Anchor from '../../common/Anchor'
import Select from '../../common/Select'
import { orange500, blue500, black } from '../../utils/materialStyles/colors'

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: black,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class SchoolModal extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <Box className="sd_MainBox">
        <Box>
          <Heading tag="h2">
            <span className="sd_hColor">Add School</span>
          </Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box direction="row" className="boxRow">

            <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
              <Heading tag="h5" className="sd_hColor">Part A: School Details</Heading>
              <Field name="centreName" type="text" component={renderField} label="School Name" />
              <Field name="centreCode" type="text" component={renderField} label="School Code" />
              <Field name="sector" type="text" component={renderField} label="Sector" />
              <Field name="deecD_CODE" type="text" component={renderField} label="DEECD CODE" />
            </Box>

            <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
              <Heading tag="h5" className="sd_hColor">Part B: Data Service</Heading>
              <Field name="dscode" type="text" component={renderField} label="School CODE" />
              <Field name="dsName" type="text" component={renderField} label="School Name" />
              <Field name="dsPhone" type="text" component={renderField} label="Phone" />
              <Field name="dsEemail" type="text" component={renderField} label="Email" />
              <Field name="dsFax" type="text" component={renderField} label="Fax" />
            </Box>
          </Box>

          <Box direction="row" className="boxRow">
            <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
              <Heading tag="h5" className="sd_hColor">Part C: Test Material Delivery (Site Address) </Heading>
              <Field name="deliveryCode" type="text" component={renderField} label="School CODE" />
              <Field name="deliverySchoolName" type="text" component={renderField} label="School Name" />
              <Field name="deliveryAddress1" type="text" component={renderField} label="Address 1" />
              <Field name="deliveryAddress2" type="text" component={renderField} label="Address 2" />
              <Field name="deliverySuburb" type="text" component={renderField} label="Suburb" />
              <Field name="deliveryPostcode" type="text" component={renderField} label="Post Code" />
              <Field name="deliveryState" type="text" component={renderField} label="State" />
            </Box>

            <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
              <Heading tag="h5" className="sd_hColor">Part D: Reporting Material Delivery (Site Address)</Heading>
              <Field name="reportCODE" type="text" component={renderField} label="School Code" />
              <Field name="reportSchoolName" type="text" component={renderField} label="School Name" />
              <Field name="reportAddress1" type="text" component={renderField} label="Address 1" />
              <Field name="reportAddress2" type="text" component={renderField} label="Address 2" />
              <Field name="reportSuburb" type="text" component={renderField} label="Suburb" />
              <Field name="reportPostcode" type="text" component={renderField} label="Post Code" />
              <Field name="reportState" type="text" component={renderField} label="State" />
            </Box>
          </Box>
        </form>
      </Box>
    )
  }
}
const renderField =

  ({ input, label, type, labelTitle, meta: { touched, error, warning } }) =>
    (
      <div>
        {type == "text" &&
          <div >

            <TextField
              {...input}
              floatingLabelText={label}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              errorText={error}
              errorStyle={styles.errorStyle}
              /><br />

          </div>}
      </div>
    )

const validate = values => {
  const errors = {}
  if (!values.centreName) {
    errors.centreName = 'Required'
  } else if (values.centreName.length > 20) {
    errors.centreName = 'Must be 5 characters or less'
  }

  if (!values.sector) {
    errors.sector = 'Required'
  } else if (values.sector.length > 20) {
    errors.sector = 'Must be 5 characters or less'
  }

  if (!values.deecD_CODE) {
    errors.deecD_CODE = 'Required'
  } else if (values.deecD_CODE.length > 20) {
    errors.deecD_CODE = 'Must be 5 characters or less'
  }

  if (!values.deecD_CODE) {
    errors.deecD_CODE = 'Required'
  } else if (values.deecD_CODE.length > 20) {
    errors.deecD_CODE = 'Must be 5 characters or less'
  }

  if (!values.deecD_CODE) {
    errors.deecD_CODE = 'Required'
  } else if (values.deecD_CODE.length > 20) {
    errors.deecD_CODE = 'Must be 5 characters or less'
  }

  if (!values.dsName) {
    errors.dsName = 'Required'
  } else if (values.dsName.length > 20) {
    errors.dsName = 'Must be 5 characters or less'
  }

  if (!values.dsPhone) {
    errors.dsPhone = 'Required'
  } else if (values.dsPhone.length > 20) {
    errors.dsPhone = 'Must be 5 characters or less'
  }

  if (!values.dsEemail) {
    errors.dsEemail = 'Required'
  } else if (values.dsEemail.length > 20) {
    errors.dsEemail = 'Must be 5 characters or less'
  }

  if (!values.dsFax) {
    errors.dsFax = 'Required'
  } else if (values.dsFax.length > 20) {
    errors.dsFax = 'Must be 5 characters or less'
  }

  if (!values.deliveryCode) {
    errors.deliveryCode = 'Required'
  } else if (values.deliveryCode.length > 20) {
    errors.deliveryCode = 'Must be 5 characters or less'
  }

  if (!values.deliverySchoolName) {
    errors.deliverySchoolName = 'Required'
  } else if (values.deliverySchoolName.length > 20) {
    errors.deliverySchoolName = 'Must be 5 characters or less'
  }

  if (!values.deliveryAddress1) {
    errors.deliveryAddress1 = 'Required'
  } else if (values.deliveryAddress1.length > 20) {
    errors.deliveryAddress1 = 'Must be 5 characters or less'
  }

  if (!values.deliveryAddress2) {
    errors.deliveryAddress2 = 'Required'
  } else if (values.deliveryAddress2.length > 20) {
    errors.deliveryAddress2 = 'Must be 5 characters or less'
  }

  if (!values.deliverySuburb) {
    errors.deliverySuburb = 'Required'
  } else if (values.deliverySuburb.length > 20) {
    errors.deliverySuburb = 'Must be 5 characters or less'
  }

  if (!values.deliveryPostcode) {
    errors.deliveryPostcode = 'Required'
  } else if (values.deliveryPostcode.length > 20) {
    errors.deliveryPostcode = 'Must be 5 characters or less'
  }

  if (!values.deliveryState) {
    errors.deliveryState = 'Required'
  } else if (values.deliveryState.length > 20) {
    errors.deliveryState = 'Must be 5 characters or less'
  }

  if (!values.reportCODE) {
    errors.reportCODE = 'Required'
  } else if (values.reportCODE.length > 20) {
    errors.reportCODE = 'Must be 5 characters or less'
  }

  if (!values.reportSchoolName) {
    errors.reportSchoolName = 'Required'
  } else if (values.reportSchoolName.length > 20) {
    errors.reportSchoolName = 'Must be 5 characters or less'
  }

  if (!values.reportAddress1) {
    errors.reportAddress1 = 'Required'
  } else if (values.reportAddress1.length > 20) {
    errors.reportAddress1 = 'Must be 5 characters or less'
  }

  if (!values.reportAddress2) {
    errors.reportAddress2 = 'Required'
  } else if (values.reportAddress2.length > 20) {
    errors.reportAddress2 = 'Must be 5 characters or less'
  }

  if (!values.reportSuburb) {
    errors.reportSuburb = 'Required'
  } else if (values.reportSuburb.length > 20) {
    errors.reportSuburb = 'Must be 5 characters or less'
  }

  if (!values.reportPostcode) {
    errors.reportPostcode = 'Required'
  } else if (values.reportPostcode.length > 20) {
    errors.reportPostcode = 'Must be 5 characters or less'
  }

  if (!values.reportState) {
    errors.reportState = 'Required'
  } else if (values.reportState.length > 20) {
    errors.reportState = 'Must be 5 characters or less'
  }

  return errors
}

export default reduxForm({
  form: 'schoolModalValidate',
  validate
})(SchoolModal)