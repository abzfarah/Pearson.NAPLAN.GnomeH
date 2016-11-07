import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import { Checkbox, SelectField, TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Heading from '../../common/Heading'
import Box from '../../common/Box'
import Paragraph from '../../common/Paragraph'

const style = {
    margin: 12,
};

class SchoolModal extends React.Component {

    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this);
        //--- 
        injectTapEventPlugin()

    }

    submitForm(model) {

        console.log('ssssssssss')
        this.props.submitForm(model);

    }
    render() {

        const {  handleSubmit, pristine, reset, submitting } = this.props

        return (
            <Box className="sd_MainBox">
                <Box>
                    <Heading tag="h2">
                        <span className="sd_hColor">Add School</span>
                    </Heading>
                </Box>
                <form onSubmit={handleSubmit((model) => { this.submitForm(model) })}>
                    <Box direction="row" className="boxRow">
                        <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                            <Heading tag="h5" className="sd_hColor">Part A: School Details</Heading>
                            <Field name="centreName" type="text" component={TextField} floatingLabelText="School Name" />
                            <Field name="centreCode" type="text" component={TextField} floatingLabelText="School Code" disabled />
                            <Field
                                name="sector"
                                component={SelectField}
                                hintText="Sector"
                                floatingLabelText="Sector">
                                <MenuItem value="C" primaryText="Catholic" />
                                <MenuItem value="G" primaryText="Government" />
                                <MenuItem value="I" primaryText="Independent" />
                                <MenuItem value="O" primaryText="Oversea" />
                            </Field>
                            <Field name="deecD_CODE" type="text" component={TextField} floatingLabelText="DEECD CODE" />
                        </Box>

                        <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                            <Heading tag="h5" className="sd_hColor">Part B: Data Service</Heading>
                            <Field name="dscode" type="text" component={TextField} floatingLabelText="School Code" />
                            <Field name="dsName" type="text" component={TextField} floatingLabelText="School Name" />
                            <Field name="phone" type="text" component={TextField} floatingLabelText="Phone" />
                            <Field name="email" type="text" component={TextField} floatingLabelText="Email" />
                            <Field name="fax" type="text" component={TextField} floatingLabelText="Fax" />
                        </Box>
                    </Box>

                    <Box direction="row" className="boxRow">
                        <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                            <Heading tag="h5" className="sd_hColor">Part C: Test Material Delivery (Site Address) </Heading>
                            <Field name="deliveryCode" type="text" component={TextField} floatingLabelText="School CODE" />
                            <Field name="deliverySchoolName" type="text" component={TextField} floatingLabelText="School Name" />
                            <Field name="deliveryAddress1" type="text" component={TextField} floatingLabelText="Address 1" />
                            <Field name="deliveryAddress2" type="text" component={TextField} floatingLabelText="Address 2" />
                            <Field name="deliverySuburb" type="text" component={TextField} floatingLabelText="Suburb" />
                            <Field name="deliveryPostcode" type="text" component={TextField} floatingLabelText="Post Code" />
                            <Field name="deliveryState" type="text" component={TextField} floatingLabelText="State" />
                        </Box>

                        <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                            <Heading tag="h5" className="sd_hColor">Part D: Reporting Material Delivery (Site Address)</Heading>
                            <Field name="reportCODE" type="text" component={TextField} floatingLabelText="School Code" />
                            <Field name="reportSchoolName" type="text" component={TextField} floatingLabelText="School Name" />
                            <Field name="reportAddress1" type="text" component={TextField} floatingLabelText="Address 1" />
                            <Field name="reportAddress2" type="text" component={TextField} floatingLabelText="Address 2" />
                            <Field name="reportSuburb" type="text" component={TextField} floatingLabelText="Suburb" />
                            <Field name="reportPostcode" type="text" component={TextField} floatingLabelText="Post Code" />
                            <Field name="reportState" type="text" component={TextField} floatingLabelText="State" />
                        </Box>

                    </Box>
                    <Box><div>
                        <RaisedButton label="Submit" primary={true} disabled={submitting} type="submit" style={style} />
                        <RaisedButton label="Clear Values" disabled={pristine || submitting} onClick={reset} style={style} />
                    </div></Box>
                </form>
            </Box>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = ['centreName', 'sector', 'deecD_CODE',
        "deliveryCode", "deliverySchoolName", "deliveryAddress1", "deliveryAddress2", "deliverySuburb", "deliveryPostcode", "deliveryState",
        "reportCODE", "reportSchoolName", "reportAddress1", "reportAddress2", "reportSuburb", "reportPostcode", "reportState",
        "dscode", "dsName", "dsPhone", "dsFax", "dsEmail"]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    // if (values.deliveryCode.length > 15) {
    //  errors.deliveryCode = 'Code is not correct'
    // }
    if (values.dsEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.dsEmail)) {
        errors.dsEmail = 'Invalid email address'
    }
    if(values.phone){
          console.log(values.phone.length)
    }
  
    //if(values.phone.value.length > 15 )
    // {
    //     errors.phone='Invalid Phone Number'
    //  }
    return errors
}

export default reduxForm({
    form: 'SchoolForm',
    validate
})(SchoolModal)
