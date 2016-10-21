import React from 'react';
import Box from '../../common/Box';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import MultiTab from '../../MultiTab';
import Button from '../../common/Button';
import { StickyContainer, Sticky } from '../../common/Sticky';
import { connect } from 'react-redux';
import userManager from '../../utils/oidc/userManager';
import { errorRequest } from '../../../actions';
import CallbackComponent from '../../callback/CallbackComponent';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import DownIcon from 'grommet/components/icons/base/Down';
import { push } from 'react-router-redux';
import SchoolSearch from '../SchoolSearch'

class AdminPage extends React.Component {
    // load the subscriptions
    componentWillMount() {
        const { user, dispatch } = this.props;
        console.log("HomePage.componentWillMount - Start");

        // check the user here and redirect to /login if necessary
        if (!user || user.expired) {
            //console.log('User is null or invalid - redirecting to login page!');
            //dispatch(push('/login'));
        }

        console.log("HomePage.componentWillMount - End");
    }

    componentDidMount() {
        console.log("HomePage.componentDidMount - Start");
        console.log("HomePage.componentDidMount - End");

    }

    successCallback = () => {
        
    }

    // display the current user
    showUserInfoButtonClick = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.props.user, null, 2));
    }

    // log out
    onLogoutButtonClicked = (event) => {
        event.preventDefault();
        userManager.removeUser(); // removes the user data from sessionStorage
        userManager.signoutRedirect();

    }

    onErrorButtonClicked = (event) => {
        event.preventDefault();
        this.props.dispatch(errorRequest());
    }

    render() {
        const { user } = this.props;

        return (
            <div>
                <StickyContainer>
                    <Sticky style={{ zIndex: 5 }}>
                        <div className="header-bar"><i></i> </div>

                        <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="first-header">
                            <div className="under">
                                <a href="http://imgur.com/OlNC7UY"><img id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
                            </div>
                            <ul className="menu"></ul>

                            <div className="button-groups">
                                <Button label="Help" secondary={true} />
                                <Button label="Log Out" onClick={this.onLogoutButtonClicked} primary={true} />
                            </div>
                        </Box>

                        <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="second-header">
                            <div className="school-heading">
                                <Header className="school-name"> St. Paul's Anglican Grammar School </Header>
                                <Header size="small" className="school-code"> School Code: 01678 </Header>
                            </div>

                            <ul className="menu"></ul>
                            <div className="search-box">

                              <SchoolSearch />

                            </div>
                        </Box>

                    </Sticky>
                </StickyContainer>

                <Menu inline={true} direction="row">
                    <Anchor href="#" className="active">
                        Home
                  </Anchor>
                    <Anchor href="#">
                        Tasks
                  </Anchor>
                    <Anchor href="#">
                        2017 NAPLAN Online Pilot
                  </Anchor>
                    <Anchor href="#">
                        Bulk Download
                  </Anchor>
                    <Anchor href="#">
                        Contact Us
                  </Anchor>
                    <Anchor href="#">
                        Manage Users
                  </Anchor>
                    <Anchor href="#">
                        Reports
                  </Anchor>
                </Menu>
                <Box className="mid">
                    <MultiTab />
                </Box>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        user: state.oidc.user,
        error: state.error.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
