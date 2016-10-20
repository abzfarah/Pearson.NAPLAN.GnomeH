
import {
    STATEMENT_FETCH, STATEMENT_FETCH_SUCCESS, STATEMENT_FETCH_FAILURE,
    STATEMENT_SUBMIT, STATEMENT_SUBMIT_SUCCESS, STATEMENT_SUBMIT_FAILURE
} from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    statementData: {},
    response: {},
    error: {}
};

export default (state = initialState, action = {}) => {

    switch (action.type) {

        //-- Fetch
        case STATEMENT_FETCH:
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false
            });

        case STATEMENT_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                statementData: action.statementData
            });

        case STATEMENT_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false
            });
        //-- Submit
        case STATEMENT_SUBMIT:
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false
            });

        case STATEMENT_SUBMIT_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                response: action.response
            });

        case STATEMENT_SUBMIT_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false,
                error: action.error
            });

    }
    return state;
}

