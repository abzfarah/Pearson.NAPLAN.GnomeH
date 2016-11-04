import {
    MANAGESCHOOLSEARCH_FETCH,
    MANAGESCHOOLSEARCH_FETCH_SUCCESS,
    MANAGESCHOOLSEARCH_FETCH_FAILURE
} from '../constants'

const initialState = {
    isLoading: false,
    schoolData: [],
    error: {}
}

export default (state = initialState, action = {})=>{

    switch(action.type){

        // case MANAGESCHOOLSEARCH_FETCH:
        //     return Object.assign({}, state,{
        //         isLoading:true
        //     })

        case MANAGESCHOOLSEARCH_FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoading:false,
                schoolData: action.response
            })
    }
    return state
}