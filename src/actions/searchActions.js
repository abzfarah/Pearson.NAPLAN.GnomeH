
import logger from 'redux-logger';
import axios from 'axios';
import thunk from "redux-thunk"

const LOAD_SCHOOLS = 'LOAD_SCHOOLS';
const LOAD_SCHOOLS_SUCCESS = 'LOAD_SCHOOLS_SUCCESS';
const LOAD_SCHOOLS_FAILURE = 'LOAD_SCHOOLS_FAILURE';

export function loadSchools(keyword) {

    return dispatch => {

        return axios.get("http://localhost:3000/schools")
            .then((response) => {
            

                return dispatch({
                    type: LOAD_SCHOOLS_SUCCESS,
                    isLoading: false,
                    schoolList: response.data
                });

                //   return response.data;
            })
            .catch((err) => {
                //--TODO Handle Error
                dispatch({
                    type: LOAD_SCHOOLS_FAILURE,
                    isLoading: false
                })
            });
    }
}
