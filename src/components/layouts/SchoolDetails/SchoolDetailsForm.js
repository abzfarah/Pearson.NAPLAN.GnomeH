import React, { Component, PropTypes } from 'react'

import { schoolDetailsAsync } from '../../../actions/schoolDetailsActions'


import Form from '../../common/Form'

import FormField from '../../common/FormField'
import TextField from '../../common/TextField'
import Section from '../../common/Section'
import Heading from '../../common/Heading'
import Box from '../../common/Box'
import Paragraph from '../../common/Paragraph'
import Header from 'grommet/components/Header';
import CheckBox from '../../common/CheckBox'
import Label from '../../common/Label'
import Tiles from '../../common/Tiles'
import Tile from '../../common/Tile'
import Columns from '../../common/Columns'
import List from '../../common/List'
import ListItem from '../../common/ListItem'
import Button from '../../common/Button'
import Anchor from '../../common/Anchor'
import Select from 'react-select';

import {orange500, blue500, black} from '../../utils/materialStyles/colors';
var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}
//var hey = ["person one", "person two", "person three", "person four", "person five", "person six", "person seven", "person eight"]
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
        }

        this.confirmed = this.confirmed.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.submitStatement = this.submitStatement.bind(this);
        this.returnStatement = this.returnStatement.bind(this);
    }

    returnStatement() {

debugger;

      this.props.schoolDetailsAsync();


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

        <div>
          <Box className="school-details-header">
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

            <Tiles fill={true}  >

            <Tile align="start" flex={false}>
              <Header size="small" pad={{"horizontal": "small"}}>
                <Heading tag="h4"> Part A: Test Material Delivery (Site Address) </Heading>
              </Header>
              <Box pad="small">
                <Box direction="row">
                <List>
                  <ListItem justify="between">
                    <span>
                      School Code
                    </span>
                    <span className="secondary">
                      01678
                    </span>
                  </ListItem>
                  <ListItem justify="between">
                    <span>
                      School Name
                    </span>
                    <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
                  </ListItem>
                  <ListItem justify="between">
                    <span>
                      Address 1
                    </span>
                    <span className="secondary">
                      150 Bowen Street
                    </span>
                  </ListItem>
                  <ListItem justify="between">
                    <span>
                      Suburb
                    </span>
                    <span className="secondary">
                      WARRAGUL
                    </span>
                  </ListItem>
                  <ListItem justify="between">
                    <span>
                      Postcode
                    </span>
                    <span className="secondary">
                      3820
                    </span>
                  </ListItem>
                  <ListItem justify="between">
                    <span>
                      State
                    </span>
                    <span className="secondary">
                      VIC
                    </span>
                  </ListItem>
                </List>
                </Box>
              </Box>
            </Tile>
            <Tile align="start"  flex={false}>
              <Header size="small" pad={{"horizontal": "small"}}>
                <Heading tag="h4"> Part B: Reporting Material Delivery (Site Address) </Heading>
              </Header>
              <Box pad="small">
              <List>
                <ListItem justify="between">
                  <span>
                    School Code
                  </span>
                  <span className="secondary">
                    01678
                  </span>
                </ListItem>
                <ListItem justify="between">
                  <span>
                    School Name
                  </span>
                  <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
                </ListItem>
              </List>
              </Box>
            </Tile>
            <Tile align="start"  flex={false}>
              <Header size="small" pad={{"horizontal": "small"}}>
                <Heading tag="h4"> Part C: Data Service </Heading>
              </Header>
              <Box pad="small">
                  <Box direction="row">
                  <List>
                    <ListItem justify="between">
                      <span>
                        School Code
                      </span>
                      <span className="secondary">
                        01678
                      </span>
                    </ListItem>
                    <ListItem justify="between">
                      <span>
                        School Name
                      </span>
                      <span className="secondary">ST PAUL'S ANGLICAN GRAMMAR SCHOOL</span>
                    </ListItem>
                    <ListItem justify="between">
                      <span>
                        Address 1
                      </span>
                      <span className="secondary">
                        150 Bowen Street
                      </span>
                    </ListItem>
                    <ListItem justify="between">
                      <span>
                        Suburb
                      </span>
                      <span className="secondary">
                        WARRAGUL
                      </span>
                    </ListItem>
                    <ListItem justify="between">
                      <span>
                        Postcode
                      </span>
                      <span className="secondary">
                        3820
                      </span>
                    </ListItem>
                    <ListItem justify="between">
                      <span>
                        State
                      </span>
                      <span className="secondary">
                        VIC
                      </span>
                    </ListItem>
                  </List>
                  </Box>
              </Box>
            </Tile>
              <Tile align="start" flex={true} wide={true}>
                <Header size="small" pad={{"horizontal": "small"}}>
                  <Heading tag="h4"> Part D: Review School Details </Heading>
                </Header>


                <Box pad="small">
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
              </Tile>


              <Tile align="start"  flex={true}  wide={true}>
              <Header size="small" pad={{"horizontal": "small"}}>
                <Heading tag="h4"> Part E: Booklet Packing Order </Heading>
              </Header>
                <Box pad="small">
                <Box direction="row">
                  <Box direction="row"  pad="small">
                    <Paragraph size="large">
                      By default, test booklets will be packed in order of year level, home group and surname as
                      per the data provided by each school, or supplied by their jurisdictional authority. For schools who wish to receive
                      their test materials in another order, please brifly describe your request below. If you do not require a special
                      test packing arrangement no action needs to be taken.
                    </Paragraph>
                  </Box>


                </Box>

                <Box direction="row" pad="small">

                  <CheckBox id="chkCustomPaching" name="chkCustomPaching" label="" />
                  <Paragraph>
                    I request a custom packing order for the NAPLAN tests. Details of this request are provided below (e.g. Year 7 are to be packed aphabetically only and not by home group).
                  </Paragraph>



                </Box>
                <Box direction="row">
                    <Box pad="small"><Paragraph><span className="colorRed">*</span>{` Requested by:`}</Paragraph></Box>
                    <Form>
                      <FormField className="detailsSelect">
                        <Select   name="form-field-name" simpleValue
                          value="one"
                          options={options}
                          onChange={logChange} />
                      </FormField>
                    </Form>
                  </Box>


                </Box>
                  <div className="button-groups">
                <Button  label="Save" accent={true} />
                <Button label="Return" onClick={this.props.onClick} secondary={true} />
                </div>
              </Tile>

          </Tiles>



          </div>
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
