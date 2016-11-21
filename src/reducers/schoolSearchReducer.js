import { RECEIVE_SCHOOL_SEARCH, REQUEST_SCHOOL_SEARCH } from '../constants';

export function packagesBySearch(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SCHOOL_SEARCH:
            return Object.assign({}, state, {
             [action.search.term]: searchResults(state[action.search.term], action)
            });
    default:
    return state;
    }
}

export function searchResults(state = {
    isLoading: false,
    schools: [],
    search: {},
    }, action) {

    switch (action.type) {
        case REQUEST_SCHOOL_SEARCH:
        return Object.assign({}, state, {
            isLoading: true,
            search: action.search.schools,
        });

        case RECEIVE_SCHOOL_SEARCH:
            return Object.assign({}, state, {
                isLoading: false,
                schools: action.search.schools,
                lastUpdated: action.receivedAt,
                search: action.search,
         });

        default:
          return state;
    }
}

export function searchTerms(state = { term: null }, action) {
  switch (action.type) {
  case 'CLEAR_SEARCH':
    return {};

  case REQUEST_SCHOOL_SEARCH:
    return Object.assign({}, state, {
      term: action.search.term,
      isLoading: true
    });

  case RECEIVE_SCHOOL_SEARCH:
    return Object.assign({}, state, {
      term: action.search.term,
      isLoading: false
    });

  default:
    return state;
  }
}