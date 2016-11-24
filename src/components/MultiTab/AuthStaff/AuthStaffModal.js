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
    }
    componentDidMount() {

        if (this.props.initialValues) {

        }
    }
    render() {
        return (
            <Box className="form-container">
                <Section className="test">

                    <Heading tag="h2">
                        <div className="numberrCircle"></div>
                        <span className="sd_hColor">Add Contact Modal</span>
                    </Heading>
                    <form >

                        <Field name="firstName" type="text" component={TextField} floatingLabelText="First Name" />
                        <Field name="lastName" type="text" component={TextField} floatingLabelText="Last Code" />
                        <Field name="phoneNumber" type="text" component={TextField} floatingLabelText="Phone" />
                        <Field name="email" type="text" component={TextField} floatingLabelText="Email" />
                        <Field name="authUserRole" type="text" component={TextField} floatingLabelText="Role" /><br />
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
