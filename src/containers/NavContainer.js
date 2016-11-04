import React from 'react';
import { connect } from 'react-redux';
import userManager from '../components/utils/userManager';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import Footer from '../containers/Footer';
import Button from '../components/common/Button';
import Box from '../components/common/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import Header from 'grommet/components/Header';
import { push } from 'react-router-redux';
import HeaderContainer from './HeaderContainer'
import session from '../routes/utils/session'
import { getClaims } from '../components/utils/getClaims'
import schools from '../data/schools.json';
import { loadSchools } from '../actions/searchActions'
import _ from 'lodash';

class NavContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      claims: ""
   }
  }

  componentWillMount() {

   let { claims } = this.props
   this.setState({claims: claims})

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate(props, state) {

  }


  render() {

   let { centreSearch } = this.state.claims

    return (
                                <Menu  inline={true} direction="row">
                {                 <Anchor href="#" className="active">Home</Anchor>  }
                {                 <Anchor href="#">Tasks</Anchor>                    }
                {                 <Anchor href="#">2017 NAPLAN Online Pilot</Anchor> }
                { centreSearch && <Anchor href="#">Bulk Download</Anchor>            }
                {                 <Anchor href="#">Contact Us</Anchor>               }
                { centreSearch && <Anchor path="$">Manage Schools</Anchor>           }
                { centreSearch && <Anchor href="#">Manage Users</Anchor>             }
                { centreSearch && <Anchor href="#">Reports</Anchor>                  }
                                </Menu>
      )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        claims: ownProps.claims
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
