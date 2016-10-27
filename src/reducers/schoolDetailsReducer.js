
import {
    SCHOOL_DETAILS_SUBMIT_SUCCESS, SCHOOL_DETAILS_FETCH_SUCCESS,SCHOOL_DETAILS_FETCH_FAILURE
} from '../constants'

const initialState = {

};

export default (state = initialState, action = {}) => {

    switch (action.type) {

        //-- Fetch
        case SCHOOL_DETAILS_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                schoolDetails: false
            });

        case SCHOOL_DETAILS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                schoolDetails: false
            });

        case SCHOOL_DETAILS_FETCH_FAILURE:
            return Object.assign({}, state, {
                schoolDetails: false
            });

    }
    return state;
}