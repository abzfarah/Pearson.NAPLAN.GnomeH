import * as types from './actionTypes';
import store from '../store';

export function oidcLogoutSuccess() {
  return {
    type: OIDC_LOGOUT_SUCCESS
  };
}

export function loadTokenSuccess(token) {
  return { type: types.OIDC_LOAD_TOKEN_SUCCESS, token };
}

export function loadTokenError(token) {
  return { type: types.OIDC_LOAD_TOKEN_ERROR, token };
}

export function loadTokenInfo(token) {
  // const token = store.getState().oidc.user.access_token;
  return token ? dispatch(loadTokenSuccess(token)) : dispatch(loadTokenError(token));
}
