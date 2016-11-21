
import {
         STATUS_FETCH,
         STATUS_FETCH_SUCCESS
} from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    status: [],
};

export default (state = initialState, action = {}) => {

    switch (action.type) {

        //-- Fetch
        case STATUS_FETCH:
            return Object.assign({}, state, {
                isLoading: true,
                isLoaded: false
            });

        case STATUS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                status: action.payload
            });

    }
    return state;
}

