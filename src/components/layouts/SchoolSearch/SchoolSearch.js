import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { schoolSearchAsync } from '../../../actions/schoolActions'
import Select from 'react-select'
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css'

class SchoolSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
            selectedSchool: ''
        }

        this.getOptions = this.getOptions.bind(this);
        this.logChange = this.logChange.bind(this);
    }

    getOptions(input, callback) {

        setTimeout(() => {

            if (input.length < 3) {
                return callback();

            } else if (input.length === 3) {
                this.props.schoolSearchAsync(input).then(
                    (result) => {
                        let options = [];

                        result.map((x, i) => {

                            let option = {
                                value: x.schoolId,
                                label: x.schoolCode + "-" + x.schoolName + "-" + x.suburb
                            };

                            options.push(option);
                        });

                        this.setState({ options: options });
                        callback(null, {
                            options: options
                        });
                    }
                );
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

        return (
            <div>
            <h1>bbb</h1>
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


export default connect(null, { schoolSearchAsync })(SchoolSearch)