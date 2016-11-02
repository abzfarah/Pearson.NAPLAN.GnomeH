import React, { Component, PropTypes } from 'react';
import Tab from '../common/Tab'
import Tabs from '../common/Tabs'
import Section from '../common/Section'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Box from '../common/Box'
import CheckBox from '../common/CheckBox'
import RadioButton from '../common/RadioButton'
import Footer from '../common/Footer'

import Form from '../common/Form'
import FormField from '../common/FormField'
import TextField from '../common/TextField'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from '../common/Table';
import {orange500, blue500, black} from '../utils/materialStyles/colors';


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

const Statement = () => (


<Section className="test">
  <Box className="PartA">
     <Heading tag="h2">
     <div className="numberCircle">1</div>
       Statement of Compliance
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

   <Box className="PartA1">
         <Box colorIndex='light-1' className="inside1">

           <Box className="han">
             <Heading tag="h4">
               Part A: Principal's Responsibilities
             </Heading>
             <Paragraph> Please read Principal's responsibilities</Paragraph>
           </Box>

           <Box className="man">
              <CheckBox label="I have read and accept the Principal responsibilities" />
           </Box>

        </Box>
    </Box>

    <Box className="PartA1">
          <Box colorIndex='light-1' className="inside1">

            <Box className="han">
              <Heading tag="h4">
                Part B: Security Storage Arrangement
            </Heading>

              <Paragraph> The VCAA will be conducting visits to schools to audit the storage facilities for the NAPLAN 2016 test materials.</Paragraph>

             <Paragraph> Apart from when the tests are being administered, test materials are to be kept in a double secure area at all times. Please tick the option which best describes the
                         double secure storage arrangement for NAPLAN test materials at your school.
             </Paragraph>

              <Paragraph>Please select the option which best describes the two levels of security at your school </Paragraph>

              <RadioButton label="A locked filing cabinet which is locked in a storeroom/office which is accessible only by authorised staff"  />
              <RadioButton label="A locked safe which is locked in a storeroom/office which is accessible only by authorised staff" />
              <RadioButton label="A locked sealed container which is locked in a storeroom/office which is accessible only by authorised staff" />

              <Paragraph>
                Please note:
                While the test materials are held in the school prior to, during and after the testing period, any direct access to them within the security is to be recorded in the Test Materials
                Security Log. The Test Materials Security Log should be kept by the school for 12 months after the test and may be subject to audit by the VCAA.
               </Paragraph>
            </Box>

         </Box>

     </Box>


     <Box className="PartA1">
           <Box colorIndex='light-1' className="inside1">

             <Box className="han">
               <Heading tag="h4">
                Part C: Principal's Declaration
               </Heading>

               <Box>
                 <div>
                   <TextField
                     floatingLabelText="First name"
                     floatingLabelStyle={styles.floatingLabelStyle}
                     floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                   /><br />

                   <TextField
                     floatingLabelText="Email"
                     floatingLabelStyle={styles.floatingLabelStyle}
                     floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                   /><br />
                 </div>

                <Box className="declaration" >
                    <CheckBox label="I declare that I am the Principal of the school detailed above." />
                    <CheckBox label="I certify that the information provided on this form is correct." />
                 </Box>

              </Box>
             </Box>

          </Box>
      </Box>


</Section>





)

export default Statement
