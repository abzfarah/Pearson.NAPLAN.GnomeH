import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import { SelectField, TextField } from 'redux-form-material-ui'
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem'
import { Button, Box, Heading, Paragraph, Form, FormField, Section } from '../../common'

const renderCheckbox = ({ input, label }) => (
    <Checkbox label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange} />
)

class AuthStaffModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false            
        }
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange = (event, index, value) => this.setState({ value });
    componentDidMount() {

        if (this.props.initialValues) {

        }
    }

    render() {
        return (
            <Box className="form-container">
                <Section className="test">

                    <form >
                        <Field name="firstName" type="text" component={TextField} floatingLabelText="First Name" />
                        <Field name="lastName" type="text" component={TextField} floatingLabelText="Last Code" />
                        <Field name="phoneNumber" type="text" component={TextField} floatingLabelText="Phone" />
                        <Field name="email" type="text" component={TextField} floatingLabelText="Email" />
                        <Field
                            name="authUserRole"
                            component={SelectField}
                            hintText="Select Role"
                            floatingLabelText="Role">
                            <MenuItem value="1" primaryText="Principal or Acting equivalent" />
                            <MenuItem value="2" primaryText="Deputy Principal" />
                            <MenuItem value="3" primaryText="Learning Director" />
                            <MenuItem value="4" primaryText="Senior Years Coordinator" />
                            <MenuItem value="5" primaryText="Middle Years Coordinator" />
                            <MenuItem value="6" primaryText="Junior Years Coordinator" />
                            <MenuItem value="7" primaryText="Year Level Coordinato" />
                            <MenuItem value="8" primaryText="NAPLAN  Coordinator" />
                            <MenuItem value="9" primaryText="Teacher" />
                            <MenuItem value="10" primaryText="Office Business Manager" />
                            <MenuItem value="11" primaryText="Administration Staff" />
                            <MenuItem value="12" primaryText="Other Coordinator/Manager" />
                            <MenuItem value="13" primaryText="Other" />
                        </Field><br /><br /><br /><br />
                        <Field name="receiveEmails" component={renderCheckbox} label="Receive NAPLAN email updates and memos" /><br />
                        <Field name="testdelivery" component={renderCheckbox} label="Authorised Staff for test delivery" /><br />
                        <Field name="testAdmin" component={renderCheckbox} label="Test Administrator" />
                    </form>
                </Section>
            </Box>
        )
    }
}
const selector = formValueSelector('authStaffForm')


export default reduxForm({
    form: 'authStaffForm'
})(AuthStaffModal) 
