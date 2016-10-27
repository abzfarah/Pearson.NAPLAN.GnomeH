import React, { Component, PropTypes } from 'react'
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
              <Tile align="start" basis="small" flex={true} wide="true">
                <Header size="small" pad={{"horizontal": "medium"}}>
                  <Heading tag="h3"> Part A: Review School Details </Heading>
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


              <Tile align="start" basis="small" flex={false}>
                <Header size="small" pad={{"horizontal": "small"}}>
                  <Heading tag="h4">
                    <strong>
                      Tile 2
                    </strong>
                  </Heading>
                </Header>
                <Box pad="small">
                  <p>
                    Tile summary content. One or two lines. Tile summary content.	            One or two lines.
                  </p>
                </Box>
              </Tile>
              <Tile align="start" basis="small" flex={false}>
                <Header size="small" pad={{"horizontal": "small"}}>
                  <Heading tag="h4">
                    <strong>
                      Tile 3
                    </strong>
                  </Heading>
                </Header>
                <Box pad="small">
                  <p>
                    Tile summary content. One or two lines. Tile summary content.	            One or two lines.
                  </p>
                </Box>
              </Tile>
              <Tile align="start" basis="small" flex={false}>
                <Header size="small" pad={{"horizontal": "small"}}>
                  <Heading tag="h4">
                    <strong>
                      Tile 4
                    </strong>
                  </Heading>
                </Header>
                <Box pad="small">
                  <p>
                    Tile summary content. One or two lines. Tile summary content.	            One or two lines.
                  </p>
                </Box>
              </Tile>
              <Tile align="start" basis="small" flex={false}>
                <Header size="small" pad={{"horizontal": "small"}}>
                  <Heading tag="h4">
                    <strong>
                      Tile 5
                    </strong>
                  </Heading>
                </Header>
                <Box pad="small">
                  <p>
                    Tile summary content. One or two lines. Tile summary content.	            One or two lines.
                  </p>
                </Box>
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
