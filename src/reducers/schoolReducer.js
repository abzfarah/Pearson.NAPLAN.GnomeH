import {
    SCHOOLSEARCH_FETCH,
    SCHOOLSEARCH_FETCH_SUCCESS,
    SCHOOLSEARCH_FETCH_FAILURE
} from '../constants/index'

const initialState = {
    isLoading: false,
    schoolData: [],
    error: {}
}

export default function schoolSearch (state = initialState, action = {}) {

debugger
    switch (action.type) {

        case SCHOOLSEARCH_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                schoolData: action.schoolData
            });

        case SCHOOLSEARCH_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                response: action.response
            })

            default:
        return state
    }

      
}