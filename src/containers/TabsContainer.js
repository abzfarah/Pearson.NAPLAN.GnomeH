import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor, Tab, Tabs } from '../components/common';
import { steps } from './Steps'
import userManager from '../utils/userManager';

class TabsContainer extends React.Component {

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
        





        return (
            <div role="tablist">
                <ul className={classes}> {tabs} </ul>

                <div tabIndex={i} aria-label={tabContentTitle} role="tabpanel">

                <Box className={CLASS_ROOT + '__content'}
                    aria-label={tabContentTitle}>
                    {activeContainer}
                </Box>

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
