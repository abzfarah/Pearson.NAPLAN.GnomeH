import { SCHOOLSEARCH_FETCH, SCHOOLSEARCH_FETCH_SUCCESS, SCHOOLSEARCH_FETCH_FAILURE } from '../constants'
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

export function schoolSearchAsync(keyword) {

    return dispatch => {

        dispatch({
            type: SCHOOLSEARCH_FETCH,
            isLoading: true            
        });

//http://audockerintstg01.epenau.local:12000/api/v1/centresearch/1003
       // return axios.get("http://melbndocker01.epenau.local:12000/api/centresearch/" + keyword)
         return axios.get("http://audockerintstg01.epenau.local:12100/api/v1/StatementCompliance/schoolid/" + keyword)
       
            .then((response) => {
                console.log('response')
                
                return dispatch({
                    type: SCHOOLSEARCH_FETCH_SUCCESS,
                    isLoading: false,
                    schoolData: response.data
                });

                //   return response.data;
            })
            .catch((err) => {
                //--TODO Handle Error
                dispatch({
                    type: SCHOOLSEARCH_FETCH_FAILURE,
                    isLoading: false
                })
            });
    }
}





