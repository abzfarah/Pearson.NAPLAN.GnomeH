import {
    SELECT_SCHOOL
} from '../constants'

const initialState = {
    isLoading: false,
    isLoaded: false,
    currentSchool: {},
    error: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SELECT_SCHOOL:
            return Object.assign({}, state, {
                isLoading: false,
                isLoaded: true,
                currentSchool: action.school
            });
    }
    return state;
}

