import { combineReducers } from 'redux'

const REQUEST_SCHOOLS = 'REQUEST_SCHOOLS'
const RECEIVE_SCHOOLS = 'RECEIVE_SCHOOLS'
const INVALIDATE_SCHOOL = 'INVALIDATE_SCHOOL'
const SELECT_SCHOOL = 'SELECT_SCHOOL'

export function selectedSchool(state = {}, action) {
  switch (action.type) {
    case SELECT_SCHOOL:
      return action.school
    default:
      return state
  }
}

export function schools(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SCHOOL:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_SCHOOLS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SCHOOLS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.schools,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}




