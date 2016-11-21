import axios from 'axios';
import { RECEIVE_SCHOOL_SEARCH, REQUEST_SCHOOL_SEARCH, SELECT_SCHOOL } from '../constants'

export function requestSearch(search) {
    return {
        type: REQUEST_SCHOOL_SEARCH,
        isLoading: true,
        search,
    };
}

function fetchSearchFromServer(search) {
    return dispatch => {
        dispatch(requestSearch(search));
            return fetch(`http://audockerintstg01.epenau.local:12000/api/v1/centresearch/${search.term}`)
        .then(req => req.json())
        .then(json => dispatch(receiveSearch(search, json)));
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

export function selectSchool(selectedSchool) {
        return{
            type: SELECT_SCHOOL,
            school: selectedSchool,
            isLoading: false
        }            
    }

