import * as types from '../constants'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

export function getAuthStaffsAsync(centreCode, year) {

    return dispatch => {

        return axios.get("http://audockerintstg01.epenau.local:12700/api/v1/AuthorisedStaff/projectID/1/clientScope/VICRegScope/centreCode/" + centreCode + "/authorizedStaffYear/" + year)
            .then((response) => {

                dispatch({
                    type: types.GETAUTHSTAFFS_FETCH_SUCCESS,
                    isLoading: false,
                    isLoaded: true,
                    response: response.data
                })

                //  return response.data;
            })
            .catch((error) => {

                dispatch({
                    type: types.GETAUTHSTAFFS_FETCH_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
            })
    }
}