import {
  LOAD_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  USER_EXPIRING,
  SESSION_TERMINATED,
  LOADING_USER,
  RETRIEVE_CLAIMS
} from '../constants'


export function selectSchool(school) {
  return {
    type: SELECT_SCHOOL,
    payload: school
  };
}

export function retrieveClaims(claims) {
  return {
    type: 'RETRIEVE_CLAIMS',
    payload: {
      claims: claims
    }
  };
}