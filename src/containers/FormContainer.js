import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Tab, Tabs } from '../components/common';
import { steps } from './Steps'
import userManager from '../utils/userManager';

class FormContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onActive= this.onActive.bind(this);

        this.state = {
        activeIndex: 0,
        justify: props.justify
        };
    }

    onActive(index) {

        switch(index) {
            case 0:
                 this.props.dispatch(push('/home/summary'));
                break;
            case 1:
                 this.props.dispatch(push('/home/statement'));
                break;
            case 2:
                 this.props.dispatch(push('/home/authorisedstaff'));
                break;
            case 3:
                this.props.dispatch(push('/home/schooldetails'));
                break;
            default:    
        }
       
     }

    componentWillMount() {
        const { user, dispatch } = this.props;
    }

    componentDidMount() {
    }

    componentWillUpdate() {
        return true
    }

    componentWillReceiveProps() {
        return true
    }

    onLogoutButtonClicked = (event) => {
        event.preventDefault();
        userManager.removeUser(); // removes the user data from sessionStorage
        sessionStorage.removeItem('userSession');
        userManager.signoutRedirect();

    }

    render() {
        const { user, session } = this.props;
        return (
            <div>
                <Box className="mid">      
                    <Tabs initialIndex={1} justify="start" onActive={this.onActive}>
                        <Tab title="Home" subtitle="" className="home"/>
                        <Tab title="Statement of Compliance" subtitle="required" className="check" />
                        <Tab title="Authorised Staff" subtitle="required" className="staff"/>
                        <Tab title="School Details" subtitle="required" className="sd_testBgColor"/>
                        <Tab title="Test Format Order" subtitle="optional" className="staff"/>
                        <Tab title="Student Registration Data" subtitle="independant schools only"/>
                    </Tabs>               
                </Box>
                <Box className="mid">     
                    {this.props.children}     
                </Box>        
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        ownProps: ownProps,
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
