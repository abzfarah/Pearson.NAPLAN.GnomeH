import fetch from 'isomorphic-fetch'
import axios from 'axios';

const REQUEST_SCHOOLS = 'REQUEST_SCHOOLS'
const RECEIVE_SCHOOLS = 'RECEIVE_SCHOOLS'

function schoolsByKeyword(state = { }, action) {
  switch (action.type) {
    case RECEIVE_SCHOOLS:
    case REQUEST_SCHOOLS:
      return Object.assign({}, state, {
        [action.keyword]: posts(state[action.keyword], action)
      })
    default:
      return state
  }
}

function receiveSchools(schools) {
  return {
    type: RECEIVE_SCHOOLS,
    posts: schools.data,
    receivedAt: Date.now()
  }
}




function requestSchools(keyword) {
  return {
    type: REQUEST_SCHOOLS,
    keyword
  }
}

function fetchSchools(keyword) {
  return dispatch => {
    dispatch(requestSchools(keyword))
    return axios.get("http://melbndocker01.epenau.local:12000/api/centresearch/" + keyword)
      .then(response => {

        dispatch(receiveSchools(response))
      })

  }
}

function shouldFetchSchools(state, subreddit) {
  return true
}

export function fetchSchoolsIfNeeded(keyword) {
  return (dispatch, getState) => {
    if (shouldFetchSchools(getState(), keyword)) {
      return dispatch(fetchSchools(keyword))
    }
  }

}
