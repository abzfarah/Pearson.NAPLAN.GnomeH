import {
    MANAGESCHOOLSEARCH_FETCH, MANAGESCHOOLSEARCH_FETCH_SUCCESS, MANAGESCHOOLSEARCH_FETCH_FAILURE
} from '../constants'
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

//-- manageSchoolComponent
export function manageSchoolsAsync() {

    return dispatch => {

        dispatch({
            type: MANAGESCHOOLSEARCH_FETCH,
            isLoading: true
        });

        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails")
            .then((response) => {

                return dispatch({
                    type: MANAGESCHOOLSEARCH_FETCH_SUCCESS,
                    isLoading: false,
                    schoolData: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: SCHOOLSEARCH_FETCH_FAILURE,
                    isLoading: false
                })
            });
    }
}

