import * as types from '../constants'
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

//-- manageSchoolComponent
export function manageSchoolsAsync() {

    return dispatch => {

        dispatch({
            type: types.MANAGESCHOOLSEARCH_FETCH,
            isLoading: true
        });

        return new Promise((resolve, reject) => {

            axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails")
                .then((response) => {

                    dispatch({
                        type: types.MANAGESCHOOLSEARCH_FETCH_SUCCESS,
                        isLoading: false,
                        response: response.data
                    });

                    resolve(response)
                })
                .catch((err) => {
                    dispatch({
                        type: types.MANAGESCHOOLSEARCH_FETCH_FAILURE,
                        isLoading: false
                    })
                    reject(err)
                });
        })
    }
}


export function getSchoolAsync(schoolCode) {

    return dispatch => {

        //   dispatch({
        //     type: GETSCHOOL_FETCH,
        //       isLoading: true,
        //       isLoaded: false
        //    });

        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/" + schoolCode)

            .then((response) => {

                dispatch({
                    type: types.GETSCHOOL_FETCH_SUCCESS,
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

export function submitSchoolAsync(schoolData) {

    return dispatch => {

        // dispatch({
        //     type: SCHOOL_SUBMIT,
        //     isLoading: true,
        //     isLoaded: false
        // });
        return axios.post("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails", schoolData)
            .then((response) => {

                dispatch({
                    type: types.SCHOOL_SUBMIT_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response
                })
                //return response.data
            })
            .catch((error) => {

                dispatch({
                    type: types.SCHOOL_SUBMIT_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
            })
    }
}

//--TODO 
//----Move to a shared action
export function getSectorsAsync() {

    return dispatch => {

        //--TODO
        //----Handle loading !
        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetSectors")
            .then((response) => {

                dispatch({
                    type: types.GETSECTORS_FETCH_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response.data
                })
            })
            .catch((error) => {

                dispatch({
                    type: types.GETSECTORS_FETCH_FAILURE_SUBMIT_FAILURE,
                    isLoading: false,
                    isLoaded: true
                })
            })
    }
}