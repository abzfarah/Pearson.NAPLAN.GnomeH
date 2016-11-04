import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSchoolForm from './AddSchoolForm'
import { getSchool, submitSchool } from '../../../actions/schoolActions'

class AddSchoolPage extends Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
    }

    ComponentDidMaount() {

        //--TODO    
        //   Get current SchoolCode
    }

    submitForm(model) {
        console.log('dddddddddd')
     

    }

    render() {

        const { isLoading, isLoaded, schoolData} = this.props;

        return (
            <div>
                <AddSchoolForm schoolData={schoolData} initialValues={schoolData} submitForm={this.submitForm} />
            </div>
        )
    }
}

//-- nothijg to do with AddSchool Get
function mapStateToProps(globalState) {
    var schoolData = {};
    schoolData.centreCode = '01003';
    return {
        //    isLoading: globalState.AddSchool.isLoading,
        //   isLoaded: globalState.AddSchool.isLoaded,
        schoolData: schoolData
    }
}
export default connect(mapStateToProps, {submitSchool }})(AddSchoolPage)