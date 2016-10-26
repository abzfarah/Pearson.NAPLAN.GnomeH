import {
    USER_LOGGEDIN
} from '../constants'


const initialState = {
    loggedIn: false
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case USER_LOGGEDIN:
            return Object.assign({}, state, {
                loggedIn: true,
                claims: action.payload

            })

    }

    return state
}
