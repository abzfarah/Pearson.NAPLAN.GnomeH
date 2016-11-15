import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor } from '../components/common';
import {Step, StepButton, StepConnector, StepContent, StepLabel, Stepper} from '../components/common/Stepper';
import StatementContainer from './StatementContainer';
import SchoolDetailsContainer from './SchoolDetailsContainer';
import Home from '../components/MultiTab/Home';
import userManager from '../utils/userManager';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import * as schoolActions from '../actions';
import schools from '../data/schools.json';

const school = schools

const lookup = {};
for (var i = 0, len = school.length; i < len; i++) {
    lookup[school[i].centreCode] = school[i];
}

class RegistrationContainer extends React.Component {

  constructor() {
      super();
      this.state = {
        stepIndex: 0,
        currentSchool: {},
        visited: [],
        statementData: {},
        detailsData: {},
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
      this.renderSchool = this.renderSchool.bind(this)
    }

  componentWillMount() {



    let stepIndex = this.state.stepIndex;
    let visited = this.state.visited;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {



    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  componentDidMount() {

    const { claims } = this.props


  }

  componentWillReceiveProps(nextProps) {

    if (!_.isEqual(this.props.currentSchool, nextProps.currentSchool)) {
         this.setState({currentSchool:  nextProps.currentSchool}) 
         this.props.actions.getStatement(nextProps.currentSchool.code)
         this.props.actions.schoolDetailsAsync(nextProps.currentSchool.code)
    }

    if (!_.isEqual(this.state.statementData, nextProps.statementData)) {
        let level = nextProps.statementData["securityLevel"].toString() 
        nextProps.statementData["securityLevel"] = level
        this.setState({
          statement: nextProps.statementData,
          statementData: nextProps.statementData
      })
    }

    if (!_.isEqual(this.state.detailsData, nextProps.schoolDetails)) {
        this.setState({
          schoolDetails: nextProps.schoolDetails,
          detailsData: nextProps.schoolDetails
      })
    }
 }

 

 renderSchool() {


 }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Home/>;
      case 1:
        return <StatementContainer  
                 statement={this.state.statementData} 
                 currentSchool={this.state.currentSchool}/>;      
      case 3:
        return <SchoolDetailsContainer 
                  schoolDetails={this.state.schoolDetails}
                  currentSchool={this.state.currentSchool} />;
        
    }
  }

  render() {
    const visited = this.state.visited
    const stepIndex = this.state.stepIndex
    const { currentSchool } = this.props
    const styles = getStyles();

    return (
      <div style={styles.root}>

        <Stepper linear={false} claims={this.props.claims}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Home
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Statement of Compliance
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Authorised Staff
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(3) !== -1} active={stepIndex === 3}>
            <StepButton onClick={() => this.setState({stepIndex: 3})}>
              School Details 
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(4) !== -1} active={stepIndex === 4}>
            <StepButton onClick={() => this.setState({stepIndex: 4})}>
              Student Registration Data
            </StepButton>
          </Step>
        </Stepper>

        <div>
          {this.getStepContent(stepIndex)}
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
  return {
      user: state.oidc.user,
      loggedIn: state.loggedIn,
      schoolDetails: state.schoolDetails.schoolDetails,
      statementData: state.statement.statementData
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(schoolActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);