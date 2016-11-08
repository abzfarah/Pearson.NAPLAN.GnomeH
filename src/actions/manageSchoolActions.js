import {
    MANAGESCHOOLSEARCH_FETCH, MANAGESCHOOLSEARCH_FETCH_SUCCESS, MANAGESCHOOLSEARCH_FETCH_FAILURE,
    GETSCHOOL_FETCH, GETSCHOOL_FETCH_SUCCESS, GETSCHOOL_FETCH_FAILURE,
    SCHOOL_SUBMIT, SCHOOL_SUBMIT_SUCCESS, SCHOOL_SUBMIT_FAILURE,
    GETSECTORS_FETCH, GETSECTORS_FETCH_SUCCESS, GETSECTORS_FETCH_FAILURE,
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
                    response: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: MANAGESCHOOLSEARCH_FETCH_FAILURE,
                    isLoading: false
                })
            });
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
                    type: SCHOOL_SUBMIT_SUCCESS,
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

//--TODO 
//----Move to a shared action
export function getSectorsAsync(){

    return dispatch =>{

        //--TODO
        //----Handle loading !
        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetSectors")
        .then((response) => {

            dispatch({
                type: GETSECTORS_FETCH_SUCCESS,
                isLoading: false,
                isLoaded: true,
                response: response.data
            })
        })
        .catch((error) => {

            dispatch({
                type:GETSECTORS_FETCH_FAILURE_SUBMIT_FAILURE,
                isLoading: false,
                isLoaded: true
            })
        })
    }
}