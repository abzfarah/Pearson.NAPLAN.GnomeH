import axios from 'axios';
import { RECEIVE_SCHOOL_SEARCH, REQUEST_SCHOOL_SEARCH, SELECT_SCHOOL, SELECT_SCHOOL_FETCH,
    SELECT_SCHOOL_FETCH_SUCCESS,
    SELECT_SCHOOL_FETCH_FAILURE } from '../constants'

export function requestSearch(search) {
    return {
        type: REQUEST_SCHOOL_SEARCH,
        isLoading: true,
        search,
    };
}


export function selectSchool(centreCode) {
    return dispatch => {
          return axios.get("http://audockerintstg01.epenau.local:12000/api/v1/centresearch/" + centreCode)
                      .then((response) => {
                          dispatch({
                              type: 'SELECT_SCHOOL_FETCH_SUCCESS',
                              isLoading: false,
                              isLoaded: true,
                              school: response.data[0]
                          });
                      })
                      .catch((err) => {
                          dispatch({
                              type: 'SELECT_SCHOOL_FETCH_FAILURE',
                              isLoading: false,
                              isLoaded: false
                          })
                      });
    }

}



export function fetchSearchFromServer(search) {
    return dispatch => {
        dispatch(requestSearch(search));
            return fetch(`http://audockerintstg01.epenau.local:12000/api/v1/centresearch/${search.term}`)
        .then(req => req.json())
        .then(json => dispatch(receiveSearch(search, json)));
    }
}

export function fetchSchoolFromServer(centreCode) {
    return dispatch => {
        dispatch(requestSearch(centreCode));
            return fetch(`http://audockerintstg01.epenau.local:12000/api/v1/centresearch/${centreCode}`)
        .then(req => req.json())
        .then(json => dispatch(receiveSchool(centreCode, json)));
    }
}

function shouldFetchSearch(state, search) {
    if (!search || !search.term) return false;
    const results = state.searchResults[search.term];
    if (results && results.isFetching) return false 
    else return true
        
}

export function fetchSearch(search) {
    return (dispatch, getState) => {
        if (shouldFetchSearch(getState(), search)) {
          return dispatch(fetchSearchFromServer(search));
        }
    };
}


function receiveSearch(search, json) {
    let result = _.map(json,_.partialRight(_.pick,['centreName','centreCode']));
    
    return {
        type: RECEIVE_SCHOOL_SEARCH,
        items: json.packages,
        receivedAt: Date.now(),
        search: Object.assign({}, search, { schools: result }),
    };
}

