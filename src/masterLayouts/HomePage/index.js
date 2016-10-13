import React from 'react';
import Box from '../../components/Box';
import Tab from '../../components/Tab';
import Tabs from '../../components/Tabs';
import MultiTab from '../../components/MultiTab';
import Button from '../../components/Button';
import { StickyContainer, Sticky } from '../../components/Sticky';
import { connect } from 'react-redux';
import userManager from '../../components/utils/oidc/userManager';
import { errorRequest } from '../../actions';
import { CallbackComponent } from 'redux-oidc';

import { push } from 'react-router-redux';

class HomePage extends React.Component {
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
    this.props.dispatch(push('/home'));
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
    this.props.dispatch(push('/'));
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
            <Sticky style={{zIndex: 5}}>
              <Box direction="row" className="footerContainer" wrap={true} align="center" className="numba1" className="main-nav">
                <div className="under">
                  <a href="http://imgur.com/OlNC7UY"><img  id="menuLogo" src="http://i.imgur.com/OlNC7UY.png" title="source: imgur.com" />  </a>
                </div>
                <ul className="menu">
                   <li><a href="#" className="active">Home</a></li>
                   <li><a href="#">Tasks</a></li>
                   <li><a href="#">Search</a></li>
                   <li><a href="#">Reports</a></li>
                </ul>
                <div className="button-groups">
                  <Button label="Help" secondary={true} />
                  <Button label="Log Out" onClick={this.onLogoutButtonClicked} primary={true} />
                </div>
              </Box>
            </Sticky>
          </StickyContainer>
            <Box className="mid">
              <MultiTab/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
