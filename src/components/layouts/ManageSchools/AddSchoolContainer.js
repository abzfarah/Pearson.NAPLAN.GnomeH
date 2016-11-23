import React, { Component } from 'react'
import { connect } from 'react-redux'
import SchoolModal from './SchoolModal'
import { getSchoolAsync, getSectorsAsync, getSuburbsAsync, submitSchoolAsync } from '../../../actions/manageSchoolActions'

class AddSchoolContainer extends Component {

    constructor(props) {
        super(props)

        this.submitForm = this.submitForm.bind(this);        
    }

    componentDidMount() {

        //--Update School
        if (this.props.centreCode ) {

            this.props.getSchoolAsync(this.props.centreCode);
        }

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

        const { isLoading, isLoaded, schoolData, sectors, suburbs, centreCode, getSuburbsAsync} = this.props;

        return (
            <div style={{ maxHeight: 390, width: 550 }}>
                {((isLoaded && !isLoading) || centreCode == null) &&
                    <SchoolModal
                        schoolData={schoolData}
                        initialValues={schoolData}
                        sectors={sectors}
                        onSubmit={this.submitForm}
                        getSuburbs={this.getSuburbs}
                        ref={'schoolForm'} />}
            </div>
        )
    }
}

function mapStateToProps(globalState) {

    var schoolData = {};

    if (globalState.manageSchool.schoolData) {
        schoolData = globalState.manageSchool.schoolData;
    }

    return {
        //isLoading: globalState.AddSchool.isLoading,
        //isLoaded: globalState.AddSchool.isLoaded,
        schoolData: schoolData,
        sectors: globalState.manageSchool.sectors,
        isLoaded: globalState.manageSchool.isLoaded,
        isLoading: globalState.manageSchool.isLoading,
    
    }
}

export default connect(mapStateToProps, { getSchoolAsync, getSectorsAsync, getSuburbsAsync, submitSchoolAsync }, null, { withRef: true })(AddSchoolContainer)