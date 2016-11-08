import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import { Checkbox, SelectField, TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'

import { Button, Box, Heading, Paragraph, Form, FormField, Section } from '../../common'

const style = {
    margin: 12,
};

class SchoolModal extends React.Component {

    constructor(props) {
        super(props)
        //--Modal
        this.state = {
            open: false,
        };
        this.submitForm = this.submitForm.bind(this);

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.initialValues) {
            console.log(nextProps.initialValues)
            // this.setState({initialValues: nextProps.initialValues })
        }
    }

    submitForm(model) {
        this.props.submitForm(model);

    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {  handleSubmit, pristine, reset, submitting } = this.props

        return (
            <Box className="form-container">
                <Section className="test">
                    <Box>
                        <Heading tag="h2">
                            <div className="numberrCircle"></div>
                            <span className="sd_hColor"></span>

                        </Heading>
                    </Box>
                    <form onSubmit={handleSubmit((model) => { this.submitForm(model) })}>
                        <Box direction="row" className="boxRow">
                            <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">

                                <Heading tag="h5" className="sd_hColor">Part A: School Details</Heading>
                                <Field name="centreName" type="text" component={TextField} floatingLabelText="School Name" />
                                <Field name="centreCode" type="text" component={TextField} floatingLabelText="School Code" />
                                <Field
                                    name="sector"
                                    component={SelectField}
                                    hintText="Select Sector"
                                    floatingLabelText="Select Sector">

                                    {this.props.sectors && this.props.sectors.map((item) => {
                                        return <MenuItem value={item.sectorId} primaryText={item.description} />
                                    })}

                                </Field>
                                <Field name="deecD_CODE" type="text" component={TextField} floatingLabelText="DEECD CODE" />
                            </Box>

                            <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                                <Heading tag="h5" className="sd_hColor">Part B: Data Service</Heading>
                                <Field name="dscode" type="text" component={TextField} floatingLabelText="School Code" />
                                <Field name="dsName" type="text" component={TextField} floatingLabelText="School Name" />
                                <Field name="phone" type="number" component={TextField} floatingLabelText="Phone" />
                                <Field name="email" type="text" component={TextField} floatingLabelText="Email" />
                                <Field name="fax" type="number" component={TextField} floatingLabelText="Fax" />
                            </Box>
                        </Box>

                        <Box direction="row" className="boxRow">
                            <Box className="sd_boxLeft sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                                <Heading tag="h5" className="sd_hColor">Part C: Test Material Delivery (Site Address) </Heading>
                                <Field name="deliveryCode" type="text" component={TextField} floatingLabelText="School Code" />
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
                </Section>
            </Box>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = ['centreName', 'centreCode', 'sector', 'deecD_CODE']

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (values.email && values.email.length > 100) { errors.email = 'Invalid email address' }
    if (values.phone && values.phone.length > 15) { errors.phone = 'Invalid Phone Number' }
    if (values.fax && values.fax.length > 15) { errors.fax = 'Invalid Fax Number' }
    if (values.centreName && values.centreName.length > 100) { errors.centreName = 'Invalid centreName' }
    if (values.centreCode && values.centreCode.length > 10) { errors.centreCode = 'Invalid centre Code' }
    if (values.deecD_CODE && values.deecD_CODE.length > 8) { errors.deecD_CODE = 'Invalid DEECD CODE' }
    if (values.dscode && values.dscode.length > 5) { errors.dscode = 'Invalid code' }
    if (values.dsName && values.dsName.length > 15) { errors.dsName = 'Invalid centreName' }

    if (values.deliveryCode && values.deliveryCode.length > 5) { errors.deliveryCode = 'Invalid deliveryCode' }
    if (values.deliverySchoolName && values.deliverySchoolName.length > 100) { errors.deliverySchoolName = 'Invalid School Name' }
    if (values.deliveryAddress1 && values.deliveryAddress1.length > 100) { errors.deliveryAddress1 = 'Invalid Address1' }
    if (values.deliveryAddress2 && values.deliveryAddress2.length > 100) { errors.deliveryAddress2 = 'Invalid Address 2' }
    if (values.deliverySuburb && values.deliverySuburb.length > 50) { errors.deliverySuburb = 'Invalid Suburb' }
    if (values.deliveryPostcode && values.deliveryPostcode.length > 4) { errors.deliveryPostcode = 'Invalid Postcode' }
    if (values.deliveryState && values.deliveryState.length > 17) { errors.deliveryState = 'Invalid State' }

    if (values.reportCODE && values.reportCODE.length > 5) { errors.reportCODE = 'Invalid CODE' }
    if (values.reportSchoolName && values.reportSchoolName.length > 100) { errors.reportSchoolName = 'Invalid School Name' }
    if (values.reportAddress1 && values.reportAddress1.length > 100) { errors.reportAddress1 = 'Invalid Address 1' }
    if (values.reportAddress2 && values.reportAddress2.length > 100) { errors.reportAddress2 = 'Invalid reportAddress 2' }
    if (values.reportSuburb && values.reportSuburb.length > 50) { errors.reportSuburb = 'Invalid Suburb' }
    if (values.reportPostcode && values.reportPostcode.length > 4) { errors.reportPostcode = 'Invalid Postcode' }
    if (values.reportState && values.reportState.length > 17) { errors.reportState = 'Invalid Postcode' }

    return errors
}

export default connect(null, null)(reduxForm({
    form: 'SchoolForm',
    validate
})(SchoolModal))
//-- TODO
//--1- er-injectTapEventPlugin
//-- 2- Modal submit form
//-- 2- SchoolCode shuld be uniq
//--3 design

//-- Modal
//-- phone number

//Error: Invariant Violation: injectTapEventPlugin(): Can only be called once per application lifecycle. It is recommended to call injectTapEventPlugin() just before you call ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() itself, please contact the //maintainer as it shouldn't be called in library code and should be injected by the application.
