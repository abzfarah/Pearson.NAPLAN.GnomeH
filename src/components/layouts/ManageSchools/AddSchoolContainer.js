import React, { Component } from 'react'
import { connect } from 'react-redux'
import SchoolModal from './SchoolModal'
import { getSectorsAsync, submitSchoolAsync } from '../../../actions/manageSchoolActions'

class AddSchoolContainer extends Component {

    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this);
    }


    componentDidMount() {

        this.props.getSectorsAsync();
    }

    submitForm(model) {

        return this.props.submitSchoolAsync(model)

    }

    doSubmit() {
        
        return new Promise((resolve, reject) => {
            let form = this.refs.schoolForm.getWrappedInstance();
            let result = form.submit();
            if (form.valid) {
               resolve()
            }

            reject('Invalid form');
        })

    }

    render() {

        const { isLoading, isLoaded, schoolData, sectors} = this.props;

        return (
            <div>
                <SchoolModal schoolData={schoolData} initialValues={schoolData} sectors={sectors} onSubmit={this.submitForm} ref={'schoolForm'} />
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    console.log(globalState.manageSchool.sectors)
    var schoolData = {};

    return {
        //    isLoading: globalState.AddSchool.isLoading,
        //   isLoaded: globalState.AddSchool.isLoaded,
        schoolData: schoolData,
        sectors: globalState.manageSchool.sectors,
    }
}

export default connect(mapStateToProps, { getSectorsAsync, submitSchoolAsync }, null, { withRef: true })(AddSchoolContainer)