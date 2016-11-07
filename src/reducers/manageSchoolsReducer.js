import {
    MANAGESCHOOLSEARCH_FETCH, MANAGESCHOOLSEARCH_FETCH_SUCCESS, MANAGESCHOOLSEARCH_FETCH_FAILURE,
    GETSCHOOL_FETCH, GETSCHOOL_FETCH_SUCCESS, GETSCHOOL_FETCH_FAILURE,
    SCHOOL_SUBMIT, SCHOOL_SUBMIT_SUCCESS, SCHOOL_SUBMIT_FAILUR
} from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    schoolDataList: [],
    error: {}
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case MANAGESCHOOLSEARCH_FETCH:
            return Object.assign({}, state,{
                isLoading:true
            })

        case MANAGESCHOOLSEARCH_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                schoolDataList: action.response
            });

        case SCHOOL_SUBMIT:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false
            });

        case SCHOOL_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: fasle,
                isLoaded: true,
                response: action.response
            });

        case SCHOOL_SUBMIT_FAILUR:
            return Object.assign({}, state, {
                isLoading: fasle,
                isLoaded: true,
                error: action.response
            });
    }
    return state
}