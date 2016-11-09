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
                return dispatch({
                    type: SCHOOLSEARCH_FETCH_SUCCESS,
                    isLoading: false,
                    schoolDetails: response.data
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

//-- manageSchoolComponent
export function manageSchoolSearch(keyword) {
    debugger

    return dispatch => {

        dispatch({
            type: MANAGESCHOOLSEARCH_FETCH,
            isLoading: true
        });

        return axios.get("http://melbndocker01.epenau.local:12000/api/centresearch/")
            .then((response) => {

                return dispatch({
                    type: MANAGESCHOOLSEARCH_FETCH_SUCCESS,
                    isLoading: false,
                    schoolData: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: SCHOOLSEARCH_FETCH_FAILURE,
                    isLoading: false
                })
            });
    }
}

