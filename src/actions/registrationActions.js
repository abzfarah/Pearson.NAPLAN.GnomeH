import axios from 'axios'
import thunk from 'redux-thunk'

import { FETCH_SCHOOL_DETAILS, 
         SCHOOL_DETAILS_FETCH_SUCCESS, 
         SCHOOL_DETAILS_FETCH_FAILURE, 
         SCHOOL_DETAILS_SUBMIT_SUCCESS,  
         STATEMENT_FETCH,
         STATEMENT_FETCH_SUCCESS,
         STATEMENT_FETCH_FAILURE,
         STATEMENT_SUBMIT,
         STATEMENT_SUBMIT_SUCCESS,
         STATEMENT_SUBMIT_FAILURE,
         STATUS_FETCH,
         STATUS_FETCH_SUCCESS,
         STATUS_FETCH_FAILURE,
} from '../constants'


export function fetchApplication (schoolCode) {
  return dispatch => Promise.all([
    dispatch(fetchStatement(schoolCode)),
    dispatch(fetchSchoolDetails(schoolCode)),
    dispatch(fetchRegistrationStatus(schoolCode))
  ])
}


export function fetchRegistrationStatus(schoolCode) {
    return dispatch => {
        dispatch({
            type: STATUS_FETCH,
            isLoading: true,
            isLoaded: false
        });
          return axios.get("http://audockerintstg01.epenau.local:55550/api/v1/Orchestration/home/" + schoolCode)
                      .then((response) => {
                          dispatch({
                              type: STATUS_FETCH_SUCCESS,
                              isLoading: false,
                              isLoaded: true,
                              payload: response.data
                          });
                      })
                      .catch((err) => {
                          // --TODO Handle Error
                          dispatch({
                              type: STATUS_FETCH_FAILURE,
                              isLoading: false,
                              isLoaded: false
                          })
                      });
    }
}



export function fetchSchoolDetails(keyword) {
    return dispatch => {
        dispatch({
            type: FETCH_SCHOOL_DETAILS,
            isLoading: true,
            isLoaded: false
        });
        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/" + keyword)
            .then((response) => {
                return dispatch({
                    type: SCHOOL_DETAILS_FETCH_SUCCESS,
                    isLoading: false,
                    schoolDetails: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: SCHOOL_DETAILS_FETCH_FAILURE,
                    success: false
                })
            });
    }
}


//-- Insert statement
export function submitDetails(data) {
    return dispatch => {
        dispatch({
            type: SCHOOL_DETAILS_SUBMIT,
            isLoading: true
        });
        return axios.post("http://audockerintstg01.epenau.local:12100/api/v1/StatementCompliance/", data)
            .then((response) => {
                dispatch({
                    type: SCHOOL_DETAILS_SUBMIT_SUCCESS,
                    isLoading: false,
                    response: response
                })
                return response.data;
            })
            .catch((error) => {
                dispatch({
                    type: DETAILS_SUBMIT_FAILURE,
                    isLoading: false
                })
            });
    }
}


export function fetchStatement(schoolCode) {
    return dispatch => {
        dispatch({
            type: STATEMENT_FETCH,
            isLoading: true,
            isLoaded: false
        });
          return axios.get("http://audockerintstg01.epenau.local:12100/api/v1/StatementCompliance/centrecode/" + schoolCode)
                      .then((response) => {
                          dispatch({
                              type: STATEMENT_FETCH_SUCCESS,
                              isLoading: false,
                              isLoaded: true,
                              statementData: response.data
                          });
                      })
                      .catch((err) => {
                          // --TODO Handle Error
                          dispatch({
                              type: STATEMENT_FETCH_FAILURE,
                              isLoading: false,
                              isLoaded: false
                          })
                      });
    }
}

//-- Insert statement
export function submitStatement(statement) {
    return dispatch => {
        dispatch({
            type: STATEMENT_SUBMIT,
            isLoading: true,
            isLoaded: false
        });
        return axios.post("http://audockerintstg01.epenau.local:12100/api/v1/StatementCompliance", statement)
            .then((response) => {
                dispatch({
                    type: STATEMENT_SUBMIT_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response
                })
                return response.data;
            })
            .catch((error) => {
                dispatch({
                    type: STATEMENT_SUBMIT_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
            });
    }
}
