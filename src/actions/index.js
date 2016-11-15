import axios from 'axios'
import thunk from 'redux-thunk'
import {
  LOAD_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  USER_EXPIRING,
  SESSION_TERMINATED,
  LOADING_USER,
  RETRIEVE_CLAIMS,
  STATEMENT_FETCH,
  STATEMENT_FETCH_SUCCESS,
  STATEMENT_FETCH_FAILURE,
  STATEMENT_SUBMIT,
  STATEMENT_SUBMIT_SUCCESS,
  STATEMENT_SUBMIT_FAILURE,
  SCHOOL_DETAILS_SUBMIT_SUCCESS,
  SCHOOL_DETAILS_FETCH_SUCCESS,
  SCHOOL_DETAILS_FETCH_FAILURE
} from '../constants'


export function selectSchool(school) {
  return {
    type: 'SELECT_SCHOOL',
    currentSchool: school
  };
}

export function retrieveClaims(claims) {
  return {
    type: 'RETRIEVE_CLAIMS',
    payload: {
      claims: claims
    }
  };
}


export function retrieveAllData(keyword) {
  return dispatch => Promise.all([
    dispatch(schoolDetailsAsync(keyword)),
    dispatch(getStatement(keyword))
  ]);
}

export function schoolDetailsAsync(schoolCode) {

   return dispatch => {

        dispatch({
            type: 'SCHOOL_DETAILS_FETCH',
            isLoading: true,
            isLoaded: false
        });

        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/" + schoolCode)
            .then((response) => {
                console.log('response')

                return dispatch({
                    type: SCHOOL_DETAILS_FETCH_SUCCESS,
                    success: true,
                    schoolDetails: response.data

                });
            })
            .catch((err) => {
                //--TODO Handle Error
                dispatch({
                    type: SCHOOL_DETAILS_FETCH_FAILURE,
                    success: false
                })
            });
    }
}



export function getStatement(schoolCode) {
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

//-- Insert statement
export function submitDetails(data) {
    return dispatch => {
        dispatch({
            type: 'SCHOOL_DETAILS_SUBMIT',
            isLoading: true,
            isLoaded: false
        });
         return axios.post("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/PostCentreDetails/", data)
            .then((response) => {
                dispatch({
                    type: SCHOOL_DETAILS_SUBMIT_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response
                })
                return response.data;
            })
    }
}
