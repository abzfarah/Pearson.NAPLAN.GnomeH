
import axios from 'axios'
import thunk from 'redux-thunk'

import {
    // ---------------
    // Fetch Actions
    // ---------------
    STATEMENT_FETCH,
    STATEMENT_FETCH_SUCCESS,
    STATEMENT_FETCH_FAILURE,
    STATEMENT_SUBMIT,
    STATEMENT_SUBMIT_SUCCESS,
    STATEMENT_SUBMIT_FAILURE
} from '../constants'

//-- Get statement
export function getStatement(schoolCode) {

    return dispatch => {

        dispatch({
            type: STATEMENT_FETCH,
            isLoading: true,
            isLoaded: false
        });

return axios.get("http://audockerintstg01.epenau.local:12100/api/v1/StatementCompliance/centrecode/" + schoolCode)
//--MOCK_API
//return axios.get("http://localhost:3000/getStatment")
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
        //--MOCK_API
        // return axios.put("http://localhost:3000/submitStatment", statement)                 
                        
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
            //---TODO Handle Error
                dispatch({
                    type: STATEMENT_SUBMIT_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
                
            });
    }
}