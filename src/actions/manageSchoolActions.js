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
            // return axios.get("http://localhost:3000/schoolList")
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

        dispatch({
            type: types.GETSCHOOL_FETCH,
            isLoading: true,
            isLoaded: false
        });
        //  return axios.get("http://localhost:3000/schoolDetails")
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
                    type: types.GETSCHOOL_FETCH_FAILURE,
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

export function deleteSchool(schoolCode) {

    return dispatch => {

        return axios.post('http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/DeleteCentreDetails/centreCode/' + schoolCode)
            .then((response) => {

                dispatch({
                    type: types.SCHOOL_DELETE_SUCCESS,
                    isLoading: true
                })
            })
            .catch((error) => {

                dispatch({
                    type: types.SCHOOL_DELETE_FAILURE,
                    isLoading: false
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
        //  return axios.get("http://localhost:3000/sectors")
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

export function getSuburbsAsync(postCode) {

    //  return dispatch => {

    //--TODO
    //----Handle loading !
    //  return axios.get("http://localhost:3000/suburbs")
    return axios.get("http://audockerintstg01.epenau.local:12500/api/v1/PostCodeSearch/postCode/" + postCode)
        .then((response) => {

            /*  dispatch({
                  type: types.GETSUBURBS_FETCH_SUCCESS,
                  isLoading: false,
                  isLoaded: true,
                  response: response.data
              
              })*/
            return response.data
        })
        .catch((error) => {

            /*    dispatch({
                    type: types.GETSUBURBS_FETCH_FAILURE,
                    isLoading: false,
                    isLoaded: true
                })*/
        })
    // }
}

