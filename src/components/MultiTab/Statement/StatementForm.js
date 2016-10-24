import React, { Component, PropTypes } from 'react'
import { Field, reduxForm, Fields } from 'redux-form'
import Tab from '../../common/Tab'
import Tabs from '../../common/Tabs'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Box from '../../common/Box'
import Paragraph from '../../common/Paragraph'
import FormFields from '../../common/FormFields'
import FormField from '../../common/FormField'
import CheckBox from '../../common/CheckBox'
import RadioButton from '../../common/RadioButton'
import Button from '../../common/Button'
import Footer from '../../common/Footer'
import TextField from '../../common/TextField'
import { orange500, blue500, black } from '../../utils/materialStyles/colors';

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


class StatementForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isDisabled: true,
            isConfirmed: false
        }

        this.confirmed = this.confirmed.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //  this.submitStatement = this.submitStatement.bind(this);
    }

    componentWillMount() {

        if (this.props.initialValues) {

            this.setState({
                isConfirmed: this.props.initialValues.isConfirmed
            });

            //--TODO

            //       this.setState({ securityLevel: parseInt(this.props.initialValues.securityLevel) })
        }
    }

    render() {
        console.log(this.props)
        const { handleSubmit, pristine, reset, submitting } = this.props
        
        //Bahar: grommet submit button doesn't submit the form!, so we submit it manually
        //https://github.com/erikras/redux-form/issues/1304
        const submitter = this.props.handleSubmit(this.submitStatement)
        return (
            <form onSubmit={handleSubmit(this.submitStatement)}>
                <div className="statement">
                    <Section>
                        <Heading tag="h2" colorIndex="accent-1">
                            <div className="numberCircle">1</div>
                            Statement of Compliance
                    </Heading>
                        <Paragraph>
                            Principals are responsible for the security of the NAPLAN test materials and for the administration of the tests.Principals are required to submit an annual Statement of Compliance,
                        indicating their understanding of the VCAA’s requirements in relation to test security and administration.
                        While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
                        Security Log.The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
                        Fields marked with * in the form below are required.
                    </Paragraph>
                    </Section>
                    <Section colorIndex="light-1" pad="medium">
                        <Heading tag="h4">
                            Part A: Principal's Responsibilities
                    </Heading>
                        <Paragraph size="medium" pad="medium">
                            Please read
                        <a href='#'>Principal's responsibilities </a>
                        </Paragraph>
                        <formFiled className="confirmationFieldSet">
                            <CheckBox id="confirmed" checked={this.state.isConfirmed} onChange={this.confirmed} disabled={!this.state.isDisabled || this.state.isConfirmed} label="I have read and accept the Principal's Responsibilities" name="isConfirmed" />
                        </formFiled>
                    </Section>
                    <fieldset disabled={this.state.isDisabled}>
                        <Section colorIndex="light-1" pad="medium">
                            <Heading tag="h4">
                                Part B: Security Storage Arrangement
                            </Heading>
                            <Box colorIndex="light-1" pad="small"  >
                                <Paragraph size="medium" pad="medium">
                                    The VCAA will be conducting visits to schools to audit the storage facilities for the NAPLAN 2016 test materials.
                        </Paragraph>
                                <Paragraph>Apart from when the tests are being administered, test materials are to be kept in a double secure area at all times.Please tick the option which best describes the double secure storage arrangement for NAPLAN test materials at your school.</Paragraph>
                                <Paragraph>Fields marked with * are required.</Paragraph>
                                <Box>
                                    <Paragraph> * Please tick the option which best describes the two levels of security at your school." </Paragraph>
                                    <Field name="securityLevel" component={renderField} id="optionCabinet" type="radio" value="1" label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff." />
                                    <Field name="securityLevel" component={renderField} id="optionSafe" type="radio" value="2" label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff." />
                                    <Field name="securityLevel" component={renderField} id="optionSealed" type="radio" value="3" label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff." />
                                    <Field name="securityLevel" component={renderField} id="optionOther" type="radio" value="4" label="Other" />

                                    {this.props.fields['securityLevel'] === 4 &&
                                        <Field name="otherText" type="text" component={renderFieldOther} label="Other Text" />
                                    }

                                    <Fields names={['securityLevel', 'otherText']} component={renderSecurityLevel} />

                                </Box>
                            </Box>
                        </Section>
                    </fieldset>
                    <fieldset disabled={this.state.isDisabled} >
                        <Section colorIndex="light-1" pad="medium" >
                            <Heading tag="h4" colorIndex="accent-1">
                                Part C: Principal's Declaration
                        </Heading>
                            <FormFields >
                                <Field name="firstName" type="text" component={renderField} label="first Name" labelTitle="* Principal's first name:" />
                                <Field name="lastName" type="text" component={renderField} label="last Name" labelTitle="* Principal's last name:" />
                                <Field name="email" type="text" component={renderField} label="Email" labelTitle="* School/Principal's email:" /> <br />
                                <Field name="isDeclared" type="checkbox" component={renderField} label="isDeclared" labelTitle="* I declare that I am the Principal of the school detailed above." disabled={this.state.isDisabled} /><br />
                                <Field name="isCertified" type="checkbox" component={renderField} label="isCertified" labelTitle="* I certify that the information provided in this form is correct." disabled={this.state.isDisabled} /><br />
                            </FormFields>
                            <Footer pad={{ "vertical": "small" }}>
                                <Button label="submit" primary={true} align="end" disabled={submitting || pristine} type="submit" onClick={() => { submitter() } } />
                            </Footer>
                        </Section>
                    </fieldset>
                </div>
            </form>
        )
    }

    submitStatement(model) {
        debugger
        console.log(model)
        this.props.submitStatement(model);
    }

    confirmed(evt) {

        this.setState({ isDisabled: !evt.target.checked })
        this.setState({ isConfirmed: evt.target.checked })
    }

    handleInputChange(evt) {
        debugger
        console.log(evt.target.value)
        //-- Handle Radio Button
        if (evt.target.type === 'radio') {
            this.setState({ [evt.target.name]: +evt.target.value })
        }

    }
}

const renderSecurityLevel = (fields) =>
    (
        <div>
            <FormField label="* Please tick the option which best describes the two levels of security at your school." >
                <RadioButton {...fields.securityLevel.input} id="optionCabinet" name="securityLevel" checked={true}  label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff." />

                <RadioButton {...fields.securityLevel.input} id="fioptionSafeel02" name="securityLevel" label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff." />

                <RadioButton {...fields.securityLevel.input} id="optionSealed" name="securityLevel" label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff." />

                <RadioButton {...fields.securityLevel.input} id="optionOther" name="securityLevel" label="Other" />
            </FormField>
            {fields.securityLevel === 4 &&
                <input {...fields.otherText.input} type="text" />
            }
        </div>
    )


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
                            />
                        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
                    </div>}

                {type == "checkbox" &&
                    <div >
                        <CheckBox {...input} type={type} label={labelTitle} />
                        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
                    </div>
                }
                {type == "radio" &&

                    <div>
                        <input {...input} type="radio" /> {label}




                        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
                    </div>
                }
            </div>
        )

const form = reduxForm({
    form: 'statementForm',
    fields: ['securityLevel'],
    validate(model) {

        console.log(model)
        const errors = {};
        if (!model.email) {
            errors.email = 'Please enter Principal \'s Email.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(model.email)) {
            errors.email = 'Invalid email address'
        }
        if (!model.firstName) errors.firstName = 'Please enter Principal \'s  first Name.';
        if (!model.lastName) errors.lastName = 'Please enter Principal \'s Last Name.';
        if (model.isDeclared == false) errors.isDeclared = 'Please select.';
        if (!model.isCertified) errors.isCertified = 'Please select';
        //--TODO
        if (model.securityLevel == 0) errors.securityLevel = 'Please select a security level';
        //--TODO
        if (model.securityLevel === 4 && !model.otherText) {
            errors.otherText = 'Please fill other security level ';
        }

        return errors;
    }
});

export default form(StatementForm)
