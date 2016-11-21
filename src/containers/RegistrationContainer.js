import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor } from '../components/common';
import {Step, StepButton, StepConnector, StepContent, StepLabel, Stepper} from '../components/common/Stepper';
import StatementContainer from './StatementContainer';
import SchoolDetailsContainer from './SchoolDetailsContainer';
import SummaryTable from './SummaryTable';
import userManager from '../utils/userManager';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import * as registrationActions from '../actions/registrationActions';

class RegistrationContainer extends React.Component {

  constructor() {
      super();
      this.state = {
        stepIndex: 0,
        status: [],
        statementData: {},
        detailsData: {},
        isAdmin: false,

        schoolDetails: {
          centreCode: "",
          centreName: "",
          deliveryAddress1: "",
          deliveryAddress2: "",
          deliveryPostcode: "",  
          deliverySchoolName: "",
          deliveryState: "",
          deliverySuburb: "",
          dsFax: "",
          dsPhone: "",
          email: "",
          fax: "",
          phone: "",
          post_address_line1: "",
          reportState: "",
          reportSuburb: "",
          requestPackingOrder: ""
        },
        statement: {
          firstName: "",
          lastName: "",
          email: "",
          isDeclared: "",
          isCertified: "",
          isConfirmed: "",
          securityLevel: "",
          securityLevelOther: "",
          contactNumber: "",
          complianceStatementId: "",
          centreCode: ""
        }
      };
    this.handleActiveStep = this.handleActiveStep.bind(this)
    }

  handleActiveStep(stepIndex) {

    this.setState({ stepIndex })

    switch(stepIndex) {
        case 0:
              this.props.dispatch(push('/school/summary'));
            break;
        case 1:
              this.props.dispatch(push('/school/soc'));
            break;
        case 2:
              this.props.dispatch(push('/school/authorisedstaff'));
            break;
        case 3:
            this.props.dispatch(push('/school/schooldetails'));
            break;
        default:    
    }

  }
  componentWillMount() {

    const { isAdmin } = this.props
    let stepIndex = this.state.stepIndex;
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ( _.isEmpty(this.props.currentSchool) && _.isEmpty(nextProps.currentSchool) ) return false
    return true 
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.currentSchool, nextProps.currentSchool)) {
          this.props.actions.fetchStatement(nextProps.currentSchool.centreCode)
          this.props.actions.fetchSchoolDetails(nextProps.currentSchool.centreCode)
          /**
           * TODO: Fetch Authorised Staff, Alternative Test Order Format & Student Registration Data
           * */
          this.props.actions.fetchRegistrationStatus(nextProps.currentSchool.centreCode)
    }

    if (!_.isEqual(this.state.statementData, nextProps.statementData)) {
        let level = nextProps.statementData["securityLevel"].toString() 
        nextProps.statementData["securityLevel"] = level

        this.setState({
          statement: nextProps.statementData,
          statementData: nextProps.statementData
      })

    }

    if (!_.isEqual(this.state.schoolDetails, nextProps.schoolDetails)) {
        this.setState({
          schoolDetails: nextProps.schoolDetails,
          detailsData: nextProps.schoolDetails
      })
    }

    if (!_.isEqual(this.props.status, nextProps.status)) {
          this.setState({ status: nextProps.status })    
    }
 }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <SummaryTable/>;
      case 1:
        return <StatementContainer  
                 statement={this.state.statementData} 
                 currentSchool={this.state.currentSchool}
                 isAdmin={this.props.isAdmin}
                 router={this.props.router}
                 />;      
      case 3:
        return <SchoolDetailsContainer 
                  schoolDetails={this.state.schoolDetails}
                  currentSchool={this.state.currentSchool} 
                  isAdmin={this.props.isAdmin}
                  />;
        
    }
  }

  render() {
    const styles = getStyles();

    const { stepIndex, statementData, currentSchool, schoolDetails } = this.state
    const { isAdmin, router } = this.props
    

    let children = React.Children.map(this.props.children, child => {
         return React.cloneElement(child, {
                 statement: statementData, 
                 schoolDetails: schoolDetails,
                 currentSchool: currentSchool,
                 isAdmin: isAdmin,
                 router: router
    })
  })

    return (
      <div style={styles.root}>
        <Stepper linear={false} claims={this.props.claims}>
          <Step completed={status[0]} active={stepIndex === 0}  >
            <StepButton onClick={ ()=> this.handleActiveStep(0)}>
              Home
            </StepButton>
          </Step>
          <Step completed={status[0]} active={stepIndex === 1} >
            <StepButton onClick={()=>  this.handleActiveStep(1)}>
              Statement of Compliance
            </StepButton>
          </Step>
          <Step completed={status[1]} active={stepIndex === 2}>
            <StepButton  onClick={ ()=> this.handleActiveStep(2)}>
              Authorised Staff
            </StepButton>
          </Step>
          <Step completed={status[2]} active={stepIndex === 3}>
            <StepButton  onClick={ ()=> this.handleActiveStep(3)}>
              School Details 
            </StepButton>
          </Step>
          <Step completed={status[3]} active={stepIndex === 4}>
            <StepButton  onClick={ ()=> this.handleActiveStep(4)}>
              Alternative Test Order Format 
            </StepButton> 
          </Step>
          <Step completed={status[4]} active={stepIndex === 5}>
            <StepButton  onClick={ ()=> this.handleActiveStep(6)}>
              Student Registration
            </StepButton>
          </Step>
        </Stepper>

        <div>
          { children }
        </div>

      </div>
    );
  }
}

const getStyles = () => {
  return {
    root: {
      width: '79%',
      margin: 'auto',
    },
    actions: {
      marginTop: 12,
    },
    backButton: {
      marginRight: 12,
    },
  };
};



function mapStateToProps(state, ownProps) {
  let status =  _.map(state.status.status, "status")

 // let statementFormValues     = state.form.statement.values
 // let schoolDetailsFormValues = state.form.statement.values

  return {
      user: state.oidc.user,
      loggedIn: state.loggedIn,
      schoolDetails: state.schoolDetails.schoolDetails,
      statementData: state.statement.statementData,
      form: state.form,
      route: ownProps.router,
      status
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(registrationActions, dispatch),
      dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);