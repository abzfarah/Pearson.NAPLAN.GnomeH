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

        return axios.get("http://audockerintstg01.epenau.local:12000/api/v1/centresearch/" + keyword)
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
