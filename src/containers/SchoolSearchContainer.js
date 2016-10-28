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

        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
      debugger

      var r =9;
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
          debugger;

          this.props.dispatch(schoolSearchAsync(input))

        }
    }

    onChange(event) {
      debugger;

      let code, schoolName, suburb;


      var label = event.option.label
      var values = label.split('-')
      code = values[0]
      schoolName = values[1]
      suburb = values[2]

      this.props.dispatch({
          type: 'SCHOOL_DETAILS_SELECT',
          code: code,
          schoolName: schoolName,
          suburb: suburb
      })

      debugger;
    }

    render() {

        return (

          <SchoolSearch
              onSearch={this.onSearch}
              onChange={this.onChange}
              options={this.state.options}
              claims={this.props.claims}
          />

        )
    }
}

SchoolSearchContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
      dispatch
  };
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.school.isLoading,
        schoolData: globalState.school.schoolData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolSearchContainer)
