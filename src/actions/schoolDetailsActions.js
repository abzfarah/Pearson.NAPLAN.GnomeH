import { SCHOOL_DETAILS_SUBMIT_SUCCESS, SCHOOL_DETAILS_FETCH_SUCCESS,SCHOOL_DETAILS_FETCH_FAILURE } from '../constants'
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

export function schoolDetailsAsync(keyword) {

    return dispatch => {

        return axios.get("http://audockerintstg01.epenau.local:12300/api/v1/CentreDetails/GetCentreDetails/centreCode/" + keyword)
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
