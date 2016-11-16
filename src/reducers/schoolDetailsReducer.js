
import {
    SCHOOL_DETAILS_SUBMIT_SUCCESS, SCHOOL_DETAILS_SELECT, SCHOOL_DETAILS_FETCH_SUCCESS,SCHOOL_DETAILS_FETCH_FAILURE
} from '../constants'

const initialState = {
    schoolDetails: {},
};


export default (state = initialState, action = {}) => {

    switch (action.type) {

       case 'SCHOOL_DETAILS_FETCH':
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false
            });

        //-- Fetch
        case SCHOOL_DETAILS_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                schoolDetails: action.schoolDetails
            });

        case SCHOOL_DETAILS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                schoolDetails: action.schoolDetails
            });

        case SCHOOL_DETAILS_FETCH_FAILURE:
            return Object.assign({}, state, {
                schoolDetails: false
            });
    }
    return state;
}
