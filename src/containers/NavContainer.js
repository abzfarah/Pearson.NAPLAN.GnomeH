import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Anchor, Menu, Box, Button, Header } from '../components/common';
import _ from 'lodash';

class NavContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      claims: {}
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
                {                 <Anchor  onClick={()=>this.props.dispatch(push('/school'))} className="active">Home</Anchor>  }
                {                 <Anchor href="#">Tasks</Anchor>                    }
                {                 <Anchor href="#">2017 NAPLAN Online Pilot</Anchor> }
                { centreSearch && <Anchor href="#">Bulk Download</Anchor>            }
                {                 <Anchor href="#">Contact Us</Anchor>               }
                { centreSearch && <Anchor onClick={()=>this.props.dispatch(push('/manageschools'))}> Manage Schools </Anchor>           }
                { centreSearch && <Anchor onClick={()=>this.props.dispatch(push('/manageusers'))}> Manage Users </Anchor>               }
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
