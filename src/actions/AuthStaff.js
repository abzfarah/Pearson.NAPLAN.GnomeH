import * as types from '../constants'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

export function getAuthStaffsAsync(){

    return dispatch => {

        return axois.get('')
            .then((response) =>{

                dispatch({
                    type :  types.GETAUTHSTAFFS_FETCH_SUCCESS,
                    isLoading : false,
                    isLoaded : true,
                    response : response
                })
            })
            .catch((error) => {

                dispatch({
                    type : types.GETAUTHSTAFFS_FETCH_FAILURE,
                    isLoading: false,
                    isLoaded: false,
                    error: error
                })
            })
    }
}