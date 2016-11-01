import {
    SCHOOLSEARCH_FETCH,
    SCHOOLSEARCH_FETCH_SUCCESS,
    SCHOOLSEARCH_FETCH_FAILURE
} from '../constants'


const initialState = {
    isLoading: false,
    schoolData: [],
    error: {}
}

const SELECT_SCHOOL = 'SELECT_SCHOOL';
const LOAD_SCHOOLS = 'LOAD_SCHOOLS';
const LOAD_SCHOOLS_SUCCESS = 'LOAD_SCHOOLS_SUCCESS';
const LOAD_SCHOOLS_FAILURE = 'LOAD_SCHOOLS_FAILURE';


export default (state = initialState, action = {}) => {

    switch (action.type) {


        case SELECT_SCHOOL:
            return Object.assign({}, state, {
                currentSchoolname: action.schoolName,
                currentSchoolcode: action.schoolCode
            });

    }

    return state
}
