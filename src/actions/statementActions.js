import axios from 'axios'
import thunk from 'redux-thunk'
import {
    STATEMENT_FETCH,
    STATEMENT_FETCH_SUCCESS,
    STATEMENT_FETCH_FAILURE,
    STATEMENT_SUBMIT,
    STATEMENT_SUBMIT_SUCCESS,
    STATEMENT_SUBMIT_FAILURE
} from '../constants'


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
