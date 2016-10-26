import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { schoolSearchAsync } from '../actions/schoolActions'

import SchoolSearch from './SchoolSearch'



class SchoolSearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            options: [],
            selectedSchool: ''
        }


        this.onSearch = this.onSearch.bind(this);
    }



    componentWillReceiveProps(nextProps) {

        if (!nextProps.isLoading && nextProps.schoolData) {

            var result = nextProps.schoolData;
            let options = [];

            result.map((x, i) => {

                let option = {
                    value: x.centreId,
                    label: x.centreCode + "-" + x.centreName + "-" + x.suburb
                };

                options.push(option);
            });

            this.setState({ options: options })
        }
    }


    onSearch(event) {

      let input = event.target.value
        if (input.length < 3) {
            if (this.state.options.length > 0) {
                this.setState({ options: [] })
            }
            return;

        } else if (input.length === 3) {

            this.props.schoolSearchAsync(input);
        }
    }

    render() {

        return (

          <SchoolSearch
              onSearch={this.onSearch}
              onChange={this.onChange}
              options={this.state.options}
          />

        )
    }
}

SchoolSearchContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.school.isLoading,
        schoolData: globalState.school.schoolData
    }
}

export default connect(mapStateToProps, { schoolSearchAsync })(SchoolSearchContainer)
