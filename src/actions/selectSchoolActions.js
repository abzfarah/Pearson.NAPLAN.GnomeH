import axios from 'axios'

import {
    SELECT_SCHOOL_FETCH,
    SELECT_SCHOOL_FETCH_SUCCESS,
    SELECT_SCHOOL_FETCH_FAILURE,
} from '../constants'


export function selectSchool(schoolCode) {
    return dispatch => {
          return axios.get("http://audockerintstg01.epenau.local:12000/api/v1/centresearch/" + schoolCode)
                      .then((response) => {
                          dispatch({
                              type: SELECT_SCHOOL_FETCH_SUCCESS,
                              isLoading: false,
                              isLoaded: true,
                              school: response.data[0]
                          });
                      })
                      .catch((err) => {
                          dispatch({
                              type: SELECT_SCHOOL_FETCH_FAILURE,
                              isLoading: false,
                              isLoaded: false
                          })
                      });
    }

}

