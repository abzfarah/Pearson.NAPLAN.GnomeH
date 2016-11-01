import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import _ from 'lodash';
import Form from '../components/common/Form';
import FormField from '../components/common/FormField';
import Search from '../components/common/Search';
import Select from '../components/common/Select';

class SchoolSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            schools: [],
            options: [],
            selectedSchool: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillMount() {

      let school_raw = this.props.schools;
      let schools = [];   // Formatted for select box

      school_raw.map((school, index) => {
      let option = {
          value: school.centreCode,
          label: school.centreName
        };
          schools.push(option);
      });

      this.setState({
        schools: schools
      })


    }


    componentWillReceiveProps(nextProps) {

        if (!nextProps.isLoading && nextProps.schoolList) {


        }
    }


    onSearch(event) {

      let input = _.toUpper(event.target.value);
      let schools = this.state.schools;
      let filtered_school = "";

      if (input.length >= 3) {
         filtered_school = _.filter(schools, function (school) {
             return _.startsWith(school.label, input);
        });
      }

      this.setState({ options: filtered_school })
    }

    onChange(event) {


      let name = event.option.label
      let code = event.option.value

      this.props.dispatch({
          type: 'SELECT_SCHOOL',
          schoolName: name,
          schoolCode: code
      })
      debugger;
    }

    render() {

        return (
            <div>
              <div className="school-search">
                <Form>
                  <FormField>
                    <Select
                    value="Select school"
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    options={this.state.options}
                    placeHolder="Seach for school" />
                  </FormField>
                </Form>
                </div>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
  return {
      dispatch
  };
}

function mapStateToProps(globalState) {

    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolSearch)
