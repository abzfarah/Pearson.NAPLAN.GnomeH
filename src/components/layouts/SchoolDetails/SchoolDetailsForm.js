import React, { Component, PropTypes } from 'react'
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
import Columns from '../../common/Columns'

import Button from '../../common/Button'
import Anchor from '../../common/Anchor'
import Select from '../../common/Select'

import {orange500, blue500, black} from '../../utils/materialStyles/colors';


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color:black,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

class SchoolDetailsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // isDisabled: false,
            // isConfirmed: true
        }

        this.confirmed = this.confirmed.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.submitStatement = this.submitStatement.bind(this);
    }

    componentWillMount() {

        if (this.props.initialValues) {
            this.setState({
                isConfirmed: this.props.initialValues.isConfirmed
            });
        }
    }

    render() {

        return (
          <Box className="sd_MainBox">
            <Box>
              <Heading tag="h2">
                <div className="numberCircle">3</div>
                School Details
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

            <Box direction="row" className="boxA">
              <Box className="sd_boxLeft" align="left" pad="medium" colorIndex="light-2">
                <Heading tag="h3">Part A: Review School Details</Heading>
                <Paragraph>Fields marked with <span className="colorRed">*</span> in the forms below are required</Paragraph>
                <div>
                  <TextField
                    floatingLabelText="Phone"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    errorText="This field is required."
                    errorStyle={styles.errorStyle}
                  /><br />

                  <TextField
                    floatingLabelText="Fax"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    errorText="This field is required."
                    errorStyle={styles.errorStyle}
                  /><br />
                </div>
                <br/>
                <CheckBox id="chkReviewed" name="chkReviewed" label="Details have been reviewed and are correct." />
              </Box>

              <Box className="sd_boxRight" align="left" pad="medium" colorIndex="light-2">
                <Heading tag="h3">Part B: Booklet Packing Order</Heading>
                <Paragraph>By default, test booklets will be packed in order of year level, home group and surname as per the data provided by each school, or supplied by their jurisdictional authority. For schools who wish to receive their test materials in another order, please briefly describe your request below. If you do not require a special test packing arrangement no action needs to be taken.
                </Paragraph>
                <CheckBox id="chkCustomPaching" name="chkCustomPaching" label="I request a custom packing order for the NAPLAN tests. Details of this request are provided below (e.g. Year 7 are to be packed aphabetically only and not by home group)." />
                <Box direction="row">
                  <Box pad="small">Requested by:</Box>
                  <Form>
                    <FormField>
                      <Select id="selRequestedBy" name="selRequestedBy" options={["person one", "person two", "person three", "person four", "person five", "person six", "person seven", "person eight"]} value="person one" />
                    </FormField>
                  </Form>
                </Box>
              </Box>
            </Box>
          </Box>

        )
    }

    submitStatement(model) {

        console.log(model)
        this.props.submitStatement(model);
    }

    confirmed(evt) {

        // this.setState({ isDisabled: !evt.target.checked })
        // this.setState({ isConfirmed: evt.target.checked })
    }


}

const renderField =
    ({ input, label, type, meta: { touched, error, warning } }) =>
        (
            <div>
                {type == "text" &&
                    <FormField label={label} htmlFor={label}>
                        <input {...input} placeholder={label} type={type} />
                        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
                    </FormField>}
                {type == "checkBox" &&
                    <FormField htmlFor={label}>
                        <CheckBox {...input} label={label}/>
                        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
                    </FormField>
                }


            </div>
        )





// export default SchoolDetailsForm
export default SchoolDetailsForm
