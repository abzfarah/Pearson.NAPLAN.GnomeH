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
            isLoaded: false,
            options: [],
            selectedSchool: ''
        }

        this.getOptions = this.getOptions.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.logChange = this.logChange.bind(this);
    }

    getOptions(input, callback) {

        setTimeout(() => {

            if (input.length < 3) {
                return callback();

            } else if (input.length === 3) {

                this.setState({ isLoaded: false })

                this.props.schoolSearchAsync(input);



                // this.props.schoolSearchAsync(input).then(

                //   (result) => {
                //      console.log(result)
                //  let options = [];

                //   result.map((x, i) => {

                //      let option = {
                //         value: x.schoolId,
                //         label: x.schoolCode + "-" + x.schoolName + "-" + x.suburb
                //     };

                //     options.push(option);
                // });

                // this.setState({ options: options });
                // callback(null, {
                //     options: options
                // });
                // }
                //  );
            } else {
                callback(null, {
                    options: this.state.options
                });
            }
        }, 500);

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

    logChange(val) {
        //--TODO
        this.context.router.transitionTo('/home/' + val.value);
    }

    handleSearch(input) {

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
            <div style={{ width: '200px' }}>
                {this.props.isLoading && <strong>Loading...</strong>}
                <Select
                    name="keyword"
                    value={this.state.selectedSchool}
                    loadOptions={this.getOptions}
                    isLoading={this.props.isLoading}
                    options={this.state.options}
                    onChange={this.logChange}
                    onInputChange={this.handleSearch}
                    autoload={false}
                    />
            </div>
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