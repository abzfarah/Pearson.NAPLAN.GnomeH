import React from 'react';
import Footer from '../containers/Footer';
import userManager from '../components/utils/oidc/userManager';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import { StickyContainer, Sticky } from '../components/common/Sticky';
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
