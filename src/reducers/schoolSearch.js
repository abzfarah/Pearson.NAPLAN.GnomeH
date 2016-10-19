const REQUEST_SCHOOLS = 'REQUEST_SCHOOLS'
const RECEIVE_SCHOOLS = 'RECEIVE_SCHOOLS'

export default function Schools(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {

    case REQUEST_SCHOOLS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SCHOOLS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
