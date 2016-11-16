import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { StickyContainer, Sticky } from '../components/common/Sticky';
import { Anchor, Button, Box, Header, Menu, NavAnchor} from '../components/common';
import userManager from '../utils/userManager';

class PageContainer extends React.Component {

    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUpdate() {

    }

    componentWillReceiveProps() {
        
    }

    render() {
        return (
            <div>
                     
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

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
