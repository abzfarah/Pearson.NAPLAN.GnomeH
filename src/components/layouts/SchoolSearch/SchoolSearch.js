import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { schoolSearchAsync } from '../../../actions/schoolActions'
import Form from '../../common/Form';
import FormField from '../../common/FormField';
import Search from '../../common/Search';
import Select from '../../common/Select';

class SchoolSearch extends React.Component {

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
                    value: x.schoolId,
                    label: x.schoolCode + "-" + x.schoolName + "-" + x.suburb
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



        )
    }
}

SchoolSearch.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(globalState) {

    return {
        isLoading: globalState.school.isLoading,
        schoolData: globalState.school.schoolData
    }
}

export default connect(mapStateToProps, { schoolSearchAsync })(SchoolSearch)
