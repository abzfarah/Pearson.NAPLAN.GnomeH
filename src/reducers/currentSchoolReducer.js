import {
    SCHOOLSEARCH_FETCH,
    SCHOOLSEARCH_FETCH_SUCCESS,
    SCHOOLSEARCH_FETCH_FAILURE
} from '../constants'


const initialState = {
  currentSchool: {}
}

const RECEIVE_SCHOOL = 'RECEIVE_SCHOOL';
const LOAD_SCHOOLS = 'LOAD_SCHOOLS';
const LOAD_SCHOOLS_SUCCESS = 'LOAD_SCHOOLS_SUCCESS';
const LOAD_SCHOOLS_FAILURE = 'LOAD_SCHOOLS_FAILURE';


export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'RECEIVE_SCHOOL':
            return Object.assign({}, state, {
                currentSchool: action.currentSchool,
            });
    }

    return state
}
