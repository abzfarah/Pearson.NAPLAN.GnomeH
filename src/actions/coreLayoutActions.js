import * as types from '../constants';

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
  return token ? dispatch(loadTokenSuccess(token)) : dispatch(loadTokenError(token));
}
