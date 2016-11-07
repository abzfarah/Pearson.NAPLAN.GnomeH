import React, { Component, PropTypes } from 'react'
import {Anchor, Button, Box, Heading, Paragraph, Footer, Form, FormField, Label } from '../common'
import {Tiles, Tile, List, ListItem, Select, Section, TextField, Tab, Tabs} from '../common'
import {orange500, blue500, black} from '../common/utils/materialStyles/colors';


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
                        <span className="secondary">01678</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 1</span>
                        <span className="secondary">150 Bowen Street</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 2</span>
                        <span className="secondary">152 Lower Street</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Suburb</span>
                        <span className="secondary">WARRAGUL</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Postcode</span>
                        <span className="secondary">3820</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">State</span>
                        <span className="secondary">VIC</span>
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
                        <span className="secondary">01678</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 1</span>
                        <span className="secondary">150 Bowen Street</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Address 2</span>
                        <span className="secondary">152 Lower Street</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Suburb</span>
                        <span className="secondary">WARRAGUL</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">Postcode</span>
                        <span className="secondary">3820</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">State</span>
                        <span className="secondary">VIC</span>
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
                        <span className="secondary">01678</span>
                      </Box>
                    </ListItem>
                    <ListItem justify="between">
                      <Box direction="column">
                        <span className="sd_readName">School Name</span>
                        <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
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
                  <TextField
                    floatingLabelText="Phone"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    errorText="This field is required"
                    errorStyle={styles.errorStyle}
                  /><br />

                  <TextField
                    floatingLabelText="Fax"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    errorText="This field is required"
                    errorStyle={styles.errorStyle}
                  /><br />
                </div>
                <br/>
                <Box direction="row">
                  <CheckBox id="chkReviewed" name="chkReviewed" />
                  <Paragraph>
                    <span className="colorRed">*</span>{` Details have been reviewed and are correct.`}
                  </Paragraph>
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
                  <CheckBox id="chkCustomPaching" name="chkCustomPaching" label="" />
                  <Paragraph>
                    I request a custom packing order for the NAPLAN tests. Details of this request are provided below (e.g. Year 7 are to be packed aphabetically only and not by home group).
                  </Paragraph>
                </Box>

                <Box direction="row">
                  <Box pad="small"><Paragraph><span className="colorRed">*</span>{` Requested by:`}</Paragraph></Box>
                  <Form>
                    <FormField>
                      <Select id="selRequestedBy" name="selRequestedBy" options={["person one", "person two", "person three", "person four", "person five", "person six", "person seven", "person eight"]} value="person one" />
                    </FormField>
                  </Form>
                </Box>
                <TextField
                  floatingLabelText="Details of request"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  multiLine={true}
                  rows={3}
                  errorStyle={styles.errorStyle}
                />
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


// export default SchoolDetailsForm
export default SchoolDetailsForm
