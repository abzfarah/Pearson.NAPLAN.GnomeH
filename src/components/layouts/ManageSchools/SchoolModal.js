import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import { Checkbox, SelectField, TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'

import { Button, Box, Heading, Paragraph, Form, FormField, Section } from '../../common'
import { getSuburbsAsync } from '../../../actions/manageSchoolActions'

const style = {
    margin: 12,
};

class SchoolModal extends React.Component {

    constructor(props) {
        super(props)
        //--Modal
        this.state = {
            open: false,
            suburbs: []
        };
        this.submitForm = this.submitForm.bind(this);
        this.getSuburbs = this.getSuburbs.bind(this);
    }

    getSuburbs(postalCode, type) {

        getSuburbsAsync(postalCode).then((result) => {
            if (result) {
                if (type == 'report') {
                    this.setState({ reportSuburbs: result })
                }
                else if (type == 'delivery') {
                    this.setState({ deliverySuburbs: result })
                }
            }
        });
    }

    componentDidMount() {
        if (this.props.initialValues && this.props.initialValues.deliveryPostcode) {
            this.getSuburbs(this.props.initialValues.deliveryPostcodeValue, 'delivery')
        }
        if (this.props.initialValues && this.props.initialValues.reportPostcode) {
            this.getSuburbs(this.props.initialValues.reportPostcode, 'delivery')
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.deliveryPostcodeValue != this.props.deliveryPostcodeValue) {
            if (nextProps.deliveryPostcodeValue && nextProps.deliveryPostcodeValue.length < 4) {
                this.setState({ deliverySuburbs: [] })
            }
            else
                if (nextProps.deliveryPostcodeValue && nextProps.deliveryPostcodeValue.length == 4) {
                    this.getSuburbs(nextProps.deliveryPostcodeValue, 'delivery')
                }
        }

        if (nextProps.reportPostcodeValue != this.props.reportPostcodeValue) {
            if (nextProps.reportPostcodeValue && nextProps.reportPostcodeValue.length < 4) {
                this.setState({ reportSuburbs: [] })
            }
            else
                if (nextProps.reportPostcodeValue && nextProps.reportPostcodeValue.length == 4) {
                    this.getSuburbs(nextProps.reportPostcodeValue, 'report')
                }
        }
    }

    submitForm(model) {
        console.log(model)
        this.props.submitForm(model);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handlepostalCodeChange = () => {
        //---
        let pCode = '3108'
        if (pCode.length == 4) {

        }
    }
    render() {

        const {  handleSubmit, pristine, reset, submitting, deliveryPostcodeValue, reportPostcodeValue, centreNameValue } = this.props

        return (
            <Box className="form-container">
                <Section className="test">
                    <Box>
                        <Heading tag="h2">
                            <div className="numberrCircle"></div>

                            <span className="sd_hColor"></span>
                        </Heading>
                    </Box>
                    <form onSubmit={handleSubmit}>
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

                                    {this.props.sectors && this.props.sectors.map((item, i) => {
                                        return <MenuItem key={i} value={item.sectorId} primaryText={item.description} />
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
                                <Field name="deliveryPostcode" type="number" component={TextField} floatingLabelText="Post Code" />
                                <Field
                                    name="deliverySuburb"
                                    component={SelectField}
                                    hintText="Select Suburb"
                                    floatingLabelText="Select Suburb">
                                    {
                                        this.state.deliverySuburbs && this.state.deliverySuburbs.map((item, i) => {
                                            return <MenuItem suburb={i} value={item.suburb} primaryText={item.suburb} />
                                        })
                                    }
                                </Field>
                                <Field name="deliveryState" type="text" component={TextField} floatingLabelText="State" />
                            </Box>

                            <Box className="sd_boxRight sd_editBgColor" align="start" pad="small" colorIndex="light-2">
                                <Heading tag="h5" className="sd_hColor">Part D: Reporting Material Delivery (Site Address)</Heading>
                                <Field name="reportCODE" type="text" component={TextField} floatingLabelText="School Code" />
                                <Field name="reportSchoolName" type="text" component={TextField} floatingLabelText="School Name" />
                                <Field name="reportAddress1" type="text" component={TextField} floatingLabelText="Address 1" />
                                <Field name="reportAddress2" type="text" component={TextField} floatingLabelText="Address 2" />

                                <Field name="reportPostcode" type="number" component={TextField} floatingLabelText="Post Code" />
                                <Field
                                    name="reportSuburb"
                                    component={SelectField}
                                    hintText="Select Suburb"
                                    floatingLabelText="Select Suburb">
                                    {
                                        this.state.reportSuburbs && this.state.reportSuburbs.map((item, i) => {
                                            return <MenuItem suburb={i} value={item.suburb} primaryText={item.suburb} />
                                        })
                                    }
                                </Field>
                                <Field name="reportState" type="text" component={TextField} floatingLabelText="State" />
                            </Box>
                        </Box>
                    </form>
                </Section>
            </Box>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = ['centreName', 'centreCode', 'sector', 'deecD_CODE']

    requiredFields.forEach(field => { if (!values[field]) { errors[field] = 'Required' } })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = 'Invalid email address' }
    if (values.email && values.email.length > 100) { errors.email = 'Invalid email address' }
    if (values.phone && values.phone.length > 15) { errors.phone = 'Invalid Phone Number' }
    if (values.fax && values.fax.length > 15) { errors.fax = 'Invalid Fax Number' }
    if (values.centreName && values.centreName.length > 100) { errors.centreName = 'Invalid centre Name' }
    if (values.centreCode && values.centreCode.length > 5) { errors.centreCode = 'Invalid centre Code' }
    if (values.deecD_CODE && values.deecD_CODE.length > 8) { errors.deecD_CODE = 'Invalid DEECD CODE' }
    if (values.dscode && values.dscode.length > 5) { errors.dscode = 'Invalid code' }
    if (values.dsName && values.dsName.length > 100) { errors.dsName = 'Invalid centreName' }

    if (values.deliveryCode && values.deliveryCode.length > 5) { errors.deliveryCode = 'Invalid delivery Code' }
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
    if (values.reportState && values.reportState.length > 17) { errors.reportState = 'Invalid state' }

    return errors
}

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
const selector = formValueSelector('SchoolForm')
export default connect(state => {

    const deliveryPostcodeValue = selector(state, 'deliveryPostcode')
    const reportPostcodeValue = selector(state, 'reportPostcode')
    const centreNameValue = selector(state, 'centreName')

    return {
        deliveryPostcodeValue, reportPostcodeValue, centreNameValue
    }
}, { getSuburbsAsync }, null, { withRef: true })(reduxForm({
    form: 'SchoolForm',
    validate,
})(SchoolModal))
//-- TODO
//---3 - suburb loading
//-- 2- SchoolCode shuld be uniq
//--3 design

