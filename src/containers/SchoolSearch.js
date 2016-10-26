import React, { PropTypes } from 'react';


import Form from '../components/common/Form';
import FormField from '../components/common/FormField';
import Search from '../components/common/Search';
import Select from '../components/common/Select';



class SchoolSearch extends React.Component {



  render() {

      var i= 9;

    return (


      <div>
        <div className="school-search">
          <Form>
            <FormField>
              <Select
              value="Select school"
              onSearch={this.props.onSearch}
              onChange={this.props.onChange}
              options={this.props.options}
              placeHolder="Seach for school" />
            </FormField>
          </Form>
          </div>
      </div>
    )
  }
}


export default SchoolSearch;
