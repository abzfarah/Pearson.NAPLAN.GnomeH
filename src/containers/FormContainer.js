import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Tab, Tabs } from '../components/common';
import userManager from '../utils/userManager';

class FormContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onActive= this.onActive.bind(this);

        this.state = {
        activeIndex: 0,
        justify: props.justify,
        claims: {}
        };
    }

    onActive(index) {

        this.setState({ activeIndex: index })

        switch(index) {
            case 0:
                 this.props.dispatch(push('/summary'));
                break;
            case 1:
                 this.props.dispatch(push('/statement'));
                break;
            case 2:
                 this.props.dispatch(push('/authorisedstaff'));
                break;
            case 3:
                this.props.dispatch(push('/schooldetails'));
                break;
            default:    
        }
       
     }

    componentWillMount() {


   

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

        return (
            <div>
                <Box className="tab-container">      
                    <Tabs justify="start" onActive={this.onActive} claims={this.props.claims}>
                       <Tab title="Home" subtitle="" className="home"/>                                  
                       <Tab title="Statement of Compliance" subtitle="required" className="check" />      
                        <Tab title="Authorised Staff" subtitle="required" className="staff"/>               
                        <Tab title="School Details" subtitle="required" className=""/>                     
                        <Tab title="Test Format Order" subtitle="optional" className="staff"/>               
                        <Tab title="Student Registration Data" subtitle="independant schools only"/>          
                    </Tabs>              
                </Box>
                  
                    {this.props.children}     
                     
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.oidc.user,
        claims: ownProps.claims,
        session: state.session
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
