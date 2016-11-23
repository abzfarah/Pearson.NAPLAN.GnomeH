import {
    MANAGESCHOOLSEARCH_FETCH, MANAGESCHOOLSEARCH_FETCH_SUCCESS, MANAGESCHOOLSEARCH_FETCH_FAILURE,
    GETSCHOOL_FETCH, GETSCHOOL_FETCH_SUCCESS, GETSCHOOL_FETCH_FAILURE,
    SCHOOL_SUBMIT, SCHOOL_SUBMIT_SUCCESS, SCHOOL_SUBMIT_FAILURE,
    SCHOOL_DELETE_SUCCESS, SCHOOL_DELETE_FAILURE,
    GETSECTORS_FETCH, GETSECTORS_FETCH_SUCCESS, GETSECTORS_FETCH_FAILURE,
    GETSUBURBS_FETCH, GETSUBURBS_FETCH_SUCCESS, GETSUBURBS_FETCH_FAILURE
} from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    schoolDataList: [],
    //schoolData:{},
    error: {}
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case MANAGESCHOOLSEARCH_FETCH:
            return Object.assign({}, state, {
                isLoading: true
            })

        case MANAGESCHOOLSEARCH_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                schoolDataList: action.response
            });

        //-- GETSCHOOL
        case GETSCHOOL_FETCH:
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false
            })

        case GETSCHOOL_FETCH_SUCCESS:

            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                schoolData: action.response
            });

        case GETSCHOOL_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false,
                error: action.response
            });
        //--SUBMIT
        case SCHOOL_SUBMIT:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false
            });

        case SCHOOL_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                response: action.response
            });

        case SCHOOL_SUBMIT_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                error: action.response
            });
        //--DELETE    

        case SCHOOL_DELETE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                isDeleted: true
            });

        case SCHOOL_DELETE_FAILURE:

            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                isDeleted: false,
                response: action.error
            });
        //--GETSECTORS
        case GETSECTORS_FETCH:
            return Object.assign({}, state, {
                isLoading: true
            })

        case GETSECTORS_FETCH_SUCCESS:

            return Object.assign({}, state, {
                isLoading: false,
                sectors: action.response
            });

        case GETSECTORS_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                error: action.response
            });

        ///--GETSUBURBS
        //   case GETSUBURBS_FETCH:
        //       return Object.assign({}, state,{
        //           isLoading:true
        //       })

        case GETSUBURBS_FETCH_SUCCESS:

            return Object.assign({}, state, {
                isLoading: false,
                suburbs: action.response
            });

        case GETSUBURBS_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,

            });

    }
    return state
}