import {
  LOAD_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  USER_EXPIRING,
  SESSION_TERMINATED,
  LOADING_USER
} from '../constants'


// dispatched when the existing user expired
export function userExpired() {
  return {
    type: USER_EXPIRED
  };
}

// dispatched after a successful redirect callback
export function redirectSuccess(user) {
  return {
    type: REDIRECT_SUCCESS,
    payload: user
  };
}

// dispatched when a user has been found in storage
export function userFound(user) {
  return {
    type: USER_FOUND,
    payload: user
  };
}

// dispatched when silent renew fails
// payload: the error
export function silentRenewError(error) {
  return {
    type: SILENT_RENEW_ERROR,
    payload: error
  };
}

// dispatched when the user is logged out
export function sessionTerminated() {
  return {
    type: SESSION_TERMINATED
  };
}

// dispatched when the user is expiring (just before a silent renew is triggered)
export function userExpiring() {
  return {
    type: USER_EXPIRING
  };
}

// dispatched when a new user is loading
export function loadingUser() {
  return {
    type: LOADING_USER
  };
}

export function loadSubscriptionsStart() {
  return {
    type: LOAD_SUBSCRIPTIONS_START
  };
}

export function loadSubscriptionsSuccess(channels) {
  return {
    type: LOAD_SUBSCRIPTIONS_SUCCESS,
    payload: channels
  };
}


export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error
  }
}

export function removeError(error) {
  return {
    type: REMOVE_ERROR
  }
}

// this will generate an error
export function errorRequest() {
  return (dispatch) => {
    const url = 'https://www.thisweirdurlhopefullydoesntexist.com';

    apiRequest(url)
      .then(result => {
        dispatch(setError(result.error));
        dispatch(push('/error'));
      });
  }
}
