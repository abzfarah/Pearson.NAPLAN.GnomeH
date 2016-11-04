import axios from 'axios'
import thunk from 'redux-thunk'

import {
    GETSCHOOL_FETCH,
    GETSCHOOL_FETCH_SUCCESS,
    GETSCHOOL_FETCH_FAILURE,
    SCHOOL_SUBMIT,
    SCHOOL_SUBMIT_SUCCESS,
    SCHOOL_SUBMIT_FAILURE
} from '../constants'


export function getSchool(schoolCode) {

    return dispatch => {

        dispatch({
            type: GETSCHOOL_FETCH,
            isLoading: true,
            isLoaded: false
        });

        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/" + schoolCode)

            .then((response) => {

                dispatch({
                    type: GETSCHOOL_FETCH_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response.data
                });
            })

            .catch((err) => {

                dispatch({
                    type: GETSCHOOL_FETCH_FAILURE,
                    isLoading: false,
                    isLoaded: false
                })
            })
    }
}

export function submitSchool(schoolData) {

    return dispatch => {

        dispatch({
            type: SCHOOL_SUBMIT,
            isLoading: true,
            isLoaded: false
        });
        return axios.post("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/01003")
            .then((response) => {

                dispatch({
                    type: SCHOOL_SUBMIT,
                    isLoading: false,
                    isLoaded: true,
                    response: response
                })
                //return response.data
            })
            .catch((error) => {
                dispatch({
                    type: SCHOOL_SUBMIT_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
            })
    }
}