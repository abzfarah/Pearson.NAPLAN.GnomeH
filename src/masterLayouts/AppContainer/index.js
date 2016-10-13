import React from 'react';
import MainHeader from './MainHeader';
import Footer from '../../containers/Footer';
import userManager from '../../components/utils/oidc/userManager';
import Button from '../../components/Button';
import Box from '../../components/Box';
import { StickyContainer, Sticky } from '../../components/Sticky';
class AppContainer extends React.Component {



  render() {
    return (
      <div>

    { this.props.children }
    <Footer fixed="true"></Footer>
  </div>
  )
}
}


export default AppContainer;
