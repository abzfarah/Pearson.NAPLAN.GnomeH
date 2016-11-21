import * as types from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: fasle,
    authStaffList: [],
    error: {}
}
export default (state, action = {}) => {

    switch (action.types) {

        case types.GETAUTHSTAFFS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                authStaffList: action.response
            })
            
        case types.GETSCHOOL_FETCH_FAILURE:
            return Object.assign({}, state, {
                isLoading: fasle,
                isLoaded: false
            })
    }
}