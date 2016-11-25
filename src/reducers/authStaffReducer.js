import * as types from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    authStaffList: [],
    error: {}
}
export default (state  = initialState, action = {}) => {

    switch (action.type) {

        case types.GETAUTHSTAFFS_FETCH_SUCCESS:
 
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                authStaffList: action.response
            })
            
        case types.GETSCHOOL_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: false
            })
    }
     return state
}

