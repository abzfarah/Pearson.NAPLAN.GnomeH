import React, { Component, PropTypes } from 'react'
import { connect, bindActionCreators } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions  from '../../actions/schoolActions'
import Select from 'react-select'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css'

import { fetchSchoolsIfNeeded} from '../../actions/searchActions'

class SchoolSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
            selectedSchool: ''
        }

        this.getOptions = this.getOptions.bind(this);
        this.logChange = this.logChange.bind(this);

        var u = actions;
    }

    getOptions(input, callback) {

      const { dispatch} = this.props

        setTimeout(() => {

            if (input.length < 3) {
                return callback();

            } else if (input.length === 3) {

                debugger;

                dispatch(fetchSchoolsIfNeeded(input))


            } else {
                callback(null, {
                    options: this.state.options
                });
            }
        }, 500);
    }

    logChange(val) {

        //--TODO
        this.context.router.transitionTo('/home/' + val.value);
    }

    render() {

      var i=5;

        return (
            <div>
                <Select.Async
                    name="keyword"
                    value={this.state.selectedSchool}
                    loadOptions={this.getOptions}
                    onChange={this.logChange}
                    autoload={false}
                    />
            </div>
        )
    }
}

SchoolSearch.contextTypes = {
    router: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  const { schoolsByKeyword } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } =  {
    isFetching: true,
    items: []
  }

  return {
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(SchoolSearch)
