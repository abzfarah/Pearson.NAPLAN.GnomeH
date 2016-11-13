import React from 'react';
import Box from '../../common/Box';
import Tab from '../../common/Tab';
import Tabs from '../../common/Tabs';
import MultiTab from '../../MultiTab';
import Button from '../../common/Button';
import { StickyContainer, Sticky } from '../../common/Sticky';
import { connect } from 'react-redux';
import userManager from '../../../utils/userManager';
import { errorRequest } from '../../../actions';
import CallbackComponent from '../../callback/CallbackComponent';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import NavAnchor from '../../common/NavAnchor';
import DownIcon from 'grommet/components/icons/base/Down';
import { push } from 'react-router-redux';
import auth from '../../../routes/utils/auth'


class AdminPage extends React.Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
