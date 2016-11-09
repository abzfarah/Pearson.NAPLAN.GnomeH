import React, { Component } from 'react'
import { connect } from 'react-redux'
import SchoolModal from './SchoolModal'
import { getSchoolAsync, getSectorsAsync, submitSchoolAsync } from '../../../actions/manageSchoolActions'

class UpdateSchoolContainer extends Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this);
    }

      componentDidMount() {
       
        //--SchoolCode 
        var schoolCode ='01003'
        //--TODO    
        //   Get current SchoolCode
        this.props.getSchoolAsync(schoolCode);
        this.props.getSectorsAsync();
    }

    submitForm(model) {

        this.props.submitSchoolAsync(model)
    }

    render() {

        const { isLoading, isLoaded, schoolData, sectors} = this.props;

        return (
            <div>
              <SchoolModal schoolData={schoolData}
               initialValues={schoolData}
               sectors={sectors}
                 submitForm={this.submitForm} />
            </div>     
        )
    }
}

//-- nothijg to do with AddSchool Get
function mapStateToProps(globalState) {

   var schoolData = {};
    return {
        //    isLoading: globalState.AddSchool.isLoading,
        //   isLoaded: globalState.AddSchool.isLoaded,
        schoolData:  globalState.manageSchool.schoolData,
        sectors:  globalState.manageSchool.sectors,
        
    }
}


export default connect(mapStateToProps, { getSchoolAsync, getSectorsAsync, submitSchoolAsync  })(UpdateSchoolContainer)