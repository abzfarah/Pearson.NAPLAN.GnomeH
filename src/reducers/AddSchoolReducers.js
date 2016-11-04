import {
    GETSCHOOL_FETCH,
    GETSCHOOL_FETCH_SUCCESS,
    GETSCHOOL_FETCH_FAILURE
} from '../constants'

const initialState = {
    isLoading = false,
    schoolData: [],
    error: {}
}

export default (state = initialState, action = {}){

    switch (action.type) {

        case GETSCHOOL_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                schoolData: action.schoolData
            });

        case GETSCHOOL_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.response
            })
    }
    return state
}