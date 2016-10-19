import { SCHOOLSEARCH_FETCH, SCHOOLSEARCH_FETCH_SUCCESS, SCHOOLSEARCH_FETCH_FAILURE } from '../constants/index'
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

export function schoolSearchAsync(keyword) {
debugger
    console.log('schoolAction')
    return dispatch => {

        return axios.get("http://melbndocker01.epenau.local:12000/api/centresearch/" + keyword)
            .then((response) => {

                dispatch({
                    type : SCHOOLSEARCH_FETCH_SUCCESS,
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
